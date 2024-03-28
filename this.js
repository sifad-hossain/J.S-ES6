class person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sleep(){
        console.log(`I love you ${this.name}`);
    }
    activity(){
        this.sleep();
    }
}

const niaz = new person('Lamiya', 15);
console.log(niaz);
niaz.sleep();


