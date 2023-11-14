const createH1 = () =>{
    fetch('https://jsonplaceholder.typicode.com/posts/3')
    .then((response) => {
        if(!response.ok){
            throw new Error("Network response was not OK ;c");
        }else{
            return response.json();
        }
    })
    .then((myJson) => {
        let myH1 = document.createElement("h1");
        myH1.textContent = myJson["title"];
        document.querySelector("body").appendChild(myH1);
        let myDIV = document.createElement("div");
        myDIV.textContent = myJson["body"];
        document.querySelector("h1").appendChild(myDIV);
    })
    .catch((error) => console.error("Error: ", error))
}