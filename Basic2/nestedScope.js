function one() {
     const name = "Parth"

     function two() {
        const website = "youtube"
        console.log(name)
     }

     //console.log(website)

     two()
}

one()

console.log(addone(5) )  // This will not give any error 

function addone(value) {
    return value+1
}


console.log(addTwo(2)) // This will give an error  

const addTwo = function(num) {
    return num  + 2
}

addTwo(2)  // This will  rum smoothly 

