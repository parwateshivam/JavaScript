let a = 100;
let b = 200;
let c = 300;
let d = 400;
let e = 500;
if (a >= b && a >= c && a >= d && a >= e) {
  console.log("all are equal");
} else if (a > b && a > c && a > d && a > e) {
  console.log("a is greater");
} else if (b > c && b > d && b > e) {
  console.log("b is greater");
} else if (c > d && c > e) {
  console.log("c is greater");
} else if (d > e) {
  console.log("d is greater");
} else {
  console.log("e is greater");
}
