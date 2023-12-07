function parimpar(n){
    if(n%2 == 0){
        return "par"  
    }else{
        return "impar"
    }
}

console.log(parimpar(11))
let res = parimpar(20)
console.log(`Seu número é ${res}`)