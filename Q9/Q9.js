let multi = 1

for (let i = 1; i <= 5; i++) {
    let num = prompt("Digite seus números: ")
    num = parseFloat(num)
    
    multi*=num
}
alert(multi)