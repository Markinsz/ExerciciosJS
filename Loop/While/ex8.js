// 8. Faça um programa que receba a idade do usuário, enquanto a resposta do usuário for menor que 18 anos continue a solicitar a idade e mostre uma mensagem quando a idade do 
// usuário for maior que 18.

i = prompt("Qual sua idade?")

while (i<=18) {
    console.log("Menor de idade");
    i = prompt("Qual a sua idade?")
}

console.log("Maior de idade")