let arr1 = [1, 8, 4, 90, 7, 5, 6];
let arr2 = [1, 2, 3, 4, 5];
function bubbleSort1(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swap = true;
      }
    }
  }
}

bubbleSort1(arr1);
console.log(arr1);