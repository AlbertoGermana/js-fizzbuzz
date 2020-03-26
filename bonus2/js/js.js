// -------------------- CONSEGNA ESERCIZIO --------------------
/* Scrivi un programma che stampi i numeri da 1 a 100, 
ma per i multipli di 3 stampi “Fizz” al posto del numero 
e per i multipli di 5 stampi “Buzz”. 
Per i numeri che sono sia multipli di 3 che di 5 stampi” FizzBuzz”. */


// -------------------- BONUS --------------------
/* come sempre l’ex potrebbe essere risolto in più varianti, anche poco differenti a livello di codice, 
ma che comportano ottimizzazioni e variazioni sensibili, quindi prova in altra cartella a fare altre 
varianti e scrivi descrivendo cosa è cambiato dal precedente, cosa migliora, o semplicemente cambia e perchè; */



// -------------------- ESEGUO --------------------


//dichiaro e valorizzo variabili che conterranno la parola da stampare quando sono divisibili per un numero
var divTre = "Fizz";
var divCinque = "Buzz";
var divTreCinque = divTre + divCinque;

// variabile che conterrà il testo che verrà iniettato negli <li> dell'HTML
var prevText;

//ciclo che va da 1 a 100 e analizza ogni iterazione
for(var i = 1; i <= 100; i++){
    if(i % 3 == 0 && i % 5 == 0 ){  // se il numero dato è divisibile per 3 e 5
        prevText = document.getElementById("list").innerHTML;
        document.getElementById("list").innerHTML = prevText + "<li><a href='#'>"+ divTre + divCinque + "</a></li>"
    }else if(i % 3 == 0){ // se il numero dato è divisibile per 3
        prevText = document.getElementById("list").innerHTML;
        document.getElementById("list").innerHTML = prevText + "<li><a href='#'>"+ divTre + "</a></li>"
    }else if(i % 5 == 0){ // se il numero dato è divisibile per 5 
        prevText = document.getElementById("list").innerHTML;
        document.getElementById("list").innerHTML = prevText + "<li><a href='#'>"+ divCinque + "</a></li>"
    }else{ // se il numero non è divisibile ne per 3 ne per 5
        prevText = document.getElementById("list").innerHTML;
        document.getElementById("list").innerHTML = prevText + "<li><a href='#'>"+ i + "</a></li>"
    }
}