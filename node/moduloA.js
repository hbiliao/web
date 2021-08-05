console.log(this) //todos os this seram exportados

var teste1 = "henrique" // não sera exportado
this.ola = 'Fala Pessoal'
exports.bemVindo = 'Bem vindo ao node!'
module.exports.ateLogo = 'Até próximo exemplo'

//tanto this, exports., module.exports., são a mesma forma de colocar no mesmo objeto
//menos comum
console.log(this)

/*
console.log(this)
{
  ola: 'Fala Pessoal',
  bemVindo: 'Bem vindo ao node!',
  ateLogo: 'Até próximo exemplo'
}
 */

