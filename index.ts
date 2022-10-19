class Person {

  name :string;

  constructor(a :string){
    this.name = a;
  }
  함수(a :string){
    console.log('안녕' + a)
  }

}


let person1 = new Person('kim');
let person2 = new Person('park');
person1.함수('너?');

console.log(person1)
console.log(person2)