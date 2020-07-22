let team = ['絢瀬絵里', '西木野真姫', '黒澤ダイヤ', '天王寺璃奈', '桜坂しずく']
let opps = ['絢瀬絵里', '西木野真姫', '黒澤ダイヤ', '天王寺璃奈', '桜坂しずく']

for(let t1 of team){
    opps.shift()//最初の要素を取り除き、返す。
    for(let t2 of opps){
        console.log(t1+' 対 '+t2)
    }
}
