import b from "./a.js";
import "./test.css";
import "./lesstest.less";
import axios from "axios";
import _ from "lodash";

// setTimeout(() => {
//   // import(), require.ensure
//   // import(/*webpackChunkName: "a"*/ "./a.js").then((res) => {
//   //   // 相当于 之前的 console.log(b)
//   //   console.log(res);
//   //   console.log(res.default);
//   // });

//   // ([依赖], 函数, 命名)
//   require.ensure(
//     [],
//     () => {
//       let b = require("./a.js");
//       console.log(b.default);
//     },
//     "a",
//   );
// }, 3000);

import img1 from "./img/xiaohuoma.png";

(() => {
  let a = 23;
  console.log(b);
  console.log(a);
  console.log((new Image().src = img1));
})();
