// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const venom = require('venom-bot');

stamp = new Date();
hours = stamp.getHours();
if (hours >= 18 && hours < 24) {
    time = "Boa noite"
} else if (hours >= 12 && hours < 18) {
    time = "Boa tarde"
} else if (hours >= 0 && hours < 12) {
    time = "Bom dia"
}

var formaPagamento = "*1* para dinheiro;\n*2* para pix;\n*3* para cartão; \n*9* para falar com nossa atendente;\n*0* para cancelar atendimento.";


var clientes = [];

var menssagemFinal = [];

var valorGas = {
    dinheiro: "*R$92,00* ",
    pix: "*R$92,00* ",
    debito: "*R$95,00* ",
    credito: "*R$97,00* "
};

var teste = {
    nome: "",
    formaPagmento: "",
    troco: ""
};

var dadosCliente = [];

var nome, pedido, endereco, formaPagmento, troco;

venom
    .create()
    .then((client) => start(client))
    .catch((erro) => {
        console.log(erro);
    });

function start(client) {
    client.onMessage((message) => {
            //t atendente = '0000000000000000;
            //let atendente = "000000000000000";

            if (message.isGroupMsg === false) {

                console.log(clientes);
                console.log(message.from);

                if (message.from == "status@broadcast") {

                }else{

                    if (!clientes[message.from] || clientes[message.from].stage == 0) {
                        clientes[message.from] = {
                            nome: message.from,
                            stage: 1,
                            menssagem: time + ", Atendimento das 9h às 21h,\nDigite:\n*1* para Gás;\n*2* para Água;\n*3* para Gás e Água; \n*9* para falar com nossa atendente;\n*0* para cancelar atendimento."
                        }
                        dadosCliente[message.from] = {
                            nome: message.sender.pushname,
                            pedido: "",
                            formaPagmento: "",
                            troco: "",
                            endereco: "",
                        }
                        client.sendText(message.from, clientes[message.from].menssagem).then((result) => {
                        }).catch((erro) => {
                        });

                        client.sendText(atendente, "Entrou mensagem, cliente: " + message.sender.pushname).then((result) => {
                        }).catch((erro) => {
                        });
                    } else {
                        if (clientes[message.from].stage != 6 && clientes[message.from].stage != 9 && clientes[message.from].stage != 69) {

                            if (verificarDigito(message.body, message.from)) {

                                stage(message.from, message.body);

                                if (clientes[message.from].stage == 2) {
                                    client.sendText(message.from, formaPagamento).then((result) => {
                                    }).catch((erro) => {
                                    });
                                }

                                client.sendText(message.from, clientes[message.from].menssagem).then((result) => {
                                }).catch((erro) => {
                                });

                            } else {

                                client.sendText(message.from, "Desculpe não entendi").then((result) => {
                                }).catch((erro) => {
                                });

                                if (clientes[message.from].stage == 2) {
                                    client.sendText(message.from, formaPagamento).then((result) => {
                                    }).catch((erro) => {
                                    });
                                }

                                client.sendText(message.from, clientes[message.from].menssagem).then((result) => {
                                }).catch((erro) => {
                                });

                            }
                        }

                    }

                    if (clientes[message.from].stage == 6) {
                        client.sendText(atendente, "Entrega para " + dadosCliente[message.from].nome + "\nPedido: " +
                            dadosCliente[message.from].pedido + "\nForma de pagamento: " + dadosCliente[message.from].formaPagmento + "\nTroco: " +
                            dadosCliente[message.from].troco + "\nEndereço: " + dadosCliente[message.from].endereco).then((result) => {
                        }).catch((erro) => {
                        });
                    }

                    if (clientes[message.from].stage == 69) {
                        client.sendText(atendente, "Entrega para " + dadosCliente[message.from].nome + "\nPedido: " +
                            dadosCliente[message.from].pedido + "\nForma de pagamento: " + dadosCliente[message.from].formaPagmento + "\nTroco: " +
                            dadosCliente[message.from].troco + "\nEndereço: " + dadosCliente[message.from].endereco).then((result) => {
                        }).catch((erro) => {
                        });

                        client.sendText(atendente, message.sender.pushname + " *Solicitou Atendimento* ").then((result) => {
                        }).catch((erro) => {
                        });
                    }

                    if (clientes[message.from].stage == 9) {
                        client.sendText(atendente, message.sender.pushname + " *Solicitou Atendimento* ").then((result) => {
                        }).catch((erro) => {
                        });
                    }
                }
            }
        }
    );

}

var stage = function (cliente, mensagem) {

    let resposta = "";

    if (clientes[cliente].stage == 1) {

        if (mensagem == "1" || mensagem == "gas" || mensagem == "gás" || mensagem == "Gás" || mensagem == "Gas") {
            resposta = "Gás\nR$92,00 em dinheiro\nR$92,00 no pix\nR$95,00 no débito, *MASTER, VISA, ELO, BANRI*\nR$97,00 no crédito, *VISA, MASTER, HIPER, ELO*.";
            menssagemFinal[cliente] = {
                menssagem: "*Gás*, "
            }
            dadosCliente[cliente].pedido = "*Gás* ";

            // } else if (mensagem == "2") {
            //     // resposta = "Água 15 reais.";
            //     // menssagemFinal[cliente] = {
            //     //     menssagem: "*Água* "
            //     // }
        } else if (mensagem == "9" || mensagem == "2" || mensagem == "3" || mensagem == "Água" || mensagem == "agua" || mensagem == "água" || mensagem == "Agua") {
            resposta = "Nossa atendente já irá responder.";
        } else if (mensagem == "0") {
            resposta = "Atendimento encerrado.";
        }

        if (mensagem == "1") {
            clientes[cliente] = {
                nome: cliente,
                stage: 2,
                menssagem: resposta,
            }
        } else if (mensagem == "9" || mensagem == "2" || mensagem == "3" ) {
            clientes[cliente] = {
                nome: cliente,
                stage: 9,
                menssagem: resposta,
            }
        } else {
            clientes[cliente] = {
                nome: cliente,
                stage: 0,
                menssagem: resposta,
            }
        }

    } else if (clientes[cliente].stage == 2) {

        let menssagem_state2 = menssagemFinal[cliente].menssagem;

        if (mensagem == "1") {
            clientes[cliente] = {
                nome: cliente,
                stage: 14,
                menssagem: "Troco para quanto?",
            }
            menssagemFinal[cliente] = {
                menssagem: menssagem_state2 + "Forma de pagamento: *dinheiro* " + valorGas['dinheiro'],
            }
            dadosCliente[cliente].formaPagmento = "*dinheiro* ";
        } else if (mensagem == "2") {
            clientes[cliente] = {
                nome: cliente,
                stage: 3,
                menssagem: "Digite seu endereço",
            }
            menssagemFinal[cliente] = {
                menssagem: menssagem_state2 + "Forma de pagamento: *pix* " + valorGas['pix'],
            }
            dadosCliente[cliente].formaPagmento = "*pix* ";
        } else if (mensagem == "3") {
            clientes[cliente] = {
                nome: cliente,
                stage: 16,
                menssagem: "1 para débito \n2 para crédito."
            }
        } else if (mensagem == "9") {
            resposta = "Nossa atendente já irá responder.";
            clientes[cliente] = {
                nome: cliente,
                stage: 9,
                menssagem: resposta,
            }
        } else if (mensagem == "0") {
            resposta = "Atendimento encerrado.";
            clientes[cliente] = {
                nome: cliente,
                stage: 0,
                menssagem: resposta,
            }
        }

    } else if (clientes[cliente].stage == 3) {
        clientes[cliente] = {
            stage: 4,
            menssagem: "Confirma endereço: *" + mensagem + "* \n*1* para Sim \n*2* para Não.",
        }

        dadosCliente[cliente].endereco = "*" + mensagem + "*";

    } else if (clientes[cliente].stage == 4) {
        if (mensagem == "1" || mensagem == "sim" || mensagem == "Sim") {
            clientes[cliente] = {
                stage: 5,
                menssagem: "Pedido anotado,\n" + menssagemFinal[cliente].menssagem + " \nMais alguma dúvida?\n*1* para Sim\n*2* para Não",
            }
        } else {
            clientes[cliente] = {
                stage: 3,
                menssagem: "Digite seu endereço",
            }
        }
    } else if (clientes[cliente].stage == 5) {

        if (mensagem == "1" || mensagem == "sim" || mensagem == "Sim") {
            clientes[cliente] = {
                nome: cliente,
                stage: 69,
                menssagem: "Nossa atendente já irá responder."
            }
        } else if (mensagem == "2" || mensagem == "não" || mensagem == "Não") {
            clientes[cliente] = {
                nome: cliente,
                stage: 6,
                menssagem: "Confirmado, sua entrega já irá ser realizada."
            }
        }
    } else if (clientes[cliente].stage == 14) {

        clientes[cliente] = {
            stage: 15,
            menssagem: "Confirmar troco para: *" + mensagem + "* \n*1* para Sim \n*2* para Não.",
        }

        dadosCliente[cliente].troco = "*" + mensagem + "*";

    } else if (clientes[cliente].stage == 15) {

        if (mensagem == "1" || mensagem == "sim" || mensagem == "Sim") {
            clientes[cliente] = {
                nome: cliente,
                stage: 3,
                menssagem: "Digite seu endereço"
            }
        } else if (mensagem == "2" || mensagem == "não" || mensagem == "Não") {
            clientes[cliente] = {
                nome: cliente,
                stage: 14,
                menssagem: "Troco para quanto?",
            }
        }
    } else if (clientes[cliente].stage == 16) {

        let menssagem_state2 = menssagemFinal[cliente].menssagem;

        clientes[cliente] = {
            nome: cliente,
            stage: 3,
            menssagem: "Digite seu endereço",
        }
        if (mensagem == "1") {
            menssagemFinal[cliente] = {
                menssagem: menssagem_state2 + "*Cartão de débito* " + valorGas['debito'],
            }
            dadosCliente[cliente].formaPagmento = "*Cartão de débito* ";
        } else if (mensagem == "2") {
            menssagemFinal[cliente] = {
                menssagem: menssagem_state2 + "*Cartão de crédito* " + valorGas['credito'],
            }
            dadosCliente[cliente].formaPagmento = "*Cartão de crédito* ";
        }
    }
}

var verificarDigito = function (mensagem, cliente) {

    if (clientes[cliente].stage == 1) {
        if (mensagem == "1" || mensagem == "gas" || mensagem == "gás" || mensagem == "Gás" || mensagem == "Gas" ||
            mensagem == "2" || mensagem == "Água" || mensagem == "agua" || mensagem == "água" || mensagem == "Agua" ||
            mensagem == "3" ||
            mensagem == "9" ||
            mensagem == "0") {
            return true
        } else {
            return false;
        }
    } else if (clientes[cliente].stage == 2) {
        if (mensagem == "1" ||
            mensagem == "2" ||
            mensagem == "3" ||
            mensagem == "9" ||
            mensagem == "0") {
            return true
        } else {
            return false;
        }
    } else if (clientes[cliente].stage == 3) {
        return true;
    } else if (clientes[cliente].stage == 4) {
        if (mensagem == "1" || mensagem == "sim" || mensagem == "Sim" ||
            mensagem == "2" || mensagem == "não" || mensagem == "Não") {
            return true
        } else {
            return false;
        }
    } else if (clientes[cliente].stage == 5) {
        if (mensagem == "1" || mensagem == "sim" || mensagem == "Sim" ||
            mensagem == "2" || mensagem == "não" || mensagem == "Não") {
            return true
        } else {
            return false;
        }

    } else if (clientes[cliente].stage == 14) {
        return true;
    } else if (clientes[cliente].stage == 15) {
        if (mensagem == "1" || mensagem == "sim" || mensagem == "Sim" ||
            mensagem == "2" || mensagem == "não" || mensagem == "Não") {
            return true
        } else {
            return false;
        }
    } else if (clientes[cliente].stage == 16) {
        if (mensagem == "1" ||
            mensagem == "2") {
            return true
        } else {
            return false;
        }

    }
}


