/*
o 'this' no nodejs é o modulo e não o global no brower o this é o window.
Qualquer variavel definida nesse arquivo mesmo sendo no espoco global será this apenas nesse aquivo.
* */

let comparaComThis = function (param) {
    console.log(this === param) //this dentro da função é do global.
}

comparaComThis(global) //por isso se colocar o this aqui vai ser o this do modulo ou seja o arquivo

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param) //arrow aponta para o this do modulo
comparaComThisArrow(global)
comparaComThisArrow(module.exports) //module.exports é o this do modulo

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)