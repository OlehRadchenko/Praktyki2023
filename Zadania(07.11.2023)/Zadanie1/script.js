function calculate(form, char){
    let l1 = parseFloat(form.liczba1.value);
    let l2 = parseFloat(form.liczba2.value);
    let er;
    switch(char){
        case '+':
            wynik = l1+l2;
            break;
        case '-':
            wynik = l1-l2;
            break;
        case '*':
            wynik = l1*l2;
            break;
        case '/':
            if(l2==0){
                er = true;
            }else{
                wynik = l1/l2;
            }
            break;
        default:
            wynik = 0;
    }
    if(er){
        document.getElementById("wynik").innerHTML = "Nie można dzielić przez 0 ;c";
    }else{
        document.getElementById("wynik").innerHTML = "Wynik twojego działania to: "+wynik;
    }
}