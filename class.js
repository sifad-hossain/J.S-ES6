const products = [
    { id: 1, name: 'lenovo', price: 45000 },
    { id: 2, name: 'dell', price: 55000 },
    { id: 3, name: 'hp', price: 29000 },
    { id: 4, name: 'macBook', price: 18000 }
]

//has some properties, method
// class product{
//     country = 'bangladesh';
//     speak(talk){
// console.log(`talking about ${talk}`);
//     }
// }

// const lenovo = new product ()
// // console.log(lenovo);
// lenovo.speak('oba kicu koy')




// class product{
//     country = 'Bangladesh';
//     constructor(name){
//         this.name = name;
//     }
//     speak(talk){
//       console.log(`talking about ${talk}`);  
//     }
// }

// const lenovo = new product('Le Le lenovo')
// console.log(lenovo);
// lenovo.speak('hello world')




class Teacher{
    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }
    lecture(){
        console.log('sir is teaching Math');
    }
}

const lamiya = new Teacher ('lamiya madam', 'physics')
console.log(lamiya);

const sifat = new Teacher('Sifat', 'Chemstry');
console.log(sifat);