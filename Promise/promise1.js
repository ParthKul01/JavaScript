const proObj = new Promise(function(resolve,reject){
    setTimeout(function(){
       
        console.log("Async task is Complete ") ;
        resolve() ;

    },1000) ;
}) ;

proObj.then(function(){
    console.log("Promise Consumed");
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Hey this is Parth")   ;
        resolve() ;
     },2000) ;
}).then(function(){
     console.log("Promise Consumed...")
})