

var nr = Math.floor(Math.random() * (100-1) +1);
console.log(nr);

var txtask = prompt("Adivine el numero");
var ask = parseInt(txtask);
var contador = 0;

    while(isNaN(ask) && ask>0 && ask <101){ 
        ++contador;

        if(ask < nr){
            document.write("El numero es mayor");
                
        }else if(ask > nr){
            document.write("El numero es menor");
            
        
        }else if(ask == nr){
            document.write("Has acertado!!");
            document.write("Has utilizado "+contador+"intentos");
            break;

        }else if(ask == false){
            document.write("FIN");
            break;
        }

    }

    
   



