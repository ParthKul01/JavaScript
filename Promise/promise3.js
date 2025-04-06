const obj = new Promise(function(resolve,reject){
    setTimeout(function(){
        let err = false  ;

        if(!err) {
            console.log("Resolve Executed") ;
            resolve() ;
        } else  {
            reject() ;
        }
        
    },1000)
})


