// filter selects elements based on a condition and return an arrow with the elements that fulfilled the conditio.

const numbers = [1, 6, 5, 9, 8];
const players = [33, 63, 62, 74, 72];
// const selected = players.filter(p => p > 70);
// const selected = players.filter(p => p > 80);
const selected = players.filter(p => p  % 2 === 1);
console.log(selected);