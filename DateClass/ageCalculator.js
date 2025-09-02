let myDob = new Date("2003-05-27");
console.log(myDob.getTime());

let today = new Date();
console.log(today.getTime());

// difference in ms

let difference = today.getTime() - myDob.getTime();
console.log(difference);

// convert to days

let days = Math.floor(difference/(1000*60*60*24));
console.log(days);

// convert to years

let years = Math.floor(days/365);
console.log(years);

// calculate remaining days

let remainingDays = (days%365);
console.log(remainingDays);

console.log(`you are ${years} years and ${remainingDays} days old`);