let resultado = 0;

function suma(a, b, callback){
    setTimeout(function(){
        resultado = a + b;
        callback(resultado);
    }, 2000);
}

suma(4, 9, (resultado) => {
    console.log(resultado);
});
