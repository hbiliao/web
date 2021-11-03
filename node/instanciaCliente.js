const contadorA = require('./instanciaUnica') //objeto foi exportado e node faz cache do objeto
const contadorB = require('./instanciaUnica') //objeto foi exportado e node faz cache do objeto

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')() //invocou a instacia do objeto por isso não faz cache

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)
