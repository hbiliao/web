const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)

aprovados.forEach((nome,indice) => console.log(`${indice + 1} ${nome}`))

const exibirAprovados2 = (aprovado, indice) => console.log(`${indice + 1}) ${aprovado}`)
aprovados.forEach(exibirAprovados2)