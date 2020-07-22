let weekly=['月曜', '火曜', '水曜', '木曜', '金曜']
let weli = weekly.length

weekly[weli] = '土曜'
weekly[weli+1] = '日曜'
weekly[weli+2] = 'ぴえん'

console.log(weekly)

for(let day of weekly){
    if(day == 'ぴえん'){
        break
    }
    console.log(day+'日')
}

for(let count = 0; count < weli; count++){
    console.log(weekly[count]+'\t平日')
}
