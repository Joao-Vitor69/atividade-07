let palavra = prompt("Digite sua palavra: ")

let palindromo = true

for (let i = 0; i < palavra.length / 2; i++) {
    if(palavra[i] !== palavra[palavra.length -1 -i]){
        palindromo = false
        break
    }
    
}
if(palindromo){
    alert("Sua palavra é um palindromo.")
}else{
    alert("Não é um palindromo.")
}
//oxe, demorei viu, plmds