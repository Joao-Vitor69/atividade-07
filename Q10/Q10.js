while(true){
let num = prompt("Digite seu número: ")
num = parseFloat(num)


if(num<=1){
    alert("Digite números maiores que 1")
    false
}else{
    let aux = true
    for (let i = 2; i < num; i++) {
        if(num%i === 0){
            aux = false
            break
        }
    }
    if(aux){
        alert("é primo")
    }else{
        alert("não é primo")
    }
}
}   