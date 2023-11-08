function button(form){
    let x = form.x.value;
    let y = form.y.value;
    if(y < x){ //XDDD czemu ten warunek działa? ogólnie jak robię y>x to nie działa ;c a tak działa XD
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