let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let target = 3;

let flag = false;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] == target) {
    flag = true;
  }
}

if (!flag) {
  console.log("element is present");
} else {
  console.log("element not present");
}