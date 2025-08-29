let box = document.querySelector(".box");
let btn = document.querySelector(".btn");

let defaultClassList = box.classList.value;

btn.addEventListener("click", () => {
  if (defaultClassList.includes("show")) {
    defaultClassList = defaultClassList.replace("show", "hide");
    box.classList.value += defaultClassList;
    btn.innerText = "show";
  } else {
    defaultClassList = defaultClassList.replace("hide", "show");
    box.classList.value += defaultClassList;
    btn.innerText = "Hide"
  }
});