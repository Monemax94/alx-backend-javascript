export function taskFirst () {
  const task = 'I prefer const when I can.';
  return task;
}
/* eslint-disable no-unused-vars */
export function getLast () {
  return ' is okay';
}
/* eslint-disable no-unused-vars */

export function taskNext () {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
