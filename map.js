//map --> loops through each element of the array and do operation that you passed in the call back function and hold the result from each operation in an array and finally returns array


//1.
// const numbers = [4, 5, 2, 7, 9, 4];

// const doubled = [];
// for (const num of numbers) {
//     const double = num * 2;
//     doubled.push(double)
// }

// console.log(doubled);



//2.
const numbers = [14, 50, 21, 7, 9, 4];

function doubledIt(num) {
    return num * 2;
}

const result = numbers.map(doubledIt)
// console.log(result);

//3. 
const double2 = n => n * 2;
const output = numbers.map(double2)
// console.log(output);

const numbs = [14, 50, 21, 7, 9, 24];

const doubled = numbs.map(num => num * 2)
console.log(doubled);

const fiveBonus = numbs.map(num => num + 5)
console.log(fiveBonus);

const halves = numbs.map(num => num / 2)
console.log(halves);




const friends = ['tom', 'dom', 'jhon', 'cena'];
const lengths = friends.map(frnd => frnd.length)
// console.log(lengths);

const firstLetter = friends.map (friend => friend[0]);
console.log(firstLetter);

