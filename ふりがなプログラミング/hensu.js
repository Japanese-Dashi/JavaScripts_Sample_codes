let nedan = 100
let price = nedan*1.1
console.log('100*1.1 = '+price)

var integer = 100 //ES5で主流の書き方
let int = 200 //ES2015で追加された。varより制限が多いが副作用は少ない
const i = 300 //ES2015で追加された。一度しか代入できない。

integer *= integer
console.log('100の2乗は'+integer+'です。')

int += i
console.log('200+300 = '+int)

int %= 15
console.log('500÷15の余りは'+int+'です。')
