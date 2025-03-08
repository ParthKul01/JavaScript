// IIFE (Immediatly Invoked Function Expression )

((name) => {
    console.log(`Hey ${name} , you just Logged in ..`) ;
})("Parth") ;

let a =( function sum(num1,num2){
    return num1+num2 ;
})(10,20) ;

//console.log(a)

( function print(){
    for(let i = 1 ; i <= 10 ; i++) {
        console.log(i)
    }
})() ;


// Write an IIFE that returns "I am learning JavaScript" and store it in a variable. Then, print the variable.

let aa = ( () => {
    return `I am learning Javascript `
})() ;

console.log(aa)


let max = ( (num) => {
    
    let Max = 0 ;

    for(let i = 0 ; i < num.length  ; i++){
        if(num[i] > Max) {
            Max = num[i] ;
        }
    }

    return Max 

})([1,2,3,4,5]) ;

console.log("Max  is ",max)


//Write an IIFE that takes a number as an argument and logs whether it is even or odd.

let ans = ( (check) => {
        if(check % 2 == 0){
            return true ;
        }

        return false ;
})(10)

console.log(ans)

// Write an IIFE that returns an object with properties name and age, then print the object.


const person = (function(){
    return {
        name : "Parth" ,
        age : 18
    }
    
})() ;

console.log(person)


const student = (function(obj){
    return {
        name : obj.name  ,
        roll : obj.roll 
    }
})({name : "Parth" , roll : 20}) ;

console.log(student)


// Write an IIFE that takes a number as an argument and logs its multiplication table up to 10.

let multiplication = ( (num) => {
    for(let i = 1 ; i <= 10 ; i++) {
        console.log(num * i)
    }
})(5)

console.log(multiplication)

// Write an IIFE that generates a random number between 1 and 100 and logs it to the console.

let random = ( () => {
    return Math.random() * 100 ;
})() ;

console.log(random)

