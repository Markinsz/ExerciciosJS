// Exercício 2: Verificação de dia da semana
// Escreva um programa que solicita ao usuário um número de 1 a 7 representando um dia da semana e exibe o nome correspondente a esse dia. 
// Considere que 1 representa segunda-feira, 2 representa terça-feira e assim por diante.

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
}