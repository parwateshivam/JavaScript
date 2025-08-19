let arr = [1,2,3,4,5,6,7,8];
function deleteElementFromMid(arr,start,deleteCount){
  if(deleteCount+start > arr.length){
    console.log("delete count is out of array index");
    return;
  }
  let removed = [];
  for(let i=start; i<start + deleteCount; i++){
    removed.push(arr[i]);
  }
  return removed;
}
console.log(arr);
let removed = deleteElementFromMid(arr,3,5);
console.log(removed);