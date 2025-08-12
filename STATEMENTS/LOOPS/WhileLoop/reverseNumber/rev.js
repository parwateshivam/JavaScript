let number = 123;
let rev = 0;
while(number>0){
  let rem = number%10;
  rev = rev * 10 + rem;
  number = parseInt(number / 10);
}
console.log(rev);