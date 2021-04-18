import { getDate, getMonth, getHours, getMinutes, getYear } from 'date-fns';

import { Event } from '../models/event';

export interface EventView {
  id: string;
  name: string;
  description: string;
  startDay: string;
  startMonth: string;
  startHour: string;
  endDate: string;
  endHour: string;
}

const MonthInitial = [
  'JAN',
  'FEV',
  'MAR',
  'ABR',
  'MAI',
  'JUN',
  'JUL',
  'AGO',
  'SET',
  'OUT',
  'NOV',
  'DEZ',
];

function getHourMinute(date: Date): string {
  const hours = String(getHours(date)).padStart(2, '0');
  const minutes = String(getMinutes(date)).padStart(2, '0');
  return `${hours}:${minutes}`;
}

function getFormattedDate(date: Date): string {
  const day = String(getDate(date)).padStart(2, '0');
  const month = String(getMonth(date)).padStart(2, '0');
  const year = String(getYear(date)).padStart(2, '0');
  return `${day}/${month}/${year}`;
}

export default {
  render(event: Event): EventView {
    return {
      id: event.id,
      name: event.name,
      description: event.description,
      startDay: String(getDate(event.startAt)).padStart(2, '0'),
      startMonth: MonthInitial[getMonth(event.startAt)],
      startHour: getHourMinute(event.startAt),
      endDate: getFormattedDate(event.endsAt),
      endHour: getHourMinute(event.endsAt),
    };
  },

  renderMany(events: Event[]): EventView[] {
    return events.map(event => this.render(event));
  },
};
