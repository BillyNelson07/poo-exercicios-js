// Parte 3 — Encapsulamento
// Crie uma classe ContaBancaria com o atributo privado #saldo.
// Implemente métodos depositar(valor), sacar(valor) e verSaldo().
// Teste depósitos e saques inválidos (valores negativos ou saldo insuficiente).

// Classe ContaBancaria com saldo privado e métodos de movimentação
class ContaBancaria{
    #saldo;
    constructor(){
        // Inicializa saldo como zero
        this.#saldo = 0;
    };

    // Método para depositar valor na conta
    depositar(valor){
        if(valor < 0){
            console.log("Depósito inválido");
        } else {
            let novoSaldo = this.#saldo += valor;
            console.log(`Seu novo saldo é ${novoSaldo}`);            
        }
    };

    // Método para sacar valor da conta
    sacar(valor){
        if(valor > this.#saldo){
            console.log("Saldo Insuficiente");
        } else {
            let saldoAtualizado = this.#saldo -= valor;
        }
    };

    // Método para exibir o saldo atual
    verSaldo(){
        console.log(`Seu saldo atual é de ${this.#saldo}`)
    }
}


// Testa operações de depósito, saque e consulta de saldo
const conta1 = new ContaBancaria()
conta1.depositar(100);
conta1.sacar(99);
conta1.verSaldo();

console.log("-------------------------------");

// Crie uma classe Usuario com atributos privados #senha e #email.
// Adicione métodos setSenha(novaSenha) e autenticar(senhaInformada).
// Garanta que a senha tenha ao menos 6 caracteres antes de ser aceita.

// Classe Usuario com email e senha privados
class Usuario{
    #email;
    #senha;
    constructor(){
        // Inicializa email e senha
        this.#email = 'gabriel@email.com',
        this.#senha = ''
    };

    // Método para definir a senha, exige mínimo de 6 caracteres
    setSenha(novaSenha){
        if(novaSenha.length >= 6){
            this.#senha = novaSenha;
            console.log("Senha definida com sucesso!");
        } else {
            console.log("A senha deve ter pelo menos 6 caracteres.");
        }
    }

    // Método para autenticar o usuário
    autenticarSenha(senhaInformada){
        if(senhaInformada == this.#senha){
            console.log("Login feito com sucesso!")
        } else {
            console.log("Senha ou Email incorreto!");            
        }
    }
}


// Testa definição e autenticação de senha
const user1 = new Usuario();
user1.setSenha("Gabriel");