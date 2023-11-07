function funkcja(arr){
    let licz_int=0;
    let licz_str=0;
    for(let i=0; i<arr.length; i++){
        if(typeof arr[i] == 'number'){
            licz_int++;
        }else if(typeof arr[i] == 'string'){
            licz_str++;
        }
    }
    if(licz_int==arr.length){
        console.log("W tej tablicy są tylko liczby")
    }else if(licz_str==arr.length){
        console.log("W tej tablicy są tylko teksty")
    }else{
        console.log("W tej tablicy są różne typy danych lub nie są to liczby/teksty")
    }
}
funkcja([1,6,7,9,2]);
funkcja([5,7,9,2,"Map",8]);
funkcja(['str', "kar", 'staas']);