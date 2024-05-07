// Exercício 4: Notas escolares
// Faça um programa que receba 4 notas de um aluno, calcule e imprima a média aritmética das notas e a mensagem de APROVADO para média superior ou igual a 7,0 
// RECUPERAÇÃO para notas entre 5.0 e 7,0 ou a mensagem de REPROVADO para média inferior a 5,0.

let N1 = parseFloat(prompt("Digite a 1° nota:"))
let N2 = parseFloat(prompt("Digite a 2° nota:"))
let N3 = parseFloat(prompt("Digite a 3° nota:"))
let N4 = parseFloat(prompt("Digite a 4° nota:"))

let média = (N1 + N2 + N3 + N4)/4;

console.log('A média do Aluno é ' + média)

if (média >= 7) {
    console.log('Aprovado')
} else if (média > 5 && média < 7) {
    console.log('Recuperação')
} else {
    console.log('Reprovado')
}
