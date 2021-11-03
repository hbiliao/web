module.exports.teste = function (...nomes) {
    return nomes.map(nome => `Boa semana ${nome}!`)
}

module.exports.teste2 = (...nomes) =>  nomes.map(nome => `Boa noite ${nome}!`)
