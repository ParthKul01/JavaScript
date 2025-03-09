const num =  [1,2,3,4,5]



/* const mynum = num.reduce( (acc,curr) => {
    console.log(`ACC : ${acc} and currval : ${curr}`)
        return acc + curr 
},0)

console.log(mynum) */

 /* const Total = num.reduce( (acc,curr) => {
        return acc + curr 
},0)

console.log(Total) */


const shoppingCart = [

    {
    item : "Shampoo",
    price : 299 ,   
    } ,
    {
    item : "Comb",
    price : 499 ,   
    } ,
    {
    item : "Watch",
    price : 1299 ,   
    } 
]

const Total = shoppingCart.reduce((acc,item) => {
        return acc + item.price 
},0)

console.log(Total)

