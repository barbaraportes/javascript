//funcão recursiva ou recurssividade = quando chama a função dentro dela mesma

function fatorial (n) {
    if ( n == 1) {
        return 1
    } else {
        return n * fatorial(n - 1)
    }
}

console.log(fatorial (6))


// 5! = 5 x 4 x 3 x 2 x 1 = 120
// 5! = 5 x 4!
// n! = n x (n - 1)!