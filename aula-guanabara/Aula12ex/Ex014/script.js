function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = 2 // data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`
    if (hora >= 6 && hora < 12) {
        //Bom dia
        img.src = 'imgmanha.png'
        document.body.style.background = '#FAEF70'
    } else if (hora >= 12 && hora < 19) {
        //Boa tarde
        img.src = 'imgtarde.png'
        document.body.style.background = '#86DCE3'
    } else if (hora >=19 && hora < 23) {
        //Boa noite
        img.src = 'imgnoite.png'
        document.body.style.background = '#7D4739'
    } else {
        //Boa madrugada
        img.src = 'imgmadrugada.png'
        document.body.style.background = '#556364'
    }
}
