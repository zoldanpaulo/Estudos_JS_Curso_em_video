function calcular() {
    var numero = document.getElementById('numero')
    var res = document.getElementById('seltab')
    res.innerHTML = ''

    if (numero.value.length == 0 ) {
        window.alert('ERRO - Insira um número para realizar o cálculo')
    } else {
        let n = Number(numero.value)
        for (let i=1; i<=10 ; i++) {
            let item = document.createElement('option')
            item.text = `${n} x ${i} = ${n*i}`
            item.value = `res${i}`
            res.appendChild(item)
        }
        
    }
}