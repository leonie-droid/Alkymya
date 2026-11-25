export function cloudinaryUrl(url: string, width = 1200): string {
  if (!url || !url.includes('res.cloudinary.com') || !url.includes('/image/upload/')) {
    return url;
  }

  // Already contains explicit f_auto,q_auto transforms
  if (url.includes('/image/upload/f_auto,q_auto')) {
    return url.replace(
      /\/image\/upload\/f_auto,q_auto(?:,w_\d+)?(?:,c_limit)?\//,
      `/image/upload/f_auto,q_auto,w_${width},c_limit/`
    );
  }

  return url.replace(
    '/image/upload/',
    `/image/upload/f_auto,q_auto,w_${width},c_limit/`
  );
}

export function cloudinarySrcSet(url: string, widths: number[] = [600, 1000, 1400]): string | undefined {
  if (!url || !url.includes('res.cloudinary.com') || !url.includes('/image/upload/')) {
    return undefined;
  }

  return widths
    .map((w) => `${cloudinaryUrl(url, w)} ${w}w`)
    .join(', ');
}
