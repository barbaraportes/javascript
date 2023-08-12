function contar() {

    let inicio = document.querySelector('#nInicio')
    let fim = document.querySelector('#nFim')
    let passo = document.querySelector('#nPasso')
    let res = document.querySelector('#res')   

    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO] Faltam dados.')
    } else {

        res.innerHTML = '<p>Contando:</p>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            alert('PASSO INVÁLIDO! Considerando passo 1.')
            p = 1
        }

        if (i<f) { //contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else { //contagem regressiva
            for (let c = i; c >= f; c -= p)
            res.innerHTML += ` ${c} \u{1F449}`
        }
        res.innerHTML += `\u{1F3C1}`             
    }  

}


