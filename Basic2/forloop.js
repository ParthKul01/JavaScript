// For of Loop 

// the for Of loop onlt works for  Array  , Strings 

let arr = [1,2,3,4,5]

for(let i of arr) {
    if(i%2 == 0)
    console.log(i)
}


let obj = {
    name : "Parth" ,
    age : 20
}


for(let i in obj) {
    console.log(i+ " : " +obj[i])
}



