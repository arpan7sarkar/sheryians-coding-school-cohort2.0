// .trim is used to cut the spaces from first char se left and from right side se right ke spcae katte hhe

let str = "    hello    ";
console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());

let str2=prompt("Kuch likhde vai");
if(str===null){
    console.log("You press cancel");
}else if(str.trim()===""){
    console.log("THik se likh vai");
}else{
    console.log(str);
}
