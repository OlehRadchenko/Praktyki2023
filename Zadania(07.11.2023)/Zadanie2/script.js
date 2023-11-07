function palindrome(form){
    let word = form.slowo.value;
    let reverse_word = "";

    for(let i=word.length-1; i>=0; i--){
        reverse_word+=word[i];
    }

    if(word==reverse_word){
        console.log(true);
        document.getElementById("wynik").innerHTML = "To słowo jest palindromem";
    }else{
        console.log(false);
        document.getElementById("wynik").innerHTML = "To słowo nie jest palindromem";
    }
}