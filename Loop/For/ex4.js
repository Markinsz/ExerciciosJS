// 4. Faça um programa que imprima na tela a tabuada de um número qualquer escolhido pelo usuário até o 10.

let Num = prompt("Escolha um número de 1 a 10")

for (let n = 1; n <= 10; n++){
    let result = Num * n
    console.log(result);
}