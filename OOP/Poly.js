class Animal {
    speak(){
        console.log("Hey this is a Animal class ") ;
    }
}

class Dog extends Animal {
    speak(){
        console.log("HEy this is a Dog class ") ;
    }
}

let a = new Animal() ;
let b = new Dog() ;
a.speak() ;
b.speak() ;