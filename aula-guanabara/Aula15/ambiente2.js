let num = [1, 300, 40]

num[8] = 5
num[12] = 2

/*for (var c = 0; c< num.length; c++){
    valor = num.indexOf(num[c])
    if (valor == -1) {
        console.log(`A posição ${c} está vazia`)
    } else if (valor >=0) {
        console.log(`A posição ${c} está ocupada pelo valor ${num[c]}`)
    }
}*/ // Jeito visto conforme comentário do Curso do Guanabara, o ChatGPT deu esse exmplo melhor com undefined.

for (var c=0; c< num.length; c++) {
    if (num[c] == undefined) {
        console.log(`A posição n. ${c} está vazia`)
    } else {
        console.log(`A posição n. ${c} está ocupada pelo valor ${num[c]}`)
    }
}
