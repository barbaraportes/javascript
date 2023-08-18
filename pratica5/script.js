let num = document.querySelector('#txtnumber')
let lista = document.querySelector('#flista')
let res = document.querySelector('#res')

let valores = []

function isNumero(n) { //verifica se é um número e está entre 1 e 100
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) { //verifica se o número digitado está na lista
    if (l.indexOf(Number(n)) != -1) {
        return true //está na lista
    } else {
        return false //não está na lista
    }
}


function adicionar () {

    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value)) //adiciona o número digitado no último índice do vetor
        let item = document.createElement('option') //cria tag option
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item) //coloca a tag option no select
        res.innerHTML = '' //zera o resultado

    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }

    num.value = '' //zera o resultado quando adiciona um novo valor
    num.focus() //foca o cursor do mouse no input number
}

function finalizar() {

    if(valores.length == 0) {
        alert('Adicione valores antes de finalizar.')
    } else {

        let tot = valores.length

        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) { //for(let pos = 0; pos < valores.length; pos++)
            soma += valores[pos]
            if (valores[pos] > maior) 
                maior = valores[pos]
            
            if (valores[pos] < menor)             
                menor = valores[pos]
            
        }

        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo foram adicionados ${tot} números.</p>`
        res.innerHTML += `<p>O maior valor adicionado foi ${maior}.`
        res.innerHTML += `<p>O menor valor adicionado foi ${menor}.`
        res.innerHTML += `<p>A soma de todos os valores adicionados é: ${soma}.`
        res.innerHTML += `<p>A média dos valores adicionados é: ${media}.</p>`
    }
}
