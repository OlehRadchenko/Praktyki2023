let currentID = 0;

function previousPost(){
    currentID--;
    wyswietl();
}

function nextPost(){
    currentID++;
    wyswietl();
}

const checkStatus = (response) => {
    if (response.status == 200) {
        return response.json(); // Zwraca dane w formacie JSON
    } else {
        throw new Error('Błąd w pobieraniu danych'); // Jeżeli status się nie zgadza - rzuca error, który jest obsługiwany dalej
    }
};

const printPosts = (dataJSON) => {
    if(currentID < 0){
        currentID = 0;
    }else if(currentID > 100){
        currentID = 100;
    }
    console.log(dataJSON[currentID])
    document.getElementById("title").innerHTML = dataJSON[currentID].title;
    document.getElementById("body").innerHTML = dataJSON[currentID].body;
};

function wyswietl(){
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(checkStatus)
    .then(printPosts)
    .catch(error => console.error('Wystąpił błąd:', error));
}