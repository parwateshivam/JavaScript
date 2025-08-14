let str = "hello world";
let result = "";
for (let i = 0; i < str.length; i++) {
  let flag = false;
  for (let j = 0; j < result.length; j++) {
    if (str.charAt(i) === result.charAt(j)) {
      flag = true;
    }
  }
  if (!flag) {
    result += str.charAt(i);
  }
}

console.log(result);