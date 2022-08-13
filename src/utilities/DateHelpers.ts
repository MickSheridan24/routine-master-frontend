const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]


export function formatDate(dateString: string): string{
    const date = new Date(dateString)
    const year = date.getFullYear()
    const dateNum = date.getDate()
    const monthIndex = date.getMonth()
    const monthName = months[monthIndex]
    const dayIndex = date.getDay()
    const dayName = days[dayIndex]

    return dayName + " " + monthName + " " + dateNum + ", " + year
}

export function currentMonth(){
  const month= new Date(Date.now()).getMonth()

  return months[month]
}
