// 5. Imprimir os primeiros 10 números da sequência de Fibonacci.

let n1 = 1, n2 = 1, n;

for (let i = 1; i <= 10; i++) {
    console.log(n1);
    n = n1 + n2;
    n1 = n2;
    n2 = n;
}