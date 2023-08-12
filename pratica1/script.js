
function carregar() {

    var msg = document.querySelector('#msg')
    var img = document.querySelector('#imagem')
    var data = new Date()
    var hora = data.toTimeString()
    
   

    msg.innerHTML = `Agora são ${hora}.`

    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'img/manha.jpg'
        document.body.style.background = '#C6F266'
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = 'img/tarde.jpg'
        document.body.style.background = '#F2A35E'
    } else {
        //boa noite
        img.src = 'img/noite.jpg'
        document.body.style.background = '#35403A'
    }

}

