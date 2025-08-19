let arr = [1, 3, 6, 8, 10, 45];
let target = 10;

let start = 0;
let end = arr.length - 1;

let flag = false;

while (!flag) {
  let mid = parseInt((start + end) / 2);
  if (arr[mid] == target) {
    console.log(`element found at index ${mid}`);
    flag = true;
  } else if (target > arr[mid]) {
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}