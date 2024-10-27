import { differenceInDays } from "date-fns";

export function getRemainingDaysToNextCalendar() {
  const today = new Date();
  const nextCalendar = new Date(today.getFullYear(), 11, 1);
  //   return intervalToDuration({ start: today, end: nextCalendar });
  return differenceInDays(nextCalendar, today);
}
