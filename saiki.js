console.log('1~10までの階乗を表示します')

var count
for(count = 1; count <= 10; count++){
    var answer = fact(count)
    console.log(count+'の階乗は'+answer +'です。')
}

function fact(num){
    if(num > 1){
        return num * (num-1)
    }
    else{
        return 1
    }
}