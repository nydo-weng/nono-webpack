import b from "./a";
import "@css/test";
import "@css/lesstest.less";
import axios from "axios";
import _ from "lodash";

// import num1 from "./mode/num1";
// import num2 from "./mode/num2";
// import num3 from "./mode/num3";
// 批量引入, true (引入子文件夹), false (只有一级目录, 忽略子文件夹), 再加个规则, 满足规则才引入
const r = require.context("./mode", false, /.js/); // 返回一个方法
// r.keys();  // 引入的所有的数组 [./num1.js, ./num2.js]
let all = 0;
r.keys().forEach((item) => {
  // item 是 key, 所以要去 r(item) 拿 value
  console.log(r(item).default);
  all = all + r(item).default;
});
console.log("累加: ", all);

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
  console.log(3);
  console.log((new Image().src = img1));
})();
