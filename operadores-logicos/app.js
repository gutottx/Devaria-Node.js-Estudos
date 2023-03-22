const { read } = require('fs');

const readLine = require('readline').createInterface ({
    input : process.stdin,
    output : process.stdout

});
    console.log('Esse programa vai checar se voce é maior de 18 anos e tem habilitacao para saber se voce pode entrar no kart');
    console.log('Alem da suas verificacoes, precisamos verificar se voce esta na listade presenca do horario');

    readLine.question('Qual o ano do seu nascimento?', ano=>{
        if (ano > 2004) {
            console.log('Voce não tem 18 anos');
            
        }else{
             readLine.question("Voce tem habilitacao? (sim/não)", temHabilitacao =>{
                if(!(temHabilitacao.toUpperCase() === "SIM")) {
                    console.log('Voce não tem 18 anos');
                }else{
                    readLine.question("Qual o seu nome?", nome =>{
                        switch(nome) {
                            case 'douglas' :
                                console.log('bem vindo ao kart, douglas');
                                break;
                                default:
                                    console.log('não esta na lista');
                        }
                    });
                    
                }
             })
        }
    })
