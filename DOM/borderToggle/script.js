let box = document.querySelector(".box");

let btn = document.querySelector(".cta");

console.log(box.classList)

btn.addEventListener("click", () => {
  if (!box.classList.contains("border")) {
    box.classList.add("border");
  } else {
    box.classList.remove("border");
  }
});


// in js classlist is not an array it is an DOMTokenList which does not supports include() method it supports contains() method 

// we can convert a DOMTokenList(like classList) into a normal JavaScript array.That way you’ll be able to use array methods such as .includes(), .map(), .filter(), etc.

// Here are some ways:

// 1. Using Array.from()
// let classes = Array.from(box.classList);
// console.log(classes);       // ["box", "border"] (example)
// console.log(classes.includes("border")); // true

// 2. Using Spread[...]
// let classes = [...box.classList];
// console.log(classes.includes("border"));

// 3. Using slice.call()
// let classes = [].slice.call(box.classList);
// console.log(classes.includes("border"));


