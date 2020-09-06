import { data } from "./users";
import HW4 from "./HW4/main";
import HW5 from "./HW5/main";
import HW6 from "./HW6/main";
import HW7 from "./HW7/main";
import HW9 from "./HW9/main";
import "./HW9/styles.css";
import "./HW10/style.css";
import myImg from "./HW10/files/img2.jpg";

console.log(`hello node cursor lalala`);
console.log(data);

//console.log(HW4.getHW4());
HW4.getHW4();
//console.log(HW5.getHW5());
HW5.getHW5();
//console.log(HW6.getHW6());
HW6.getHW6();
console.log(HW7.getHW7());
HW7.getHW7();
HW9.getHW9();
function component() {
  const element = document.createElement("div");

  // Lodash, now imported by this script
  //   element.innerHTML = _.join(["Hello", "webpack"], " ");
  //   element.classList.add("hello");

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = myImg;

  element.appendChild(myIcon.style.maxWidth(`100px`));

  return element;
}

document.body.appendChild(component());
