// ES6 

/* class User {
    constructor(username,age){
        this.username = username ;
        this.age = age ;
    }

    changeUsernname() {
        return `${this.username.toUpperCase()}`
    }
}

let u = new User("Parth",18) ;
console.log(u.changeUsernname() );
console.log(u) ;

*/

function User(username, age , email) {
    this.username = username ;
    this.age = age  ;
    this.email = email ;
}

User.prototype.Print = function() {
     console.log(this.username) ;
     console.log(this.age) ;
     console.log(this.email) ;

     console.log(this.username.toUpperCase()) 
}

let a = new User("Parth",19,"kulkarniparth48@gmail.com") ;

a.Print() ;