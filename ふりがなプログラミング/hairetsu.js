/*
let weekly=['月曜', '火曜', '水曜', '木曜', '金曜', '土曜', '日曜']
weekly[7] = 'ぴえん'

console.log(weekly)

for(let day of weekly){
    console.log(day+'日')
}

for(let count = 0; count < 5; count++){
    console.log(weekly[count]+'\t平日')
}
*/

let team = ['絢瀬絵里', '西木野真姫', '黒澤ダイヤ', '天王寺璃奈', '桜坂しずく']
let opps = ['絢瀬絵里', '西木野真姫', '黒澤ダイヤ', '天王寺璃奈', '桜坂しずく']

for(let t1 of team){
    opps.shift()
    for(let t2 of opps){
        console.log(t1+' 対 '+t2)
    }
}
