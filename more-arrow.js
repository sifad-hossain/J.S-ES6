const difference = (x, y) => x -y;
const multiply = (first, second, third) => first * second * third;

const getAge = (person) => person.age;
const student = { name: 'ananata', age: 45}
const age = getAge(student);
console.log(age);

const getThird = numbers => numbers[3]
const third = getThird([3, 55, 67, 455, 75, 89,59]);
// console.log(third);

const doubleIt = num => num * 2;

//no parameter
const getPI = () => Math.PI
// console.log(getPI());

// large arrow function. if you want to get anything return this function. then you have to use th return keyword
const doMath = (x, y, z) => {
    const sum = x + y + z;
    const mult = x * y * z;
    const result = sum  + mult;
    return result;
}




