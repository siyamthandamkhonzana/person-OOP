class Person{
    constructor(name, age,gender, interest) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.interest = interest;
    }
 hello() {
               return `Hello,my name is ${this.name} and I am ${this.age} years old. My intrest are ${this.interest[0, 1]} and ${this.interest[0]}.`;
    }
        
   } 
let person = new Person('Ryan',30,'male',['being a hardarse',' agile', 'ssd hard drives'] )
let greeting = person.hello();
console.log(greeting);
