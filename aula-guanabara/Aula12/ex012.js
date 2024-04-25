var idade = 19
console.log(`Você tem ${idade} anos.`)
if (idade > 18 && idade < 75) {
    console.log(`Voto obrigatório`)
} else {
    if (idade >= 16 && idade < 18 || idade > 75) {
        console.log(`Voto opcional`)
    } else {
        console.log(`Você não pode votar`)
    }       
} //Fiz diferente do Guanabara antes dele mostrar, dava para simplificar conforme está nas nostas da aula 12