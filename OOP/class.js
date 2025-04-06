class User {
     constructor(username) {
        this.username = username ;
     }

     logMe(){
        console.log(`Username : ${this.username}`)
     }

     createId(){
        return '123'
     }
}

const parth =  new User("Parth") ;
console.log(parth.createId())