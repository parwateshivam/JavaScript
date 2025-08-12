do{
  let number = Number(prompt("Enter number"));
  let rev = 0;
  while(number>0){
    let rem = number%10;
    rev = rev * 10 + rem;
    number = parseInt(number / 10);
  }
  console.log(rev);
  let choise = confirm("do yo want to continue");
}while(choise);