function render() {
  document.body.innerHTML = "Hello W1ebpac22224k HMR! " + new Date().toLocaleTimeString();
}
render();

console.log(123);

// HMR 接入点
if (module.hot) {
  module.hot.accept("./app.js", function () {
    console.log("🔥 index.js updated!");
    render();
  });
}
