let saldoVitorias = vitoriasDerrotas(75, 30)
let nivelJogador = nivel(saldoVitorias)

function vitoriasDerrotas(quantVitorias, quantDerrotas) {
  return quantVitorias - quantDerrotas
}

function nivel(saldoVitorias) {
  if (saldoVitorias < 10) {
    return 'Ferro'
  } else if (saldoVitorias <= 20) {
    return 'Bronze'
  } else if (saldoVitorias <= 50) {
    return 'Prata'
  } else if (saldoVitorias <= 80) {
    return 'Ouro'
  } else if (saldoVitorias <= 90) {
    return 'Diamante'
  } else if (saldoVitorias <= 100) {
    return 'Lendário'
  } else {
    return 'Imortal'
  }
}
console.log(`O Herói tem saldo de ${saldoVitorias} vitórias está no nível de ${nivelJogador}!`)
