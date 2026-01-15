export function calculateReadingTime(
  text: string | undefined | null,
  wordsPerMinute: number = 200,
): number {
  if (!text || text.trim().length === 0) {
    return 1;
  }

  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return minutes;
}

export function formatReadingTime(
  minutes: number,
  locale: string = "en",
): string {
  switch (locale) {
    case "pt":
      return `${minutes} min de leitura`;
    case "es":
      return `${minutes} min de lectura`;
    case "en":
    default:
      return `${minutes} min read`;
  }
}
