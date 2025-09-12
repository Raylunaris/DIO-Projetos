# 🧠 Calculadora de Partidas Rankeadas

![JavaScript](https://img.shields.io/badge/Feito_com-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

Este projeto foi desenvolvido como parte dos desafios da [DIO](https://www.dio.me/) e tem como objetivo aplicar conceitos fundamentais da linguagem **JavaScript**, com foco em:

- ✅ Criação de **funções com retorno**
- ✅ Uso de **parâmetros** para entrada de dados
- ✅ Aplicação de **estruturas condicionais**
- ✅ Manipulação de **variáveis** 

<br>

## 💡 Descrição do Desafio

Criar uma função que recebe como parâmetros a **quantidade de vitórias** e **derrotas** de um jogador em partidas ranqueadas. A partir disso, calcular o **saldo de vitórias** (`vitórias - derrotas`) e determinar o **nível do jogador** com base nas faixas definidas:
<div align="center">
    
  | 🏆 Saldo de Vitórias | 🧱 Nível       |
  |----------------------|---------------|
  | < 10                 | Ferro         |
  | 11–20                | Bronze        |
  | 21–50                | Prata         |
  | 51–80                | Ouro          |
  | 81–90                | Diamante      |
  | 91–100               | Lendário      |
  | ≥ 101                | Imortal       |

</div>

## 📦 Estrutura do Código

```javascript
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
```
<br> 

## 🛠️ Como executar

Este exercício pode ser testado diretamente no terminal do Node.js ou em qualquer ambiente que suporte JavaScript.

## 📦 Passo a passo:

1. Clone o repositório:
   ```bash
   git clone https://github.com/ItsRAYKA/DIO-Projetos.git;
2. Acesse a pasta do projeto:
   ```bash
   cd DIO-Projetos/Savegnago-Funções  
3. Execute o arquivo com o Node.js:
   ```bash
   node nivelDoHeroi.js

