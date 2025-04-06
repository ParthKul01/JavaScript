const pro = new Promise(function(resolve,reject){
    setTimeout(function(){
          resolve({user:"Parth", email : "parth@gmail.com"})
    },1000)
})

pro.then(function(user){
    console.log(user); 
})

const pro2 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false  ;
        if(!error){
            resolve({user:"Parth",email:"parth@gmail.com"}) ;
        } else  {
            reject("Somthing went wrong") ;
        }
    },2000)
})

pro2
.then(function(user1) {
      console.log(user1);
      
      return user1.user ;
})
.then(function(user){
    console.log(user);

})
.catch(function(err){
    console.log(err) ;
}).finally(() => {
    console.log("Excecuted ")
})