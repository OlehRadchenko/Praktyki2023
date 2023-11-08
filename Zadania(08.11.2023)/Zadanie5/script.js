function button(){
    let tab = [2, 4, 5, "Nic", 6, 7, "Coś"];
    console.log("Tablica której elementy sumujemy: "+tab+"\nSuma: "+sumArray(tab));
}

function sumArray(tab){
    let result = 0;
    for(let i=0; i<tab.length; i++){
        if(typeof tab[i] == 'number'){
            result+=tab[i];
        }
    }
    return result;
}