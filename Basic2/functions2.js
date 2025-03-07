function calculatePrice(...num1) {
    return num1
}


console.log(calculatePrice(10,20,30,40)) 

const user = {
    username : "Parth" ,
    price  :  200 
}

function handleObject(demo) {
    console.log(`Username is ${demo.username} and Price is ${demo.price}`);
    
}

// handleObject(user)

handleObject({
    username : "Sam" ,
    price : 20
})

let arr = [10,20,30,40] ;

function returnSecondValue(arr) {
        return arr[1] 
}

console.log(returnSecondValue(arr))