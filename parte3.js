// Parte 3 — Encapsulamento
// Crie uma classe ContaBancaria com o atributo privado #saldo.
// Implemente métodos depositar(valor), sacar(valor) e verSaldo().
// Teste depósitos e saques inválidos (valores negativos ou saldo insuficiente).

class ContaBancaria{
    #saldo;
    constructor(){
        this.#saldo = 0;
    };

    depositar(valor){
        if(valor < 0){
            console.log("Depósito inválido");
        } else {
            let novoSaldo = this.#saldo += valor;
            console.log(`Seu novo saldo é ${novoSaldo}`);            
        }
    };

    sacar(valor){
        if(valor > this.#saldo){
            console.log("Saldo Insuficiente");
        } else {
            let saldoAtualizado = this.#saldo -= valor;
        }
    };

    verSaldo(){
        console.log(`Seu saldo atual é de ${this.#saldo}`)
    }
}

const conta1 = new ContaBancaria()
conta1.depositar(100);
conta1.sacar(99);
conta1.verSaldo();

console.log("-------------------------------");

// Crie uma classe Usuario com atributos privados #senha e #email.
// Adicione métodos setSenha(novaSenha) e autenticar(senhaInformada).
// Garanta que a senha tenha ao menos 6 caracteres antes de ser aceita.

class Usuario{
    #email;
    #senha;
    constructor(){
        this.#email = 'gabriel@email.com',
        this.#senha = ''
    };

    setSenha(novaSenha){
        if(novaSenha.length >= 6){
            this.#senha = novaSenha;
            console.log("Senha definida com sucesso!");
        } else {
            console.log("A senha deve ter pelo menos 6 caracteres.");
        }
    }

    autenticarSenha(senhaInformada){
        if(senhaInformada == this.#senha){
            console.log("Login feito com sucesso!")
        } else {
            console.log("Senha ou Email incorreto!");            
        }
    }
}

const user1 = new Usuario();
user1.setSenha("Gabriel");