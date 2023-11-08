function button(form){
    let x = parseFloat(form.x.value);
    let y = parseFloat(form.y.value);
    if(y > x){
        recur(x,y);
    }else{
        console.log("Y musi być większe od x");
    }
}

function recur(x,y){
    if(x != y){
        console.log(y);
        y--;
        recur(x,y);
    }else{
        console.log(y);
    }
}