let arr = [3,4,5,6,9,1,11,2];

function selectionSort(arr){
  for(let i=0;i<arr.length;i++){
    let min = i;
    for(let j=i+1;j<arr.length;j++){
      if(arr[min]>arr[j]){
        let temp = arr[min];
        arr[min] = arr[j];
        arr[j] = temp;
      }
    }
  }
}

console.log(arr);
selectionSort(arr);
console.log(arr);