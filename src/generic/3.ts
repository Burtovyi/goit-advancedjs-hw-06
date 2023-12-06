/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

function merge<T extends object, U extends object>(target: T, source: U): T & U {
  return Object.assign(target, source);
}

const mergedObj = merge(
  { name: 'John', age: 30 },
  { city: 'New York', country: 'USA' }
);

console.log(mergedObj);



export {}