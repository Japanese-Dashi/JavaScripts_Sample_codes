let list = []  //空の配列をつくる
let jsi = 0

for(let i=0; i<10; i++){
    if(i==7)  continue     //cotinueはループ処理の先頭に戻る
    else{
        if(i != 9)  list += (i+', ')
/*  iが9未満の場合、', 'もリストに追加する。
    ', 'も記入するのは、配列に+で追加する場合
    デフォルトでは区切らずに追加するから */
        else        list += i   // iが9ならば、iのみを追加
    }
}
console.log(list) //表示させる


do{
    console.log((jsi+1)+"回目")
}while(jsi < 0)

