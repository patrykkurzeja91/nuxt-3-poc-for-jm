import { formatInTimeZone } from 'date-fns-tz'

export default function useDateConverter() {
  const newDate = (someDate: string) => new Date(someDate)

  const londonDate = (date: string) => {
    return formatInTimeZone(newDate(date), 'Europe/London', 'dd.MM.yyyy')
  }
  return {
    londonDate,
  }
}
