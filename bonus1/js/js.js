//Scrivi un programma che stampi i numeri da 1 a 100, 
//ma per i multipli di 3 stampi “Fizz” al posto del numero 
//e per i multipli di 5 stampi “Buzz”. 
//Per i numeri che sono sia multipli di 3 che di 5 stampi” FizzBuzz”.

//dichiaro e valorizzo variabili che conterranno la parola da stampare quando sono divisibili per un numero
var divTre = "Fizz";
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
}