let number = 121;
let orgNo = number
let rev = 0
do {
  let d = number % 10;
  rev = rev * 10 + d;
  number = parseInt(number / 10);
} while (number > 0);

if (rev == orgNo) {
  console.log("is palindrome");
} else {
  console.log("not palindrome");
}

