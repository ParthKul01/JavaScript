class Animal {
    sound(){
        console.log("This is a Animal Class called from Dog class ") ;
    }
}


class Dog extends Animal {

}

let d = new Dog() ;
d.sound() ;