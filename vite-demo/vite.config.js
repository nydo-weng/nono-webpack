import { defineConfig } from "vite";

export default defineConfig({
  // root: "/",
  // base: "/www.xxx.com",  // 所有路径都会带上这个前缀
  // publicDir: "./static",  // 指定静态资源目录, 想在服务跑起来之后, 还能读到资源的目录, 平常设置的也不多
  // 别名, 拓展省略
  resolve: {
    extensions: [".js", ".ts", ".css"],
    alias: {
      "@": __dirname + "/src",
    },
  },
  // build 里的 rollupOptions 配置和 rollup 是一模一样的, 因为 vite 用 rollup 打包
  // 入口 出口 base64 压缩 代码分割 -> build, 只对打包时候有用, 和开发没关系
  build: {
    rollupOptions: {
      // 多入口
      // input: "./index.build.html"
      output: {
        // 入口打包后的名字
        entryFileName: "bundle.js",
        chunkFileNames: "[name].chunks.js",
        // 指定路径
        // dir: ""
        // manualChunks: {
        //   vendor: ["lodash"],
        // },
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
    assetsInlineLimit: 20000, // 小于这个大小的, 都转成 base64
  },
  // 开发模式配置, 只对跑开发服务
  server: {
    port: 2000,
    proxy: {
      // 匹配一个路径 转发到 target
      "/api": {
        target: "www.xxx.com",
        // 路径重写, 和 webpack 不同, 写成一个函数
        rewrite: (path) => {
          return path.replace(/^\/api/, "xxx");
        },
      },
    },
    headers: {},
  },
});
