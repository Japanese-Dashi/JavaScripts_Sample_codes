const array = [2, 5, 11, 23, 37]
var answer = 0

for(const i of array){
    answer += i
    console.log(answer)
}


const data = '21, 33, 45, 51, 69'
var anti = 0

for(var j of data.split(',')){
    anti += Number.parseInt(j)
}
console.log(anti)
