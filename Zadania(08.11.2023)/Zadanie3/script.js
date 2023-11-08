function button(){
    let tab1 = [2, 4, 5, 6, 7];
    let tab2 = ["One", "Three", "Four"];
    console.log("Tab1: "+tab1+"\nTab2: "+tab2+"\nTablica złączona: "+addTab(tab1, tab2));
}

function addTab(tab1, tab2){
    let tab = [];
    for(let i=0; i<tab1.length; i++){
        tab[i]=tab1[i];
    }
    for(let i=0; i<tab2.length; i++){
        tab[i+tab1.length]=tab2[i];
    }
    return tab;
}