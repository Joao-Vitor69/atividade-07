let palavra = prompt("Digite sua palavra: ")

let palavrainve = ""

for (let i = 0; i < palavra.length; i++) {

    palavrainve = palavra[i] + palavrainve
    
}
console.log(palavrainve)