let  score = "33abc" ;
console.log(typeof score) ;

let valueInNumber = Number(score) ;
console.log( valueInNumber) ;

let demo = undefined ;

let val = Number(demo) ;
console.log(val) ;

//"33" => 33 
//"33abc" => NaN 
//true => 1 ; false => 0 

let isLoggedIn = "jkcj" 
let booleanIsLoggedIn = Boolean(isLoggedIn) ;
console.log(booleanIsLoggedIn) ;

//1 => true ; 0 => false 
//"" => false ; "value" => true  

let num = 100 ;
let str = String(num) ;
console.log(typeof str) ;