function tratarErroELancar(erro){
    //throw new Error("Ocorreu um erro!");
    //throw 10;
    //throw true;
    //throw "mensagem";
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimiNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + "!!!");
    } catch(e){
        tratarErroELancar(e)
    } finally{
        console.log("Final do Programa!")
    }
}

const obj = {nome: "Roberto"};

imprimiNomeGritado(obj);