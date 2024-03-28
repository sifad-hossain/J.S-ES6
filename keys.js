const glass = { name: 'glass', color: 'golden', price: 34, isCleaned: true };
console.log(glass);

const keys = Object.keys(glass);
const values = Object.values(glass);
const pair = Object.entries(glass);

// console.log(keys);
// console.log(values);
// console.log(pair);

// delete glass.isCleaned;
// console.log(glass);

const { isCleaned, ...shortGlass } = glass;
// console.log(shortGlass);

Object.seal(glass);
glass.source = 'Bangladesh';
glass.price = 5000;
delete glass.name;
console.log(glass);