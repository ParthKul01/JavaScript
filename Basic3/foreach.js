
const coding = ["js" ,"Python" ,"Java"] 

/*coding.forEach( (i) => {
    console.log(i)
} ) */

 /* let str = (
    (str) => {
        return `Hey ${str}`
    }
)("Parth")

console.log(str) */ 

function printme(item) {
    console.log(item)
}

// coding.forEach( printme)

coding.forEach( (item,index) => {
      console.log(item,index)
})

const myCoding = [
    {
        name : "Javascript" ,
        file : ".js"
    } ,
    {
        name : "Java" ,
        file : ".java"
    } ,
    {
        name : "Python" ,
        file : ".py"
    } 
]

myCoding.forEach( (item) => {
        console.log(item.name , " ", item.file)
})