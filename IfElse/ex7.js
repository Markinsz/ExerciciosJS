// Imagine uma loja de roupas que dê um desconto ao cliente, dependendo do valor que ele pague. Faça um programa para loja, que solicite o valor total da compra ao usuário e assim, 
// aplique um desconto de acordo com o valor total da compra. Siga a tabela:
// Valor total da compra até R$ 100,00: sem desconto.
// Valor total da compra de R$ 100,01 a R$ 200,00: desconto de 10%.
// Valor total da compra acima de R$ 200,00: desconto de 20%.
// Exiba o valor final da compra com o desconto aplicado.


let VC = parseFloat(prompt("Qual o valor da sua compra?"))

let VD;
let VT;

if (VC <= 100) {
    console.log("Não há Desconto")
    console.log("O valor total é " + VC)
} else if (VC > 100 && VC <= 200) {
    VD = VC * 0.1
    VT = VC - VD
    console.log("O valor do Desconto é ")
    console.log("O valor total é " + VT)
} else if (VC > 200) {
    VD = VC * 0.2
    VT = VC - VD
    console.log("O valor total é " + VT)
}