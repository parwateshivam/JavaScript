let arr = [1, 8, 4, 90, 7, 5, 6];

// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
// }
// bubbleSort(arr);
// console.log(arr);



// function bubbleSort(arr, order) {

//     let steps = 0

//     let swap = true

//     for (let i = 0; i < arr.length; i++) {

//         swap = false

//         for (let j = 0; j < arr.length - i; j++) {

//             steps++

//             if (order == "A") {

//                 if (arr[j] > arr[j + 1]) {
//                     let temp = arr[j]
//                     arr[j] = arr[j + 1]
//                     arr[j + 1] = temp
//                     swap = true
//                 }
//             } else {
//                 if (arr[j] < arr[j + 1]) {
//                     let temp = arr[j]
//                     arr[j] = arr[j + 1]
//                     arr[j + 1] = temp
//                     swap = true
//                 }
//             }
//         }

//         if (!swap) {
//             return `sort array is [${arr}] in ${steps} steps`
//         }
//     }

//     return `sort array is [${arr}] in ${steps} steps`
// }

// let ans = bubbleSort(arr,"A");
// console.log(ans)