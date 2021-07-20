// Factory simples
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())

// const pessoas = []
// function criarPessoa(registros) {
//     pessoa = {
//         nome: registros.nome ? registros.nome : "",
//         sobrenome: registros.sobrenome ? registros.sobrenome : "",
//     }
//
//     pessoas.push(pessoa);
// }
//
// console.log(criarPessoa({ nome :"henrique", sobrenome : "bilião"}))
// console.log(criarPessoa({ nome :"jeniffer", sobrenome : "campos"}))
// console.log(criarPessoa({sobrenome : "outro"}) );
//
// console.log(pessoas)
