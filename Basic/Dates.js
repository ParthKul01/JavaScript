/*let date  = new Date()  ;

console.log(date.toString()) ;

console.log(date.toUTCString());

console.log(date.toDateString());

console.log(typeof date) ;


let currDate = new Date(2025,2,4) ;

console.log(currDate.toDateString());
*/
let temp = new Date("2025-3-4")  ;
console.log(temp.toLocaleString())




let date = new Date() ;

let day = date.getDate() ;
let month = date.getMonth() + 1 ;
let year  = date.getFullYear()  ;

console.log(`${day}/${month}/${year}`)

