const createH1 = () =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        if(!response.ok){
            throw new Error("Network response was not OK ;c");
        }else{
            return response.json();
        }
    })
    .then((myJson) => {
        const jsonID3 = myJson.filter((post) => post.id == 3)[0]; //jsonID3 = kawałek całego JSON'a o id=3
        let myH1 = document.createElement("h1");
        myH1.textContent = jsonID3["title"];
        document.querySelector("body").appendChild(myH1);
        let myDIV = document.createElement("div");
        myDIV.textContent = jsonID3["body"];
        document.querySelector("h1").appendChild(myDIV);
    })
    .catch((error) => console.error("Error: ", error))
}