let num = [5,8,9,2]

num.push(1)
num[2]=3 // Se colocar dessa maneira, ele vai tirar o valor que estáva na posicáõ anterior, nesse caso o 9
console.log(num)
console.log(num.indexOf(2))
console.log(`O vetor tem ${num.length} posições/elementos`)
console.log(`O valor do terceiro elemeto é: ${num[2]}`)
console.log(`Os valores da array se colocados em ordem crescente ficam da seguinte maneira: ${num.sort()}`)

for (let pos=0; pos<num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

//Outro jeito de fazer mais simples:

//O código abaixo se le da seguinte maneira: Para cada posição que tem dentro da variável num
for (let pos in num) {
    console.log(`IZI - A posição de ${pos} tem o valor de ${num[pos]}`)
}