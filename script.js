let saldo = prompt ('Digite o seu saldo.')
saldo = parseInt(saldo)
let valor = prompt ('Digite o valor da sua compra.')
valor = parseFloat(valor)

if ( valor <= saldo )
alert (`A compra ocorreu corretamente e seu saldo é de ${saldo - valor} reais.`)
else if (valor > saldo)
alert (`Saldo insuficiente.`)