//let arr = new Object() ; // Singleton Object  
 /* const arr2 = {} // Non singlton Object 

arr2.id = "123" ;
arr2.name = "Parth" ;
console.log(arr2) ;  */

const user =  {
    email : "kulkarniparth48@gmail.com" ,
    fullname : {
        userfullname : {
            firstname : "Parth" ,
            lastname : "kulkarni"
        }
    }
}


console.log(user)



const obj1 = {
    1 : "a" ,
    2 : "b" ,
    3 : "c"
} 

const obj2 = {
    4 : "d" ,
    5 : "e" 
}

//const obj3 = Object.assign(obj1,obj2) ;


const obj3 = {...obj1,...obj2} ;
console.log(obj3)

console.log(Object.values(obj1))

console.log(Object.keys(obj1))