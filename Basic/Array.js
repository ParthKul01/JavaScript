// array 

/* const arr = [0,1,2,3,4,5,true , "Parth"] ; // Array can contain any type of Data  with diffrent Datatypes

console.log(arr) ;

let arr2 = new Array(1,2,3,4,5);


console.log(typeof arr2);
console.log(arr2) ;

console.log("Length of Array is "+arr2.length) ;

arr2.push(6) ;
console.log(arr2) ;

arr2.pop() ;
console.log(arr2);

console.log(arr2.includes(2)) ;

console.log(arr2.indexOf(4)) ;

let str = arr2.join() ;

console.log(str) ;

let demo = new Array(arr2) ;

console.log(demo) ; */


let arr = [1,2,3,4,5] ;

let ans = arr.slice(0,2) ;

console.log("Slice  Operation "+ans) ;
console.log("Original Array After Slice  Operations " + arr) ;

let ans2 = arr.splice(0,2) ;


console.log("Splice  Operation "+ans2) ;
console.log("Original Array After Splice  Operations " + arr) ;