let nr = Math.floor(Math.random() * (100-1) +1);

alert (nr);


let txtask = prompt("Adivine el numero");
let ask = parseInt(txtask);
let contador = 0;


    if(!isNaN(ask) || ask <0 || ask >100){
        txtask=prompt("Introduzca un numero entre el 0 y el 100");
        ask = parseInt(txtask);
        ++contador;
    }else if(ask < nr){
        document.write("El numero es mayor");
        txtask=prompt("Inserte un numero mayor");
        ask = parseInt(txtask);
        ++contador;
    
    }else if(ask > nr){
        document.write("El numero es menor");
        txtask=prompt("Inserte un numero menor");
        
        ++contador;
    
    }else if(ask == nr){
        document.write("Has acertado!!");
        document.write("Has utilizado "+contador+"intentos");
        
    }else if(ask == false){
        document.write("FIN");
    }



