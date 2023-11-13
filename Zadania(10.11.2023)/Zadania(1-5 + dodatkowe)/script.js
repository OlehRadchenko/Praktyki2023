const arr1 = ["Anna", "Maria"];
const arr2 = ["Adam", "Marek", "Bartek", "Tomek"];
const numbers = [1, 2, 3, 4, 5];

//1.
const concatArrays = (array1, array2) => array1.concat(array2);
console.log(concatArrays(arr1, arr2));

//2.
const lastElement = (array) => array.reverse()[0];
console.log(lastElement(arr2));

//3.
const filterArray = (array, minValue = 0) => array.filter((element) => element == minValue); //Funkcja filtruje liczby które są większe od przekazanego argumentu minValue
console.log(filterArray(numbers, 2));

//4.
const sumArray = (array, start = 0) => array.reduce((result, element) => result + element, start); //Funkcja sumuje wszystkie elementy array'u zaczynając od wartości argumenty start
console.log(sumArray(numbers, 10));

//5.
const mapArray = (array) => array.map((element) => Math.pow(element, 2) + 3);
console.log(mapArray(numbers));

//dodatkowe 1.
const showEven = (array) => array.filter((element) => element%2 == 0);
console.log(showEven(numbers));

//dodatkowe 2.
const showMinElement = (array) => array.reduce((min, current) => (current < min ? current : min)); //Tutaj użyłem skróconej wersji if-elsa, jeżeli aktualna liczba(sprawdzana) jest mniejsza od min to min = ta liczba, jeżeli nie jest mniejsza to min pozostaje bez zmian
console.log(showMinElement(numbers));