// Parte 5 — Integração dos Conceitos
// Desafio Final: Crie um mini-sistema de gestão de alunos com as classes:

// Pessoa — nome, idade
// Aluno — herda de Pessoa, adiciona matrícula, curso e notas[]
// Professor — herda de Pessoa, adiciona disciplina
// Turma — código, alunos[], professor

// Regras:
// A classe Aluno deve permitir adicionar notas e calcular média.
// Use encapsulamento para proteger as notas.
// Implemente polimorfismo no método apresentar() (comportamento diferente para Aluno e Professor).


class Pessoa{
    constructor(nome, idade){
        this.nome = nome,
        this.idade = idade
    };

    apresentar(){
        console.log(`Olá! Meu nome é ${this.nome} e eu tenho ${this.idade} anos de idade.`)
    };
};

class Aluno extends Pessoa{
    #notas;
    constructor(nome, idade, matricula, curso, notas = []){
        super(nome, idade),
        this.matricula = matricula,
        this.curso = curso,
        this.#notas = notas
    };

    adicionarNotas(nota){
        this.#notas.push(nota)
    };

    calcularMedia(){
        let total = 0;
        for(let i = 0; i < this.#notas.length; i++){
            total += this.#notas[i]; 
        };
        
        if((total / this.#notas.length) > 7){
            return console.log("Aprovado!");
        } else if ((total / this.#notas.length) < 3){
            return console.log("Reprovado!");
        } else {
            return console.log("Em recuperação!");
        }
    };

    apresentar(){
        console.log(`Olá! Meu nome é ${this.nome}, tenho ${this.idade} anos de idade e estou no curso ${this.curso}.`)
    };
};

class Professor extends Pessoa{
    constructor(nome, idade, disciplina){
        super(nome, idade),
        this.disciplina = disciplina
    };

    apresentar(){
        console.log(`Olá! Meu nome é ${this.nome}, tenho ${this.idade} anos de idade e leciona a disciplina de ${this.disciplina}.`)
    };
};

class Turma{
    constructor(codigo, alunos = [], professor){
        this.codigo = codigo,
        this.alunos = alunos,
        this.professor = professor
    };
};

const aluno1 = new Aluno('Gabriel', 22, '456', 'DESI', [7, 8, 9]);
const aluno2 = new Aluno('Eduardo', 20, '234', 'Eletrônica', [4, 0, 1]);
const aluno3 = new Aluno('Carimbo', 25, '987', 'Refrigeração', [5, 5 ,5]);
const professor1 = new Professor('Geraldo', 45, 'DESI');
const turma = new Turma(4, [aluno1, aluno2, aluno3], professor1);



