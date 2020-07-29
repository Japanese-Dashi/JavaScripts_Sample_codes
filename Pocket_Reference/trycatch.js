try{
    WINDOWS("XP?")
}
catch(jse){
    alert("エラー: "+jse)
}
finally{
    console.log("ミスが発生しました")
}

var a = 10
var b = prompt('数字を入力してください')
try{
    if(b == 0){
        throw "zero"
    }
    if(b < 0){
        throw "minus"
    }
}
catch(js_e){
    if(e == "zero"){
        alert("ゼロ除算はできません")
        b = 1
    }
    if(e == "minus"){
        alert("マイナス除算もできません")
        b = Math.abs(b)
    }
}

document.write("a÷b = "+a/b)