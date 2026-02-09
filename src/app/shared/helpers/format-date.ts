export function toISODateUTC(date: string) {
  return new Date(`${date}T00:00:00Z`).toISOString();
}
