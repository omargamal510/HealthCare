const todayDate: Date = new Date();
const tomorrowDate: Date = new Date(todayDate.getTime() + 24 * 60 * 60 * 1000);

export const todayDateFormat: string = todayDate.toISOString().split("T")[0];
export const tomorrowDateFormat: string = tomorrowDate
  .toISOString()
  .split("T")[0];

// function that checks if the date is ended

export const defineTodayTomorrow = (d: string): string => {
  if (d === todayDateFormat) {
    return "Today";
  } else if (d === tomorrowDateFormat) {
    return "Tomorrow";
  } else {
    return d;
  }
};

export function isDeprecatedDate(dateToCheck: string): boolean {
  const now: Date = new Date();
  now.setHours(0, 0, 0, 0);

  const yesterday: Date = new Date(now);
  yesterday.setDate(now.getDate() - 1);

  const targetDate: Date = new Date(dateToCheck);
  targetDate.setHours(0, 0, 0, 0);

  return targetDate <= yesterday;
}
