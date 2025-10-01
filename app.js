import b from "./a.js";
import "./test.css";
import "./lesstest.less";
import img1 from "./img/xiaohuoma.png";

(() => {
  let a = 23;
  console.log(b);
  console.log(a);
  console.log((new Image().src = img1));
})();
