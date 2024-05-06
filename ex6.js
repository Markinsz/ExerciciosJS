// Exercício 6: Verificação de idade
// Escreva um programa que solicita o ano de nascimento de uma pessoa e verifica se ela é maior de 18 anos. Exiba uma mensagem indicando se a pessoa é maior de idade ou não.

let AA = new Date().getFullYear();
let N = parseInt(prompt ("Qual seu ano de nascimento?"))
let Anos =  AA - N

console.log(Anos)
if (Anos < 18) {
    console.log("Menor de Idade")
} else {
    console.log("Maior de Idade")
}