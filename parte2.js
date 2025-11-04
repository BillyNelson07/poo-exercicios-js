// Parte 2 — Herança
// Crie uma classe Pessoa com os atributos nome e idade e o método cumprimentar().
// Crie uma classe Aluno que herda de Pessoa e adiciona o atributo curso.
// Sobrescreva o método cumprimentar() para incluir o curso na saudação.

// Classe base Pessoa com nome e idade
class Pessoa{
    constructor(nome, idade){
        // Inicializa nome e idade
        this.nome = nome,
        this.idade = idade
    };

    // Método para cumprimentar
    cumprimentar(){
        console.log(`Olá, sou ${this.nome}, tenho ${this.idade} anos de idade.`)
    };
}

// Classe Aluno herda de Pessoa e adiciona curso
class Aluno extends Pessoa{
    constructor(nome, idade, curso){
        super(nome, idade);
        // Adiciona o atributo curso
        this.curso = curso;
    }

    // Sobrescreve cumprimentar para incluir o curso
    cumprimentar(){
        console.log(`Olá, sou ${this.nome}, tenho ${this.idade} anos de idade e curso ${this.curso}.`);
    }
}


// Instancia um aluno e chama cumprimentar
const aluno1 = new Aluno("Gabriel", 22, "Desenvolvimento de Sistemas");
aluno1.cumprimentar();

console.log("--------------------------------------------");

// Crie uma classe Animal com o método emitirSom().
// Crie subclasses Cachorro e Gato, cada uma sobrescrevendo o método com sons diferentes.
// Crie um array de animais e chame emitirSom() para todos — observe o polimorfismo.

// Classe base Animal
class Animal{
    emitirSom(){
        console.log("Som de animal");
    };
}

// Subclasse Cachorro sobrescreve emitirSom
class Cachorro extends Animal{
    emitirSom(){
        console.log("Latido");        
    };
}

// Subclasse Gato sobrescreve emitirSom
class Gato extends Animal{
    emitirSom(){
        console.log("Miado");        
    };
}


// Cria array de animais e demonstra polimorfismo
const animais = [new Cachorro, new Gato, new Animal];
animais.forEach(animal => animal.emitirSom());