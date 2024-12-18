let nums = []
let i = 0

while(true){
let num = prompt("Digite seu número (para parar digite 0): ")
num = parseFloat(num)

if(num === 0){
    break
}
nums[i] = num;
i++
}
console.log(nums)