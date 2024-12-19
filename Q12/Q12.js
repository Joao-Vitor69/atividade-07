let vetor02 = [1, 2, 3, 4, 5]
let  inversor = vetor02.length

for (let i = 0; i < inversor / 2; i++) {

        let vet = vetor02[i]
        vetor02[i] = vetor02[inversor -1 -i]
        vetor02[inversor -1 -i] = vet
}
console.log(vetor02)