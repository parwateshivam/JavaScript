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
// result = "helo wrd"     // unique char string derived from original string
// now check the presence of result string character in the original string if found increment count by 1 
for(let i=0; i<result.length;i++){
  let count = 0;
  for(let j=0; j<str.length;j++){
    if(result.charAt(i) === str.charAt(j)){
      count++;
    }
  }
  console.log(result.charAt(i) + " = " + count);
}