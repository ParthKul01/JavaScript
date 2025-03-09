 
 // For  of

 let arr = [1,2,3,4,5] 

 for(let i of arr) {
    console.log(i)
 }

 let name =  "Parth Kulkarni" 

 for(const i of name) {
    console.log(i)
 }

 // Maps 

 const map =  new Map()  // Maps holds the unique values 

 map.set( '1' ,"Parth")
 map.set( '2', "Sneha")

 console.log(map)

 for(const [i,val] of map) {
    console.log(i," ",val)
 }

 const stud = {  // Objects are not iterateble
    name :  "Parth" ,
    age : 18
 }

 //for(const i of stud) {
   // console.log(i," ",stud[i])
 //}

 