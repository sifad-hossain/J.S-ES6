const max = Math.max(6,46, 64, 32, 75, 88, 65);
// console.log(max);
const numbers = [3, 5, 6, 35, 64,54, 94, 64,76,];
const arrayMax = Math.max(numbers);
// const arrayMax = Math.max(...numbers);
// console.log(arrayMax);


//use spread operator to copy
const friends = [4, 5, 40, 90];
const bondhu = friends;
const dosto = [...friends];//copy
console.log(dosto);
friends.push(100);

console.log(dosto);
console.log(friends);

//Advanced 
const sonkha = [...friends, 9999];//add extra element while copy
console.log(sonkha);