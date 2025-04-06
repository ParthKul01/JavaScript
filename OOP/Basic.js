class Person {

    constructor(name,color) {
        this.name = name  ;
        this.color = color ;
    }

    drive(){
        console.log(`${this.name} is Driving having Color ${this.color}`)
    }

} 

let mycar = new Person("Parth","White") ;
mycar.drive() ;