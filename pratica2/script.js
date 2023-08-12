function verificar() {
    
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.querySelector('#iano')
    var res = document.querySelector('#res')

    if (fAno.value.length == 0 || fAno.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')






        if (fsex[0].checked) {
            genero = 'Homem'

            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'img/bebemenino')
            } else if (idade >= 10 && idade < 21) {
                //jovem
                img.setAttribute('src', 'img/jovemmenino')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'img/adulto')
            } else {
                //idoso
                img.setAttribute('src', 'img/idoso')
            }


        } else if (fsex[1].checked) { //poderia ser apenas else
            genero = 'Mulher'

            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'img/bebemenina')
            } else if (idade >= 10 && idade < 21) {
                //jovem
                img.setAttribute('src', 'img/jovemmenina')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'img/adulta')
            } else {
                //idoso
                img.setAttribute('src', 'img/idosa')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)

        
    }



}

