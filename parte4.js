// Parte 4 — Polimorfismo
// Crie uma classe Funcionario com o método calcularSalario().
// Crie subclasses FuncionarioHorista e FuncionarioAssalariado que implementem o método de forma distinta.
// Crie um array com diferentes funcionários e mostre o salário de cada um.


class Funcionario{
    constructor(valorDiaria, dias){
        this.valorDiaria = valorDiaria,
        this.dias = dias
    };

    calcularSalario(){
        let salario = this.valorDiaria * this.dias
        console.log(`O salário é R$${salario} após a jornada.`)
    };
};

class FuncionarioHorista extends Funcionario{
    constructor(valorHora, horas){
        super();
        this.valorHora = valorHora,
        this.horas = horas
    };
    
    calcularSalario(){
        let salarioHora = this.valorHora * this.horas;
        console.log(`O salário do horista é R$${salarioHora} após a jornada.`)
    };
};

class FuncionarioAssalariado extends Funcionario{
    constructor(valorMensal, qtdMeses){
        super();
        this.valorMensal = valorMensal,
        this.qtdMeses = qtdMeses
    };
    calcularSalario(){
        let salarioMensal = this.valorMensal * this.qtdMeses;
        console.log(`O salário do assalariado é R$${salarioMensal} após a jornada.`)
    };
};

const funcionariosTeste = [new Funcionario(100, 15), new FuncionarioHorista(25, 100), new FuncionarioAssalariado(3000, 5)];

funcionariosTeste.forEach(calculo => calculo.calcularSalario())

console.log("--------------------------------------------");


// Crie uma classe Forma com o método calcularArea().
// Crie subclasses Quadrado, Retangulo e Circulo, cada uma com seu cálculo próprio.
// Crie um array de formas e exiba a área de cada uma.

class Forma {
    calcularArea(){

    }
}

class Retangulo extends Forma{
    constructor(base, altura){
        super(),
        this.base = base,
        this.altura = altura
    };

    calcularArea(){
        let calculoArea = this.base * this.altura;
        console.log(`A área do Retângulo é : ${calculoArea}cm2.`);        
    };
};

class Quadrado extends Forma{
    constructor(lado){
        super(),
        this.lado = lado
    };

    calcularArea(){
        let calculoArea = this.lado * this.lado;
        console.log(`A área do quadrado é : ${calculoArea}cm2.`);        
    };
};

class Circulo extends Forma{
    constructor(raio){
        super(),
        this.raio = raio
    };

    calcularArea(){
        const pi = 3.14;
        let calculoArea = (this.raio ** 2) * pi;
        console.log(`A área do quadrado é : ${calculoArea}cm2.`);        
    };
}

const formas = [new Quadrado(5), new Retangulo(10, 8), new Circulo(12)];

formas.forEach(calculo => calculo.calcularArea());