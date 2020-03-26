//Scrivi un programma che stampi i numeri da 1 a 100, 
//ma per i multipli di 3 stampi “Fizz” al posto del numero 
//e per i multipli di 5 stampi “Buzz”. 
//Per i numeri che sono sia multipli di 3 che di 5 stampi” FizzBuzz”.


//ciclo che va da 1 a 100 e analizza ogni iterazione
for(var i = 1; i <= 100; i++){
    if(i % 3 == 0 && i % 5 == 0 ){  // se il numero dato è divisibile per 3 e 5
        console.log("FizzBuzz");        
    }else if(i % 3 == 0){ // se il numero dato è divisibile per 3
        console.log("Fizz"); 
    }else if(i % 5 == 0){ // se il numero dato è divisibile per 5 
        console.log("Buzz"); 
    }else{ // se il numero non è divisibile ne per 3 ne per 5
        console.log(i);
    }
}