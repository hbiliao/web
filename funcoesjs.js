/* ==========================================================================
   map()
   ========================================================================== */

/* Dobrar valores
   ========================================================================== */

const numbers = [ 1, 4, 5, 9, 14, 23 ]

const doubledNumbers = numbers.map( num => num * 2 )

// console.log( doubledNumbers )

/* Fahrenheit para Celsius
   ========================================================================== */

const fahrenheit = [ 0, 32, 45, 50, 75, 80, 120 ]

const celcius = fahrenheit.map( elem => Math.round( ( elem - 32 ) * 5/9 ) )

// console.log( celcius )





/* ==========================================================================
   filter()
   ========================================================================== */

const yetAnotherArray = [ 2, 3, 4, 5, 4, 12, 19, 7, 2, 5 ]

const uniqueArray = yetAnotherArray.filter( ( elem, index, arr ) => arr.indexOf( elem ) === index)

// console.log( uniqueArray )





/* ==========================================================================
   reduce()
   ========================================================================== */

const rockets = [
    { country: "Russia", launches: 32 },
    { country: "US", launches: 23 },
    { country: "China", launches: 16 },
    { country: "Europe", launches: 7 },
    { country: "India", launches: 4 },
    { country: "Japan", launches: 3 }
]

const totalLaunches = rockets.reduce( ( prevVal, elem ) => prevVal + elem.launches, 0 )

console.log( totalLaunches )





/* ==========================================================================
   every()
   ========================================================================== */

/* Verificar se todos os elementos de um array são maiores que 10
   ========================================================================== */

const anotherArray = [ 12, 5, 8, 130, 44 ]

// console.log( anotherArray.every( elem => elem > 10 ) )

/* Verificar se todos são maiores de idade
   ========================================================================== */

const tchurma = [
    { id: 12, name: "Frederico", age: 8 },
    { id: 47, name: "Francisca", age: 7 },
    { id: 77, name: "Ramon", age: 48 },
    { id: 85, name: "Zenon", age: 52 }
]

// console.log( tchurma.every( p => p.age >= 18 ) )





/* ==========================================================================
   some()
   ========================================================================== */

/* Verificar se há algum número primo
   ========================================================================== */

function isPrime( value ) {
    for ( let i = 2; i < value; i++ ) {
        if ( value % i === 0 ) {
            return false
        }
    }

    return value > 1
}

const oneMoreArray = [ 6, 8, 11, 14, 42 ]

// console.log( oneMoreArray.some( isPrime ) )

/* Verificar por condições em valores/objetos
   ========================================================================== */

const team = [
    { id: 12, name: "Topper Harley", pilot: true },
    { id: 44, name: "Ramada Thompson", pilot: true },
    { id: 59, name: "Pete Thompson", pilot: false },
    { id: 122, name: "Kowalski", pilot: false }
]

// console.log( team.some( person => person.pilot ) )





/* ==========================================================================
   find()
   ========================================================================== */

/* Pizzas
   ========================================================================== */

const pizzas = [
    "mussarela",
    "calabresa",
    "portuguesa",
    "marguerita"
]

const foundPizza = pizzas.find( p => p.startsWith( "m" ) )

// console.log( foundPizza )

/* Frutas
   ========================================================================== */

const fruits = [
    { name: "jaca", quantity: 2 },
    { name: "banana", quantity: 0 },
    { name: "cereja", quantity: 5 }
]

const foundFruit = fruits.find( fruit => fruit.name === "cereja" )

// console.log( foundFruit )





/* ==========================================================================
   includes()
   ========================================================================== */

const people = [
    { id: 11, name: "Adamastor", age: 23, group: "editor" },
    { id: 47, name: "Joana", age: 28, group: "user" },
    { id: 85, name: "Mauricio", age: 34, group: "editor" },
    { id: 97, name: "Lalau", age: 74, group: "admin" }
]

const filteredUsers = people.filter( p => p.name.includes( "au" ) )

// console.log( filteredUsers )





/* ==========================================================================
   API real!
   ========================================================================== */

// async function getPeople() {
//     const response = await fetch( 'https://randomuser.me/api/?results=10' )
//
//     return response.json()
// }

// getPeople().then( data => console.log( data ) )

/* Somente mulheres
   ========================================================================== */

// getPeople().then( data => {
//     const people = data.results
//
//     // console.log( people.filter( p => p.gender === 'female' ) )
// } )

/* Trabalhando com dados
   ========================================================================== */

// getPeople().then( data => {
//     const result = data.results.filter( p => p.dob.age >= 30 )
//     const people = []
//
//     for ( let p of result ) {
//         people.push( {
//             "Nome" : `${ p.name.first } ${ p.name.last }`,
//             "Sexo" : p.gender,
//             "Idade": p.dob.age
//         } )
//     }
//
//     console.table( people )
// } )

/*
* Adicionais testes
* */

// const pessoas = []
//
// pessoa = {
//     nome: "henrique",
//     sobrenome: "bilião",
//     idade: "26",
// }
// pessoas.push(pessoa);
// pessoa = {
//     nome: "jeniffer",
//     sobrenome: "campos",
//     idade: "21",
// }
// pessoas.push(pessoa);
// pessoa = {
//     nome: "henrique",
//     sobrenome: "falcão",
//     idade: "25",
// }
// pessoas.push(pessoa);
//
// pessoa = {
//     nome: "cleo",
//     sobrenome: "santos",
//     idade: "25",
// }
// pessoas.push(pessoa);

const pessoas = []
function criarPessoa(registros) {
    pessoa = {
        nome        : registros.nome        ? registros.nome        : "",
        sobrenome   : registros.sobrenome   ? registros.sobrenome   : "",
        idade       : registros.idade       ? registros.idade       : "",
    }

    pessoas.push(pessoa);
}

criarPessoa({ nome :"henrique", sobrenome : "bilião", idade: "26"})
criarPessoa({ nome :"jeniffer", sobrenome : "campos", idade: "21"})
criarPessoa({ nome :"henrique", sobrenome : "falcao", idade: "25"})
criarPessoa({ nome :"cleo", sobrenome : "santos", idade: "25"})

//console.log(criarPessoa({sobrenome : "outro"}) );

const nomePessoa = pessoas.find(pessoas => pessoas.nome === "henrique").nome
const nomePessoas = pessoas.map(pessoas => pessoas.nome)
const nomeHenriques = pessoas.filter(pessoas => pessoas.nome == "henrique")

const existe = pessoas.some(pessoas => pessoas.nome == "henrique")

console.log(nomePessoa);
console.log(existe);
// console.log(nomePessoas);
// console.log(nomeHenriques);

const teste = nomeHenriques.map(pessoas => pessoas.sobrenome)
// console.log(teste);

const nomeHenriques2 = pessoas.filter(pessoas => pessoas.nome === "henrique").map(pessoas => pessoas.sobrenome)

//console.log(nomeHenriques2);

const idades = pessoas.filter(pessoas => pessoas.idade >= 25).map(pessoas => pessoas.sobrenome)

// console.log(idades);

var testeMap = nomeHenriques.map(pessoas => {
    return criarPessoa({ nome : pessoas.sobrenome, sobrenome : pessoas.nome, idade: Math.random() * 25}) ;
});

// console.log(pessoas);






