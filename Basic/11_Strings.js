let name = "Parth "

let lastName = 'Kulkarni' ;

console.log(`Hello my name is ${name} and my last  name is ${lastName}`) ;

// Other way for decalring a String 

let a = new String("Parth") ;

console.log(typeof a) ;

console.log(a.length) 
console.log(a.charAt(1)) ;

console.log(a.toUpperCase()) ;
console.log(a.toLowerCase()) ;

console.log(a.indexOf('P')) 
/* If the  character is  not present in  the string then the  
   IndexOf() method returns the -1 .
*/

let aa = "  Parth" ;
console.log(aa)
console.log(aa.trimStart()) ;

console.log(aa.replace('P','p')) ;

let aaa = 'xxxxxy' ;

console.log(aaa.replaceAll('x','y')) ;

console.log(a.substring(0,4)) ;

console.log(a.slice(-1,4)) ;

