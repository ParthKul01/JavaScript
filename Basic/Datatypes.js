let name = "Parth" //String
let age = 10 ; // Integer
let isMale = true ; //Boolean

let arr = null ; //null means Empty 

//undefined means that the value is not assigned  

console.log(typeof("parth"))

console.log(typeof(null)) ;

// Primitive 
// 7 types : String ,  Number , Boolean , null , undefined , symbol , BigInt

// Javascript is a Dyanamic Language means it identifies the data type based on user input 

// Reference (Non primitive)

//Array , Objects , Functions 

const score = 100 ;
const scoreValue  = 10.11  ;

let id = Symbol('123') ;
let id2 = Symbol('123') ;
console.log("Comparison");
console.log(id === id2);


const bigNumber = BigInt(1232435456534253453) ;
console.log(typeof bigNumber) ;


let parth = {
    name : "Parht" ,
    age : 18 ,
    address : "Loni"
}

let fun = function(){
    console.log("Hey this is my first function ") ;
}

console.log(parth) ;
console.log(typeof fun) ;

console.log(typeof id) ;