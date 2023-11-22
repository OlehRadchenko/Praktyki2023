let currentID = 0;

function previousPost(){
    currentID--;
}

function nextPost(){
    currentID++;
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
    document.getElementById("id").innerHTML = dataJSON[currentID].id;
    document.getElementById("title").innerHTML = dataJSON[currentID].title;
    document.getElementById("body").innerHTML = dataJSON[currentID].body;    
};

const wyswietl = (fn) => (x) => {
fetch('https://jsonplaceholder.typicode.com/'+x)
    .then(checkStatus)
    .then(printPosts)
    .catch(error => console.error('Wystąpił błąd:', error));
}