function soBoaNoticia(nota){
    if(nota >= 7){ 
        console.log("Aprovado com " + nota);
    }
}

soBoaNoticia(8.1);
soBoaNoticia(6.1)

function seForVerdadEuFalo(valor){
    if(valor){
        console.log("É verdade..." + valor);
    }
}

seForVerdadEuFalo();
seForVerdadEuFalo(null);
seForVerdadEuFalo(undefined);
seForVerdadEuFalo(NaN);
seForVerdadEuFalo("");
seForVerdadEuFalo(0);
seForVerdadEuFalo(-1);
seForVerdadEuFalo(" ");
seForVerdadEuFalo("?");
seForVerdadEuFalo([]);
seForVerdadEuFalo([1, 2]);
seForVerdadEuFalo({});