const ijs = 100, fjs = 6.28318, sjs = '100'
const sentence = "百"

console.log(isNaN(sentence))

if(! isNaN(ijs)){
    console.log(ijs * 2.5)
}


console.log("100と'100'の比較 : "+(ijs == sjs))
console.log("100と'100'の厳密な比較 : "+(ijs === sjs))

//isNaNは数値に変換可能かどうかを表す