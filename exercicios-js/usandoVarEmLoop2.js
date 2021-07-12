const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function teste() {
        console.log(i)
    })
}

funcs.push(function teste2() {
    console.log("oi")
})

console.log(funcs[1]());

funcs[2]()
funcs[10]()

var pessoa = function (idade, nome, funcao){
    return {
        nome: nome,
        idade: idade,
        funcao: funcao
    }
};
console.log(pessoa(25, "Henrique", "garoto"));
