function MYobj(n){
    this.N = n * 2
    this.NN = n ** 2
}

let jsdt = prompt("数字を入力してください")
jsidt = parseInt(jsdt)

object = new MYobj(jsidt)

document.write("入力値×2 = "+object.N+"<br>入力値の2乗 = "+object.NN)
delete object

hensu()


function hensu(){
    const a = 120 //constは定数宣言であり、値の代入ができなくなる
    var b = 3
    var c = a+b
    //a = (c*b)%3

    console.log(a, b, c)
}
