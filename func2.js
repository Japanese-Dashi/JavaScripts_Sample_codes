function map(f, num){
    let result = []
    let i
    
    for(i = 0; i != num.length; i++){
        result[i] = f(num[i]);
    }
    return result
}

var f = function(x){
    return x * x * x
}

var numbers = [1, 1, 2, 3, 5, 8, 13, 21]
var cube = map(f, numbers)

console.log(cube)