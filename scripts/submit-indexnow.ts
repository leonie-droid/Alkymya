import fs from 'node:fs';
import path from 'node:path';
import { routes } from '../src/data/routes';

const HOST = 'alkymya.co';
const KEY = 'alkymya-indexnow-2026';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

async function submitIndexNow() {
  const keyFilePath = path.join(process.cwd(), 'public', `${KEY}.txt`);
  if (!fs.existsSync(keyFilePath)) {
    throw new Error(`Fichier clé IndexNow manquant : ${keyFilePath}`);
  }

  const urlList = routes.map((r) => `https://${HOST}${r.path === '/' ? '/' : `${r.path}/`}`);

  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  };

  console.log(`[indexnow] Soumission de ${urlList.length} URLs canoniques vers api.indexnow.org...`);

  const response = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(payload),
  });

  const bodyText = await response.text();
  if (!response.ok) {
    console.error(`[indexnow] Échec HTTP ${response.status} : ${bodyText}`);
    process.exit(1);
  }

  console.log(`[indexnow] Succès HTTP ${response.status} (${urlList.length} URLs soumises).`);
}

submitIndexNow().catch((err) => {
  console.error('[indexnow] Erreur :', err);
  process.exit(1);
});
