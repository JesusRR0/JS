var dni=prompt("Introduzca un DNI");
var cadena = "Correcto";  
  
var exRegDni = "/^\d{8}[trwagmyfpdxbnjzsqvhlcke-TRWAGMYFPDXBNJZSQVHLCKE]/";

if(cadena.match(expresion)){
    document.write("Formato valido");
}else{
    document.write("Formato invalido ");

};
-