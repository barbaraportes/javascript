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
        var faseIdade = ''
        var img = document.createElement('img')//criou tag img
        img.setAttribute('id', 'foto') //criou <img id="foto">

        if (fsex[0].checked) {
            genero = 'Homem'

            if (idade >= 0 && idade < 10) {
                faseIdade = 'criança'
                img.setAttribute('src', 'img/bebemenino.jpg')
            } else if (idade < 21) {
                faseIdade = 'jovem'
                img.setAttribute('src', 'img/jovemmenino.jpg')
            } else if (idade < 60) {
                faseIdade = 'adulto'
                img.setAttribute('src', 'img/adulto.jpg')
            } else {
                faseIdade = 'idoso'
                img.setAttribute('src', 'img/idoso.jpg')
            }

        } else {
            genero = 'Mulher'

            if (idade >= 0 && idade < 10) {
                faseIdade = 'criança'
                img.setAttribute('src', 'img/bebemenina.jpg')
            } else if (idade < 21) {
                faseIdade = 'jovem'
                img.setAttribute('src', 'img/jovemmenina.jpg')
            } else if (idade < 60) {
                faseIdade = 'adulta'
                img.setAttribute('src', 'img/adulta.jpg')
            } else {
                faseIdade = 'idosa'
                img.setAttribute('src', 'img/idosa.jpg')
            }

        }
    }

    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} ${faseIdade} com ${idade} anos`
    res.appendChild(img) //adiciona o elemento <img>







}

