/* const names = ["Parth", "Amit", "Rahul", "Sam", "Jonathan"];
// Expected Output: ["Parth", "Rahul", "Jonathan"]


const filtered = names.filter( (item) => {
        if(item.length >= 5) {
            return item 
        }
}) */

//console.log(filtered)


const words = ["apple", "banana", "grape", "kiwi", "mango"];
// Expected Output: ["kiwi"]


const a  = words.filter ((i) => {
     if(!(i.includes('a'))) {
        return i 
     }
})

console.log(a)


const numbers = [1, 2, 3, 4, 5];
// Expected Output: [2, 4, 6, 8, 10]

const double = numbers.map( (num) => {
    return num * 2
})

console.log(double)


const names = ["parth", "amit", "rahul"];
// Expected Output: ["PARTH", "AMIT", "RAHUL"]


const names2 = names.map( (str) => {
    return str.toUpperCase()
})

console.log(names2)


const students = [
    { name: "Alice", marks: 85 },
    { name: "Bob", marks: 60 },
    { name: "Charlie", marks: 78 }
];
// Expected Output: ["Alice", "Bob", "Charlie"]


const stud = students.map ( (i) => {
     return i.name
})

console.log(stud)

const celsiusTemps = [0, 20, 30, 40];
// Formula: (C * 9/5) + 32
// Expected Output: [32, 68, 86, 104]


const result = celsiusTemps.map ( (i) => {
     return ( i * 9/5 ) + 32
})

console.log(result)


const num = [10, 25, 89, 45, 60];
// Expected Output: 89


let max = 0 

const result1 = num.reduce( (acc,item) =>  {

     if(item > max) {
        max = item 
     }

},0)

console.log(max)