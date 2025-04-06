let arr = [10,20,30] ;

Array.prototype.Mul = function() {
     this.forEach((num) => {
         this.push(num*10) ;
    })

    return this ;
}

console.log(arr.Mul())