let arr = [1,2,3,4,4,5] ;
let arr2 = [1,2,3,4]



//console.log(arr2[4][0]) ; 
//console.log(arr.reverse()) ;

//console.log(arr.sort()) 


let demo = arr2.concat(arr) ;

//console.log(demo) ;

const arr3 = [...arr,...arr2] ;
//console.log(arr3) 

const temp = [1,2,3,[4,5],6,7,[1,[10]]] ;

const real = temp.flat(Infinity) ;

console.log(real) ;

//isArray  Function 

console.log(Array.isArray([1,2,3,4])) ;

//From - Converts the five values in to the arrray 

console.log(Array.from("Parth"))  ;

console.log(Array.of(100,200,300)) ;


// Functions learned  :

/* 
1.sort() 
2.Array.from()
3.Array.of()
4.flat()
5.concat()
6.length()
7.includes()
8.Array.isArray()
9.Reverse()

*/