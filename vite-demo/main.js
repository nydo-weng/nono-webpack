// import mode2 from "./mode2.js";
import("./mode2.js").then((res) => {
  console.log(mode2);
});
import "./test.css";
import "./test1.less";
import mode from "./tsmode.ts";
import tp1 from "./img/kedaya.png";
import _ from "lodash";
let img1 = new Image();
img1.src = tp1;
document.getElementById("app").appendChild(img1);
console.log(mode2);
console.log(1);
console.log(mode);
