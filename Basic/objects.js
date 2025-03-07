
/* let a = Symbol("1") ;


let user = {
    [a] : "ID 10" ,
   name : "Parth" , //The name key internally is treated as String "name"
    age : 18 ,
    gender : "Male" ,
    email : "kulkarniparth48@gmail.com"
} ;

console.log(user) ; 

// 2 ways to access the Objects Value 

console.log(user.gender) ; 

console.log(user["name"]) ;

// Modifying the Objects Values 

user.age = 20 ;

console.log(user) ;

Object.freeze(user) ; // Used to freeze the Object that results in no Modification */

let student  =  {
    id : 12 , 
    name : "Parth" , 
    Prn : "0124UCSM2003" ,
    Roll : 138 
} ;


console.log(student["name"] ) 

student.name = "Sneha" ;

console.log(student)

console.log(`Student name  ${student.name}`) ;






