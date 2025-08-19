// Керування розповсюдженням подій

const body = document.body;
const section = document.querySelector("section");
const button = document.querySelector("button");

function clickHandler(e) {
  console.log("this :>> ", this); // = currentTarget
  console.log("e.target :>> ", e.target); // ціль подіїї, найбільш занурений елемент
  console.log("e.currentTarget :>> ", e.currentTarget);
  console.log('---------------------------------------')

  // звернення до об'єкту, на якому відбулася подія
  this.style.backgroundColor = "yellow";
}

button.addEventListener("click", clickHandler);
section.addEventListener("click", clickHandler);
body.addEventListener("click", clickHandler);

