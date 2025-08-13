let str = prompt("Enter String");
let rev = "";
for(let i=str.length-1; i>=0; i--){
  let ch = str.charAt(i);
  rev = rev + ch;
}

console.log(rev);