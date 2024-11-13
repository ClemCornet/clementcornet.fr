import { format as formatFns } from 'date-fns'

export const formatDate = (date: Date | string, format = 'do MMM, yyy') => {
  if (typeof date === 'string') {
    date = new Date(date)
  }
  return formatFns(date, format)
}
