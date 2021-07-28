console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function() {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

String.prototype.toString = function () {
    return 'Lascou tudo'
}

console.log('Escola Cod3r'.reverse())

let teste = [1, 2, 3, 4, 5];
let teste2 = [6, 7, 8, 9, 10];
let teste3 = [11, 12, 13, 14, 15];
let teste4 = [12, 13, 14, 15, 16];

console.log(teste.concat(teste2, teste3, teste4))