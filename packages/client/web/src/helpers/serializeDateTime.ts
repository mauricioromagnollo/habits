type SerilizeDateTimeProps = {
  date: string;
  time: string;
};

export function serializeDateTime({
  date = '',
  time = '',
}: SerilizeDateTimeProps): string {
  const [day, month, year] = date.split('/');
  const [hour, minute] = time.split(':');

  // const newDate = new Date(
  //   Number(year),
  //   Number(month),
  //   Number(day),
  //   Number(hour),
  //   Number(minute),
  // );

  // const parsedDate = Date.parse(
  //   `${Number(year)}-${Number(month)}-${Number(day)}T${Number(hour)}:${Number(
  //     minute,
  //   )}:00Z`,
  // );

  // const parsedDate = Date.parse(`${date} ${time}`);

  const newDate = new Date(`${year}-${month}-${day}T${hour}:${minute}:00Z`);

  console.log(newDate);

  return `${year}-${month}-${day}T${hour}:${minute}:00Z`;
}
