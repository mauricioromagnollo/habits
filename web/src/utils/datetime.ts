import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
// import 'dayjs/locale/en-us'

export class DateTimeUtil {
  static setLocale(locale = 'pt-br') {
    dayjs.locale(locale)
  }

  static isDateInThePast(date: Date) {
    return dayjs(date).endOf('day').isBefore(new Date())
  }

  static isDatesTheSameDay(date: Date, dateInString: string) {
    return dayjs(date).isSame(dateInString, 'day')
  }

  static getTheDayOfWeek(date: Date) {
    return dayjs(date).format('dddd')
  }

  static getFormattedDayAndMonth(date: Date) {
    return dayjs(date).format('DD/MM')
  }

  static getAllDatesSinceBeginOfYear() {
    const firstDayOfTheYear = dayjs().startOf('year')
    const today = new Date()

    const dates = []
    let compareDate = firstDayOfTheYear

    while (compareDate.isBefore(today)) {
      dates.push(compareDate.toDate())
      compareDate = compareDate.add(1, 'day')
    }

    return dates
  }
}
