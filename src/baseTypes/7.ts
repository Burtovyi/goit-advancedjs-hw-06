/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
// Enum для днів тижня
enum Weekday {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function isWeekend(day: Weekday): boolean {
  return day === Weekday.Saturday || day === Weekday.Sunday;
}

const today: Weekday = Weekday.Sunday;

if (isWeekend(today)) {
  console.log('Сьогодні вихідний!');
} else {
  console.log('Сьогодні робочий день.');
}
