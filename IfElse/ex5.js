// Exercício 5: Verificação de números em ordem crescente
// Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem crescente. 
// Exibindo uma mensagem indicando se os números estão em ordem crescente ou não.

let N1 = prompt('Digite o 1° número')
let N2 = prompt('Digite o 2° número')
let N3 = prompt('Digite o 3° número')

if (N1 < N2 && N2 < N3) {
    console.log('A ordem é crescente')
} else {
    console.log('Não está em ordem crescente')
}