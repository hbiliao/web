const schedule = require('node-schedule')

/*
primeiro parametro é os segundo, a cada quantos segundos será chamada,
Segundo parametro é a hora que será chamada ou seja as 23 horas
terceiro é o mes no caso * significa qualquer dia do mes
ultimo parametro é o dia da semana ou seja 3 seria uma quinta feira
*/
const tarefa1 = schedule.scheduleJob('*/5 * 00 * * 3', function () {
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 20000)

// setImmediate
// setInterval

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 12
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})