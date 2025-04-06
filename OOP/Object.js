function mul(num) {
    return num*5 ;
}

mul.power = 2 ;


function createUser(username,score) {
        this.username  =  username ;
        this.score = score ;
}

createUser.prototype.increment = function(){
    this.score++ ;
    console.log(this.score)
}



let chai = new createUser('chai',5)
let tea =  new createUser('Code',6)

chai.increment() ;
tea.increment() ;
