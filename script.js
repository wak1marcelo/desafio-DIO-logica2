let nomePlayer = "Felipão"
let quantVitoria = saldoVitoria(200, 101)
let eloPlayer


function saldoVitoria(vitoria, derrota) {
  let soma = (vitoria - derrota)
  return soma
}

switch (true) {
  case quantVitoria < 10:
    eloPlayer = "Ferro"
    break
  case quantVitoria >= 10 && quantVitoria < 20:
    eloPlayer = "Bronze"
    break
  case quantVitoria >= 20 && quantVitoria < 50:
    eloPlayer = "Prata"
    break
  case quantVitoria >= 50 && quantVitoria < 80:
    eloPlayer = "Ouro"
    break
  case quantVitoria >= 80 && quantVitoria < 90:
    eloPlayer = "Diamante"
    break
  case quantVitoria >= 90 && quantVitoria < 100:
    eloPlayer = "Lendário"
    break
  case quantVitoria >= 100:
    eloPlayer = "Imortal"
    break
  default:
    console.log("Elo não existe!!")
}
if (eloPlayer) {
  console.log(`O Herói ${nomePlayer} tem de saldo de ${quantVitoria} vitorias e está no nível ${eloPlayer}`)
}
