import React, { useState, useRef, useCallback } from 'react';
import {
  AntiBotPayload,
  ProtectedFormType,
  computeAntiBotSignature,
} from '../utils/antiBotToken';

/**
 * Invisible anti-bot hook with zero friction for human visitors:
 * - Passive honeypot field state
 * - Render/open timestamp tracking
 * - Real user interaction detection (focus, pointer, keyboard, input)
 * - Deterministic JS execution token
 */
export function useAntiBot(formType: ProtectedFormType) {
  const [honeypotValue, setHoneypotValue] = useState('');
  const loadedAtRef = useRef<number>(Date.now());
  const interactedRef = useRef<boolean>(false);

  const markInteracted = useCallback(() => {
    if (!interactedRef.current) {
      interactedRef.current = true;
    }
  }, []);

  const resetProtection = useCallback(() => {
    loadedAtRef.current = Date.now();
    interactedRef.current = false;
    setHoneypotValue('');
  }, []);

  const getAntiBotPayload = useCallback((): AntiBotPayload => {
    const loadedAt = loadedAtRef.current;
    return {
      website: honeypotValue,
      _loadedAt: loadedAt,
      _botToken: computeAntiBotSignature(loadedAt, formType),
      _interacted: interactedRef.current,
      _formType: formType,
    };
  }, [honeypotValue, formType]);

  const formInteractionProps = {
    onFocus: markInteracted,
    onPointerDown: markInteracted,
    onKeyDown: markInteracted,
    onChange: markInteracted,
  };

  return {
    honeypotValue,
    setHoneypotValue,
    markInteracted,
    resetProtection,
    getAntiBotPayload,
    formInteractionProps,
  };
}

interface HoneypotFieldProps {
  value: string;
  onChange: (value: string) => void;
  id?: string;
}

/**
 * Invisible honeypot input positioned offscreen without display:none
 * so automated bots still see and fill it while humans and screen readers never interact with it.
 */
export function HoneypotField({ value, onChange, id = 'website-hp' }: HoneypotFieldProps) {
  return (
    <div
      aria-hidden="true"
      className="fixed -left-[9999px] -top-[9999px] w-px h-px opacity-0 pointer-events-none overflow-hidden"
    >
      <label htmlFor={id}>Site web (laisser vide)</label>
      <input
        id={id}
        type="text"
        name="website"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        data-lpignore="true"
        data-1p-ignore="true"
      />
    </div>
  );
}
