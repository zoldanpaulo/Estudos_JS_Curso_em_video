function calcular() {
    var ini = document.getElementById('vinicial')
    var fim = document.getElementById('vfinal')
    var passo = document.getElementById('vpasso')
    var res = document.getElementById('res')
   
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] dados incompletos!')
    } else {
        res.innerHTML = 'Contando: <br> '
        let i = Number(ini.value) //converte o texto do vinicial para número
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando Passo = 1')
            p = 1
        }
        if (i < f) {
            //Contagem crescente
            for(var c = i;c <= f;c += p) {
                res.innerHTML +=  ` ${c} \u{1F449}`
            }
        } else {
            //Contagem decrescente
            for(var c= i;c>= f;c -= p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F6D1}`
    }
   
}
