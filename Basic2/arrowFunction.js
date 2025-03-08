/* const user =  {
    username : "Parth" , 
    price : 999 ,

    msg : function() {
        console.log(`${this.username} , welcome to website`);
        
    }
}

user.msg()

user.username = "Sneha"

user.msg()  */


const chai = () => {
    let username = "Parth" 
    console.log(this)
}

//chai()

// Arrow Functions Syantax

// () => {}

const addnum = (num1,num2) => { // When  we  writ e curly braces then we have to  use the return statement
    return num1+num2
}

console.log(addnum(1,2))


const add = (num1,num2) => (num1 +num2) // In this case we do not have to write the curly braces 

console.log(add(10,20)) // both the function will give you the same output . 

