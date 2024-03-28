// default --> if value isn't provide, take this as a default.

function add(num1 = 99, num2 = 0) {
    const result = num1 + num2;
    console.log(num1, num2);
    return result;
}

const sum = add(5, 7);

function fullName (first, last ='') {
    const full = first+ ' ' + last;
    return full; 
}

function person(numbs = []) {

}

function person(human = {}) {
    
}