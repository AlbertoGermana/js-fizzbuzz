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

// -------------------- PRIMA VARIANTE --------------------
// -------------------- SPIEGO COSA CAMBIO RISPETTO L'ESERCIZIO BASE --------------------

/* Rispetto l'esercizio precedente ho dichiarato delle variabili con all'interno il testo che voglio stampare
cosi da non scrivere il testo nel console.log */

//dichiaro e valorizzo variabili che conterranno la parola da stampare quando sono divisibili per un numero
/* var divTre = "Fizz";
var divCinque = "Buzz";
var divTreCinque = divTre + divCinque;

//ciclo che va da 1 a 100 e analizza ogni iterazione
for(var i = 1; i <= 100; i++){
    if(i % 3 == 0 && i % 5 == 0 ){  // se il numero dato è divisibile per 3 e 5
        console.log(divTre + divCinque);        
    }else if(i % 3 == 0){ // se il numero dato è divisibile per 3
        console.log(divTre); 
    }else if(i % 5 == 0){ // se il numero dato è divisibile per 5 
        console.log(divCinque); 
    }else{ // se il numero non è divisibile ne per 3 ne per 5
        console.log(i);
    }
} */


// -------------------- SECONDA VARIANTE --------------------
// -------------------- SPIEGO COSA CAMBIO RISPETTO L'ESERCIZIO BASE --------------------

/* Risolvo utilizzando il doWhile */

//dichiaro e valorizzo variabili che conterranno la parola da stampare quando sono divisibili per un numero
var divTre = "Fizz";
var divCinque = "Buzz";
var divTreCinque = divTre + divCinque;

//ciclo che va da 1 a 100 e analizza ogni iterazione
/* var i = 1;
do {
    if(i % 3 == 0 && i % 5 == 0 ){  // se il numero dato è divisibile per 3 e 5
        console.log(divTre + divCinque);        
    }else if(i % 3 == 0){ // se il numero dato è divisibile per 3
        console.log(divTre); 
    }else if(i % 5 == 0){ // se il numero dato è divisibile per 5 
        console.log(divCinque); 
    }else{ // se il numero non è divisibile ne per 3 ne per 5
        console.log(i);
    }
    i++
} while (i <= 100); */

// -------------------- TERZA VARIANTE --------------------
// -------------------- SPIEGO COSA CAMBIO RISPETTO L'ESERCIZIO BASE --------------------

/* Risolvo utilizzando il While */

//dichiaro e valorizzo variabili che conterranno la parola da stampare quando sono divisibili per un numero
var divTre = "Fizz";
var divCinque = "Buzz";
var divTreCinque = divTre + divCinque;

//ciclo che va da 1 a 100 e analizza ogni iterazione
var i = 1;
while (i <= 100) {
    if(i % 3 == 0 && i % 5 == 0 ){  // se il numero dato è divisibile per 3 e 5
        console.log(divTre + divCinque);        
    }else if(i % 3 == 0){ // se il numero dato è divisibile per 3
        console.log(divTre); 
    }else if(i % 5 == 0){ // se il numero dato è divisibile per 5 
        console.log(divCinque); 
    }else{ // se il numero non è divisibile ne per 3 ne per 5
        console.log(i);
    }
    i++
} 