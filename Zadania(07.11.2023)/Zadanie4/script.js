function anagram(form){
    let word1 = bubbleSort(zamien(form.liczba1.value));
    let word2 = bubbleSort(zamien(form.liczba2.value));
    let dziala = true;

    for(let i = 0; i < word1.length; i++){
        if(word1[i] != word2[i]){
            dziala = false;
            break;
        }
    }
    if(dziala && word1.length == word2.length){
        document.getElementById("wynik").innerHTML = "Te słowa są anagrami";
        console.log(word1+"   "+word2);
    }else{
        document.getElementById("wynik").innerHTML = "Te słowa nie są anagrami";
        console.log(word1+"   "+word2);
    }
}

function zamien(slowo){
    let nowy = [];
    for(let i=0; i<slowo.length; i++){
        nowy[i]=slowo.charCodeAt(i);
    }
    return nowy;
}

function bubbleSort(arr){
    for (var i = 0; i < arr.length; i++) { 
        for (var j = 0; j < (arr.length - i - 1); j++) { 
            if (arr[j] > arr[j + 1]) { 
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}