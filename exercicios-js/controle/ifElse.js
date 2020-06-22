const imprimirResutlado = function(nota) {
    if(nota >= 7){
        console.log("Aprovado!");

    } else {
        console.log("Reprovado!");
    }
}

imprimirResutlado(10);
imprimirResutlado(4);
imprimirResutlado("Epa!"); // Cuidado!