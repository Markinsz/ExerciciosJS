// Exercício 3: Ímpar ou par
// Faça um programa que receba um número do usuário e informe se este número é par ou ímpar.


let N = prompt("Digite um número para saber se é par ou impar")

if (N % 2 == 0) {
    console.log('O número digitado é par')
} else if (N % 2 != 0) {
    console.log('O número digitado é impar')
} else {
    console.log('Digite algo válido')
}