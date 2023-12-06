/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

// Використовуємо generics для визначення типів ключа та значення
interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

const pair1: KeyValuePair<string, number> = { key: "age", value: 25 };
const pair2: KeyValuePair<string, string> = { key: "name", value: "John" };
const pair3: KeyValuePair<number, boolean> = { key: 42, value: true };


export {};