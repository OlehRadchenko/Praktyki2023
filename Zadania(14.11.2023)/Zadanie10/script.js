/*Napisz funkcję multiplyAsync(x,y), która zwraca obiekt klasy Promise, kończący się porażką, 
gdy któryś za argumentów jest niepoprawny (nie jest liczbą). W przeciwnym przypadku zwraca iloczyn dwóch liczb. 
Napisz callback (wywołanie w konsoli), który wypisuje wynik w konsoli.*/

function multiplyAsync(x, y){
    return myPromise = new Promise((resolve, reject) => {
        if(typeof(x) == 'number' && typeof(y) == 'number'){
            resolve(x*y);
        }else{
            reject("Niepoprawne argumenty funkcji!!!");
        }
    });
}

multiplyAsync(2,5)
.then((result) =>{
    console.log("Rezultat mnożenia: "+result);
})
.catch(console.error);

multiplyAsync(2,'5')
.then((result) =>{
    console.log("Rezultat mnożenia: "+result);
})
.catch(console.error);