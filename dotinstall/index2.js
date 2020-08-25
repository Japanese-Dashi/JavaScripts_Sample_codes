'use script';

{
    const scores = [75, 84, 68];
    for(let I = 0; I<scores.length; I++){
        console.log(scores[I]);
    }

    array(scores, scores.length);
}

function array(scs, scl){
    let i, ans;
    for(i=0; i<scl; i++){
        if(i == 0){
            ans = scs[i];
        }
        else{
            ans *= scs[i];
        }
    }

    document.write("配列scoresの各要素の積: "+ans);
}