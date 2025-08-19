let power = (a,b) => {
  if(b==0) return 1;
  let res = 1;
  for(let i=1; i<=b; i++){
    res = res * a;
  }
  return res;
}
let ans = power(2,0);
console.log(ans);
