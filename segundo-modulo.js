const primeiroModulo = require('./primeiro-modulo');

function metodoC(){
    primeiroModulo.metodoA();
    primeiroModulo.metodoB();
    console.log('Metodo C');
}

module.exports = { metodoC: metodoC };