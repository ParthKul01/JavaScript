/* const fruits = ["Apple", "Banana", "Cherry"];

fruits.forEach( (item , index) => {
        console.log(`Fruit is ${item} and its index is ${index}`)
})


const numbers = [10, 20, 30, 40, 50];

let sum = 0  ;

numbers.forEach( (val) => {
        sum = sum + val
})

console.log(sum)


const nums = [2, 4, 6, 8];

let arr = []

nums.forEach( (i) => {
     arr.push(i*2)
});

console.log(arr) */ 


/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach( (i) => {
    if(i%2 == 0) {
        console.log(i)
    }
})

const words = ["JavaScript", "is", "fun"];

let str = ""

words.forEach( (item,index) => {
    
    if(index == 0) {
        str += item
    } else  {
    str += " " + item
    }
})

console.log(str)


const users = [
    { name: "Parth", age: 20 },
    { name: "Amit", age: 22 },
    { name: "Sara", age: 19 }
];


users.forEach( (i) => {
    console.log(`Name : ${i.name} , Age : ${i.age}`)
})



*/

let count = 0 ;

 /* const numbers = [1, 3, 5, 3, 7, 3, 9, 3];

numbers.forEach( (val) => {
    if(val == 3) {
        count ++ ;
    }
}) */

console.log(count)

let lowercaseWords = ["hello", "world", "javascript"];
let demo = []
lowercaseWords.forEach( (i) => {
    demo.push(i.toUpperCase())
})

console.log(demo)


/* const num = [1, 2, 2, 3, 4, 4, 5, 5, 5, 6];

let map = new Map()

num.forEach( (i) => {
        map.set(i,true)
})

console.log(map) */

const numbers = [1, 3, 5, 9, 15, 20, 25, 30];

const temp = [] 

numbers.forEach( (i) => {
    if(i % 3 == 0 && i % 5 == 0) {
        temp.push("FizzBuzz")
    } else if ( i % 5 == 0) {
        temp.push("Buzz")
    } else if ( i % 3 ) {
        temp.push("Fizz")
    } else {
        temp.push(i)
    }
})

console.log(temp)
