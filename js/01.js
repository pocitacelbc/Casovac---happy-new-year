//Nechte uživatele zadat libovolné kladné číslo.
//Do konzole pak toto číslo odpočítávejte každou sekundu, dokud se nedostanete na 0 a pak vypište "Happy new year!".

let odpovedUzivatele = +(prompt("Zadejte libovolne kladne čislo")); 
let i = odpovedUzivatele ;

let INT = setInterval(() => {
    
    if(i ) {
        i--;
        console.log(i);
         

    }else{       
        setTimeout(() => {
            clearInterval(INT);
        }, 500)
        
    console.log("Happy new year!");  
      
    }
},1000);




