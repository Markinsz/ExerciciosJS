// Escreva um programa que solicita ao usuário seu peso em quilogramas e sua altura em metros. Em seguida, calcule o Índice de Massa Corporal (IMC) 
// utilizando a fórmula: IMC = peso / (altura * altura). Com base no resultado, exiba uma mensagem indicando a faixa de peso em que o usuário se encontra, 
// de acordo com a tabela a seguir:
// IMC menor que 18.5: Abaixo do peso
// IMC de 18.5 a 24.9: Peso normal
// IMC de 25.0 a 29.9: Sobrepeso
// IMC de 30.0 a 34.9: Obesidade grau 1
// IMC de 35.0 a 39.9: Obesidade grau 2
// IMC maior ou igual a 40.0: Obesidade grau 3


let P = parseFloat(prompt("Qual seu peso? (Em KG)"))
let H = parseFloat(prompt("Qual sua altura? (Em metros)"))
let IMC = P / (H * H)

if (IMC < 18.5) {
    console.log("Seu IMC é: " + IMC.toFixed(2) + ". Você está abaixo do peso")
} else if (IMC >= 18.5 && IMC < 25) {
    console.log("Seu IMC é: " + IMC.toFixed(2) + ". Você está com peso normal")
} else if (IMC >= 25 && IMC < 30) {
    console.log("Seu IMC é: " + IMC.toFixed(2) + ". Você está com sobrepeso")
} else if (IMC >= 30 && IMC < 35) {
    console.log("Seu IMC é: " + IMC.toFixed(2) + ". Você está com obesidade de grau 1")
} else if (IMC >= 35 && IMC < 40) {
    console.log("Seu IMC é: " + IMC.toFixed(2) + ". Você está com obesidade de grau 2")
} else if (IMC > 40) {
    console.log("Seu IMC é: " + IMC.toFixed(2) + ". Você está com obesidade de grau 3")
}