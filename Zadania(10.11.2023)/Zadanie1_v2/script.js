const arr1 = ["Anna", "Maria", "Marek", "Tomasz"];
const filterArray = (arr, maxLength, end_string) => arr.filter((name) => name.length <= maxLength && name.endsWith(end_string));
console.log(filterArray(arr1, 5, "ek"));