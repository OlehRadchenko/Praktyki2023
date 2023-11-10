const arr1 = ["Anna", "Maria", "Marek", "Tomasz"];
const filterArray = (arr) => arr.filter((name) => name.length <= 5 && name.endsWith("ek"));
console.log(filterArray(arr1));