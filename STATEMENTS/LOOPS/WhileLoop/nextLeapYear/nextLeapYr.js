let current_year = 2025
let next_leap_year = current_year + 1

while (!((next_leap_year % 100 != 0) && (next_leap_year % 4 == 0)) || (next_leap_year % 400 == 0)) {
  next_leap_year++
}
console.log(next_leap_year)

//-------------------------------------------------------------------------------

current_year = 2025
next_leap_year = current_year + 1

let willLoopRun = true

while (willLoopRun) {
  next_leap_year++
  let year = next_leap_year
  if (year % 100 == 0) {
    if (year % 400 == 0) {
      willLoopRun = false
    }
  } else if (year % 4 == 0) {
    willLoopRun = false
  }
}
console.log(next_leap_year)