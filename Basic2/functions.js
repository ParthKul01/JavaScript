function hello() {  // functions Declaration 
     console.log("Hello")
}

//hello() // functions calling 

/*function sum(num1,num2) {
    console.log(num1 + num2)
} */

function sum(num1,num2) {
    let result = num1 + num2 
    return result  
}


let sum1 = sum(10,20)

//console.log(sum1)

function login(user) {
    if(!user) {
        console.log("Please Enter a Valid String ")
        return 
    }
    return `${user} just logged  in` 
}

let var1 = login()

console.log(var1)