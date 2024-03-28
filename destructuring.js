const actor = { 
    name : 'lamiya',
    age : 12,
    phone : '01945327351',
    money : 1000000
}
// console.log(actor.phone);

// const phone = actor.phone;
// console.log(phone);

// if right side is an object left side of destructuring will be objects as well
const {phone} = actor;
console.log(phone);




//array destructuring.
const numbers = [58, 80];
const [first, second] = numbers;
const [x, y] = [90, 27];

//Advanced
function doubleThem(a, b) {
    
    return [a*3, b*2]
}
const [prothom, ditioy] = doubleThem(5, 7)
console.log(prothom, ditioy);
