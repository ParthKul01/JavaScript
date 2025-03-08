
let sum = (num1,num2) => {

    return num1 + num2 
}

console.log(sum(10,20))


const greet = (name) => {
     return `Hello ${name}`
}


console.log(greet("Parth"))

// Check if positive 

const check = (num) => {
        if(num >= 0) {
            return true 
        }

        return false 
}

console.log(check(-1))


const getLastElement = (arr) => {
            return arr[arr.length-1]
}

console.log(getLastElement([1,2,3,4,5]))


let i = 0 
while(i <= 15) {
    if(i%2 == 1){
        console.log(i)
    }
    i++ ;
}


let sumnum = 0 ;

for(let i = 1 ; i <= 50 ; i ++) {
    sumnum += i
}

console.log(sumnum)

let str = "P-a-r-t-h"

console.log(str.split('-'))

console.log(str.slice(0,2))





