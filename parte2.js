// Parte 2 — Herança
// Crie uma classe Pessoa com os atributos nome e idade e o método cumprimentar().
// Crie uma classe Aluno que herda de Pessoa e adiciona o atributo curso.
// Sobrescreva o método cumprimentar() para incluir o curso na saudação.

class Pessoa{
    constructor(nome, idade){
        this.nome = nome,
        this.idade = idade
    };

    cumprimentar(){
        console.log(`Olá, sou ${this.nome}, tenho ${this.idade} anos de idade.`)
    };
}

class Aluno extends Pessoa{
    constructor(nome, idade, curso){
        super(nome, idade);
        this.curso = curso;
    }

    cumprimentar(){
        console.log(`Olá, sou ${this.nome}, tenho ${this.idade} anos de idade e curso ${this.curso}.`);
    }
}

const aluno1 = new Aluno("Gabriel", 22, "Desenvolvimento de Sistemas");
aluno1.cumprimentar();

console.log("--------------------------------------------");

// Crie uma classe Animal com o método emitirSom().
// Crie subclasses Cachorro e Gato, cada uma sobrescrevendo o método com sons diferentes.
// Crie um array de animais e chame emitirSom() para todos — observe o polimorfismo.

class Animal{
    emitirSom(){
        console.log("Som de animal");
    };
}

class Cachorro extends Animal{
    emitirSom(){
        console.log("Latido");        
    };
}

class Gato extends Animal{
    emitirSom(){
        console.log("Miado");        
    };
}

const animais = [new Cachorro, new Gato, new Animal];
animais.forEach(animal => animal.emitirSom());