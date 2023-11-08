function button(x){
    let tab = [2, 4, "One", 5, "Two", 6, 7, 1, 2];
    console.log("Tablica w której szukamy: "+tab+"\nZnalezione: "+filtr(tab,x));
}

function filtr(tab, x){
    let result = new Array();
    let wystapilo = 0;
    for(let i=0; i < tab.length; i++){
        if(tab[i]==x){
            result[wystapilo] = tab[i];
            wystapilo++;
        }
    }
    if(wystapilo>0){
        return result;
    }else{
        return null;
    }
}