class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo

    }
    exibirInfo() {
        console.log(`Herói: ${this.nome}, Idade: ${this.idade}, Tipo: ${this.tipo}.`)
    }
    atacar() {
        if (this.tipo === 'ninja') {
            console.log(`O ${this.tipo} atacou usando shuriken!`)
        } else if (this.tipo === 'guerreiro') {
            console.log(`O ${this.tipo} atacou usando espada!`)
        } else if (this.tipo === 'monje') {
            console.log(`O ${this.tipo} atacou usando artes marciais!`)
        } else {
            console.log(`O ${this.tipo} atacou usando magia!`)
        }
    }

}
let heroiGerado = new heroi('Sombra', 25, 'ninja')
heroiGerado.exibirInfo()
heroiGerado.atacar()
