// Parte 4 — Polimorfismo
// Crie uma classe Funcionario com o método calcularSalario().
// Crie subclasses FuncionarioHorista e FuncionarioAssalariado que implementem o método de forma distinta.
// Crie um array com diferentes funcionários e mostre o salário de cada um.
// Crie uma classe Forma com o método calcularArea().
// Crie subclasses Quadrado, Retangulo e Circulo, cada uma com seu cálculo próprio.
// Crie um array de formas e exiba a área de cada uma.

class Funcionario{
    calcularSalario(valorDiaria, dias){
        let salario = valorDiaria * dias
        console.log(`O salário é R$${salario}.`)
    };
};

class FuncionarioHorista extends Funcionario{
    calcularSalarioHorista(valorHora, horas){
        let salarioHora = valorHora * horas;
        console.log(`O salário do horista é R$${salario}.`)
    };
};