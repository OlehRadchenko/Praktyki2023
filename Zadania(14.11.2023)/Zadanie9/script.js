/*Stwórz obiekt klasy Promise -> niech zakończy się powodzeniem (resolve) po 5 sekundach i zwróci string 'Udało się!'. 
Jako callback (wywołanie w konsoli) niech wypisze zwrócony string w konsoli.*/

const myPromise = new Promise((resolve) => {
    setTimeout(() => resolve("Udało się"), 5000);
})

myPromise
.then(console.log);