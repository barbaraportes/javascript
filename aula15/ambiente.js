let num = [5, 8, 4, 6, 2]

num.push(1)

num.sort()



console.log(num)

console.log(num[0])

console.log(`Nosso vetor tem ${num.length} posições`)

let pos = num.indexOf(55)

if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}
