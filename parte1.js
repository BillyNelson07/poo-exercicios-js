// Parte 1 — Classe e Objeto
// Crie uma classe Carro com os atributos marca, modelo e ano.
// Adicione o método descrever() que imprime no console: “Este carro é um Toyota Corolla de 2022”.
// Instancie dois objetos diferentes e teste o método.

// Classe que representa um carro com marca, modelo e ano
class Carro{
	constructor(marca, modelo, ano){
		// Inicializa os atributos do carro
		this.marca = marca,
		this.modelo = modelo,
		this.ano = ano
        }

    // Método que descreve o carro
    descrever(){
        console.log(`Este carro é um ${this.marca} ${this.modelo} de ${this.ano}`);
    }
};


// Instancia dois objetos Carro e testa o método descrever
const carro1 = new Carro("Volkswagen", "Gol", "2008");
const carro2 = new Carro("Hyundai", "Tucson", "2009");
carro1.descrever();
carro2.descrever();

console.log("------------------------------------");


// Classe Produto com nome, preço e estoque

class Produto{
    constructor(nome, preco, estoque){
        // Inicializa os atributos do produto
        this.nome = nome,
        this.preco = preco,
        this.estoque = estoque
    };

    // Método para vender uma quantidade do produto
    vender(quantidade){
        let tiraEstoque = this.estoque - quantidade;
        let precoFinal = this.preco * quantidade;
        console.log(`Você vendeu ${quantidade} unidades de ${this.nome} por ${precoFinal}. Seu estoque era ${this.estoque}, agora é ${tiraEstoque}`)
    };

    // Método para repor o estoque do produto
    repor(quantidade){
        console.log(`Você tinha ${this.estoque} unidades de ${this.nome} e repos ${quantidade}. Seu novo estoque de ${this.nome} é ${this.estoque + quantidade}.`);        
    };
}


// Instancia um produto, simula venda e reposição
const produto1 = new Produto("Banana", 2.50, 10)
produto1.vender(5);
produto1.repor(10)