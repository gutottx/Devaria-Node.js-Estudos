const readLine = require('readline').createInterface({
    input:  process.stdin,
    output: process.stdout
})


const minhaPrimeiraConstanteString = 'Minha primeira constante';
console.log (minhaPrimeiraConstanteString);

let leituraDeCampo;
readLine.question('Por favor sua idade:', input => {
    leituraDeCampo = input;
    console.log (`O usuário digitou: ${leituraDeCampo}`);
});

