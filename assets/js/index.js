// Керування розповсюдженням подій

const body = document.body;
const section = document.querySelector("section");
const button = document.querySelector("button");

// function clickHandler(e) {
//   console.log("this :>> ", this); // = currentTarget
// //   console.log("e.target :>> ", e.target); // ціль подіїї, найбільш занурений елемент
// //   console.log("e.currentTarget :>> ", e.currentTarget);
//   console.log("---------------------------------------");

//   e.target.style.backgroundColor = "red";
// }
// // Bubbling and capturing / порядок виклику обробників

// // на занурення (capturing)
// body.addEventListener("click", clickHandler, { capture: true });
// section.addEventListener("click", clickHandler, { capture: true });
// button.addEventListener("click", clickHandler, { capture: true });

// // на сплиття (bubbling)
// button.addEventListener("click", clickHandler);
// section.addEventListener("click", clickHandler);
// body.addEventListener("click", clickHandler);

// Припинення розповсюдження події

let clickCounter = 0;

body.addEventListener(
  "click",
  () => {
    clickCounter++;
    console.log("clickCounter :>> ", clickCounter);
  },
//   { capture: true }
);

button.addEventListener("click", (e) => {
  e.stopPropagation(); // припинення розповсюдження події
});

// body capture
// section capture
// btn capture

// btn X
// section
// body
