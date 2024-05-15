// Fazer um menu de exercícios utilizando o exemplo dado em aula
// Criar um menu, omde é possível executar 6 dos exercícios anteriores
// Cada requisito deve ser encapsulado em uma função, e o menu deve executar essas funções
// O usuário poderá escolher qual exercício ele quer visualizar.

// O usuário deverá digitar zero para sair do menu.

function exFE1() {
    let username = prompt("Digite um nome de usuario:")
    let senha = prompt("Digite a senha:")

    if (username == "admin" && senha == "senha123") {
        console.log("Login bem sucedido")
    } else {
        console.log("Permissão inconcebida")
    } 
}

function exFE2(){
    let N = prompt("Digite um número de 1 a 7 de acordo com o dia da semana:")
switch (N) {
    case "1":
        console.log("segunda-feira")
        break;
    case "2":
        console.log("terça-feira")
        break;
    case "3":
        console.log("quarta-feira")
        break;
    case "4":
        console.log("quinta-feira")
        break;
    case "5":
        console.log("sexta-feira")
        break;
    case "6":
        console.log("sábado")
        break;
    case "7":
        console.log("domingo")
        break;
    default:
        alert("Escolha uma opção válida!")
        opcao = prompt("Escolha uma opção: \n1 - Exercício Login\n\n2 - Exercício Dia da Semana\n\n3 - Exercício Contador\n\n4 - Execício Fibonacci\n\n5 - Exercício Idade\n\n6 - Exercício Countdown")
        break;
}
}

function exFOR1() {
    for (let cont = 1; cont <= 10; cont++){
        console.log(cont);
    }
}

function exFOR2() {
    let n1 = 1, n2 = 1, n;

for (let i = 1; i <= 10; i++) {
    console.log(n1);
    n = n1 + n2;
    n1 = n2;
    n2 = n;
}
}

function exWHILE1() {
    let i = prompt("Qual sua idade?")

while (i<=18) {
    console.log("Menor de idade");
    i = prompt("Qual a sua idade?")
}

console.log("Maior de idade")
}

function exWHILE2() {
    let n = prompt("It's the final countdown") 

    while (n>=0) {
        console.log(n);
        n--
}
console.log("niru ni nu, niru ni nu ni");
}

let opcao = prompt("Escolha uma opção: \n\n0 - Sair\n\n1 - Exercício Login\n\n2 - Exercício Dia da Semana\n\n3 - Exercício Contador\n\n4 - Execício Fibonacci\n\n5 - Exercício Idade\n\n6 - Exercício Countdown")

while (opcao != 0) {

switch (opcao) {
    case "1":
        exFE1()
        break;
    case "2":
        exFE2()
        break;
    case "3":
        exFOR1()
        break;
    case "4":
        exFOR2()
        break;
    case "5":
        exWHILE1()
        break;
    case "6":
        exWHILE2()
        break;
    default:
        alert("Escolha uma opção válida!")
        break;
} opcao = prompt("Escolha uma opção: \n1 - Exercício Login\n\n2 - Exercício Dia da Semana\n\n3 - Exercício Contador\n\n4 - Execício Fibonacci\n\n5 - Exercício Idade\n\n6 - Exercício Countdown")
  console.clear();
}