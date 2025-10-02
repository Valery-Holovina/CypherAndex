
// let code = "a1b2c3d4e5";

function cypher(){
let code = prompt("Enter word to cypher: ")
let rightPart = ""
let leftPart = ""
for(let i = 1; i <= code.length; i++){
    if(i%2==0){
        leftPart += code[i-1];
    }else if (i%2!=0){
        rightPart += code[i-1];
    }
}

let final = rightPart + leftPart;
alert(`Your cyphered word: ${final}🩵`)
}


function decypher(){
let code = prompt("Enter word to decypher: ")
   let res = "";

    let half = Math.ceil(code.length / 2); 
    let firstHalf = code.slice(0, half);
    let secondHalf = code.slice(half);

    
    for (let i = 0; i < half; i++) {
        if (i < firstHalf.length) res += firstHalf[i];
        if (i < secondHalf.length) res += secondHalf[i];
    }

    alert(`Your deciphered word: ${res}🤍`)
}

cypher();
decypher();