export const ISO_DATE_LEN = 10;

export function toIsoDate(value: string): string {
  const ts = Date.parse(value);
  if (!Number.isNaN(ts)) {
    return new Date(ts).toISOString().slice(0, ISO_DATE_LEN);
  }
  const i = value.indexOf("T");

  return i >= 0 ? value.slice(0, i) : value;
}
