/*Wykonaj funkcję get dla następującego url: https://jsonplaceholder.typicode.com/posts
Jako pierwszy callback (wywołanie w konsoli) - sprawdź czy response jest poprawny (status równy 200). Jeśli tak, to zwróć response, w przeciwnym wypadku wypisz błąd w konsoli.
Jako następny callback (wywołanie w konsoli) - użyj destrukturyzacji obiektów, aby wypisać w konsoli zmienną 'title' i 'body' każdego z postów.*/

const checkStatus = (response) => {
    if (response.status == 200) {
        return response.json(); // Zwraca dane w formacie JSON
    } else {
        throw new Error('Błąd w pobieraniu danych'); // Jeżeli status się nie zgadza - rzuca error, który jest
    }
};

const printPosts = (dataJSON) => {
    for (const post of dataJSON) {
        console.log('Title:', post.title);
        console.log('Body:', post.body);
        console.log('\n');
    }
};

fetch('https://jsonplaceholder.typicode.com/posts') //Tu nie występuje error
    .then(checkStatus)
    .then(printPosts)
    .catch(error => console.error('Wystąpił błąd:', error));

fetch('https://jsonplaceholder.typicode.com/posts2') //Tu wystęouje error
    .then(checkStatus)
    .then(printPosts)
    .catch(error => console.error('Wystąpił błąd:', error));