function JOKEN(jsi){
    if(jsi == 0){ return 'Start!' }
    else{
        switch(jsi){
            case 10:console.log(jsi+"回目");break
            case 20:console.log(jsi+"回目");break
            case 30:console.log(jsi+"回目");break
            default:return jsi
        }
    }
}


for(let jsdit = 0; jsdit<=30; jsdit++){
    let ans = JOKEN(jsdit)
    console.log(ans)
}