const obj =  {
    js : "Javascript" ,
    cpp : "C++" ,
    c : "C" ,
    py : "Python"
}

for(const i in obj) {
    console.log(`${i} for  ${obj[i]}`)
}

let arr =  [1,2,3,4,5]

for(const i in arr) {
    console.log(arr[i])
}

// For of and For in loops can be used on Array 

// But the on Objects we can only use the For in loops 

// Maps are not iterateble  

