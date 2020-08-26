'use script';

{
    const scores = [75, 84, 68];
    scores.splice(0, 1, 90, 88);
    const length = scores.length;

    array_print(scores, length);
    array(scores, length);
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

function array_print(score_array, array_length){
    for(let I = 0; I<array_length; I++){
        document.writeln("scores["+I+"]: "+score_array[I]);
    }

}