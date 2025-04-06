let  promise = fetch("https://api.github.com/users/ParthKul01")

promise.
then( function(val) {
     return val.json() ;
}).
then( function(data){
    console.log(data);
}).catch((err) => {
    console.log(err)
})