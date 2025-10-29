// Parte 1 — Classe e Objeto
// Crie uma classe Carro com os atributos marca, modelo e ano.
// Adicione o método descrever() que imprime no console: “Este carro é um Toyota Corolla de 2022”.
// Instancie dois objetos diferentes e teste o método.

class Carro{
    constructor(marca, modelo, ano){
        this.marca = marca,
        this.modelo = modelo,
        this.ano = ano
    }

    descrever(marca, modelo, ano){
        console.log(`Este carro é um ${this.marca} ${this.modelo} de ${this.ano}`);
    }
};

const carro1 = new Carro("Volkswagen", "Gol", "2008");
const carro2 = new Carro("Hyundai", "Tucson", "2009");
carro1.descrever();
carro2.descrever();

console.log("------------------------------------");

// Crie uma classe Produto com os atributos nome, preco e estoque.
// Implemente os métodos vender(quantidade) e repor(quantidade) para alterar o estoque.
// Teste os métodos simulando uma venda e uma reposição.

class Produto{
    constructor(nome, preco, estoque){
        this.nome = nome,
        this.preco = preco,
        this.estoque = estoque
    };

    vender(quantidade){
        let tiraEstoque = this.estoque - quantidade;
        let precoFinal = this.preco * quantidade;
        console.log(`Você vendeu ${quantidade} unidades de ${this.nome} por ${precoFinal}. Seu estoque era ${this.estoque}, agora é ${tiraEstoque}`)
    };

    repor(quantidade){
        console.log(`Você tinha ${this.estoque} unidades de ${this.nome} e repos ${quantidade}. Seu novo estoque de ${this.nome} é ${this.estoque + quantidade}.`);        
    };
}

const produto1 = new Produto("Banana", 2.50, 10)
produto1.vender(5);
produto1.repor(10)