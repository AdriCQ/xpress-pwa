export function getDateYearAndWeek() {
  const currentDate = new Date()
  const startDate = new Date(currentDate.getFullYear(), 0, 1)
  // @ts-ignore
  const diffInDays = Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24))
  const currentWeek = Math.floor((diffInDays + currentDate.getDay() + 1) / 7)

  return { year: currentDate.getFullYear(), week: currentWeek }
}

/**
 * toCurrency
 * @param val
 * @returns
 */
export function toCurrency(val: number) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  })

  return formatter.format(val)
}
