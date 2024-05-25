function tabuada() {
    let num = document.getElementById('ntxt')
    let res = document.getElementById('tabuada')
    res.innerHTML = ''

    if (num.value.length == 0) {
        window.alert(`ERRO - Insira um valor para gerar a tabuada`)
    } else {
        let n = Number(num.value)
        let c = 1
        while (c<=10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `res${c}`
            res.appendChild(item)
            c++
        }

    }
    
}