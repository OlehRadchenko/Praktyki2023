function button(x){
    document.getElementById("wynik").innerHTML = "Ciąg Fibonaccigeo wynosi: "+fib(parseFloat(x));
}

function fib(x){
    if(x==0 || x==1){
        return x;
    }else if(x>1){
        return fib(x-2)+fib(x-1);
    }else{
        return 0;
    }
}