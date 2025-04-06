/*
class Person {
    constructor(name,age) {
        this.name =name ;
        this.age = age  ;
    }

    greet(){
        console.log(`Hello , my name is ${this.name} and my age is ${this.age}`)
    }
}

let p = new Person("Parth",19) ;
p.greet() ;

*/

/*
class Person {
    constructor(name) 
    {
        this.name =  name  ;
    }
}

class Employee extends Person {
    constructor(sal) {
        super("Parth") ;
        this.sal = sal ;
    }

    display(){
        console.log(`Name : ${this.name} & Salary : ${this.sal}`)
    }
}

let e = new Employee("Parth",10000000)

e.display() ;

*/

class Wallet {
    #balance = 0;
  
    addMoney(amount) {
      if (amount > 0) {
        this.#balance += amount;
      }
    }
  
    getBalance() {
      return this.#balance;
    }
  }
  
  let w = new Wallet();
  w.addMoney(200);
  console.log(w.getBalance()); 