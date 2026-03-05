
const AT_LEAST = 1;
const PREVIOUS_INDEX_DECREMENT = 1;

/**
 * Converts an array of month names to a simplified date range string
 * Example: ['October', 'November', 'December', 'January', 'February', 'March', 'April']
 * Returns: "Oct. - Apr."
 */
export function formatMonthsToDateRange(months: string[]): string {
  if (!months || months.length === 0) {
    return "";
  }

  const monthAbbreviations: Record<string, string> = {
    January: "Jan.",
    February: "Feb.",
    March: "Mar.",
    April: "Apr.",
    May: "May",
    June: "Jun.",
    July: "Jul.",
    August: "Aug.",
    September: "Sep.",
    October: "Oct.",
    November: "Nov.",
    December: "Dec.",
  };

  const uniqueMonths = [...new Set(months)];

  if (uniqueMonths.length === 0) {
    return "";
  }

  if (uniqueMonths.length === AT_LEAST) {
    return monthAbbreviations[uniqueMonths[0]] || uniqueMonths[0];
  }

  const firstMonth = monthAbbreviations[uniqueMonths[0]] || uniqueMonths[0];
  const lastMonth = monthAbbreviations[uniqueMonths[uniqueMonths.length - PREVIOUS_INDEX_DECREMENT]] ||
                    uniqueMonths[uniqueMonths.length - PREVIOUS_INDEX_DECREMENT];

  return `${firstMonth} - ${lastMonth}`;
}

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export function formatDateToMonthDay(dateString: string): string {
  const date = new Date(dateString);
  const month = monthNames[date.getMonth()];
  // eslint-disable-next-line no-magic-numbers
  const day = String(date.getDate()).padStart(2, "0");

  return `${month} ${day}`;
}
