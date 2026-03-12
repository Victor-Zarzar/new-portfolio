export function toISODateUTC(date: string) {
  return new Date(`${date}T00:00:00Z`).toISOString();
}

export function formatDateTimeBR(date: string | Date) {
  return new Intl.DateTimeFormat("pt-BR", {
    timeZone: "America/Sao_Paulo",
    dateStyle: "short",
    timeStyle: "medium",
  }).format(new Date(date));
}
