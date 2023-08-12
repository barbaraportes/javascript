function gerar() {

    let num = document.querySelector('#numero')
    let tab = document.querySelector('#seltab')

    if (num.value.length == 0) {
        alert('[ERRO] Digite um valor.')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''

        let c = 1

        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }

}

