let str = "hello World";

let target = 'l';

let count = 0;

for (let i = 0; i < str.length; i++) {
  let ch = str.charAt(i);
  if (ch === target) {
    count++;
  }
}

console.log(count);