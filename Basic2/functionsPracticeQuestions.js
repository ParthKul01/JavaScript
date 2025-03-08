function isEvenorOdd(num) {
    if(num%2 == 0) {
        return "Even"
    }

    return "Odd"
}

console.log(isEvenorOdd(3))


function reverse1(str) {
    return str.split('').reverse().join('')
}

console.log(reverse1("Parth"))

function MultiplyArray(arr,num) {
    for(i = 0 ; i < arr.length ; i++) {
            arr[i] = arr[i] * num 
    }

    return arr  ;
}

let arr2 = [1,2,3,4,5] 

let arr3 = MultiplyArray(arr2,2) 

console.log(arr3) ;

let info =  {
    name : "Parth" ,
    id : 18
}

let info2 = {
    surname : "Kulkarni" ,
    Age : 20
}

let info3 = {...info,...info2} 

console.log(info3)


function sumany(...num) {
    
}