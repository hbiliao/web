const nome = 'Jeniffer'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template)


//${nome} templateString
// expressoes...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase() //arrow
console.log(`Ei... ${up('cuidado')}!`)