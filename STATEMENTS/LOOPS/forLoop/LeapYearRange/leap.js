let start = Number(prompt("Enter starting year"));
let end = Number(prompt("Enter ending year"));

let count = 0;

for (let i = start; i <= end; i++) {
  if (start == 0 && end == 0) {
    break;
  } else if (i % 100 == 0) {
    if (i % 400 == 0) {
      count++;
    }
  } else if (i % 4 == 0) {
    count++;
  }
}

console.log(count + " no of leap years are presene between " + start + " and " + end);