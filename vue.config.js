/*
 * @Description:
 * @Author: panrui
 * @Date: 2021-05-21 18:04:53
 * @LastEditTime: 2021-06-07 17:26:10
 * @LastEditors: panrui
 * 不忘初心,不负梦想
 */
const path = require("path");
module.exports = {
  // 修改入口
  pages: {
    index: {
      entry: "example/main.js", // 入口
      template: "public/index.html", // 模板
      filename: "index.html", // 输入文件
    },
  },
  // 扩展webpack配置
  chainWebpack: (config) => {
    // @ 默认指向 src目录，这里修改成 example
    // 另外新增一个 ~ 指向packages
    config.resolve.alias
      .set("@", path.resolve("example"))
      .set("~", path.resolve("packages"));

    // 把 packages 和 examples 加入编译，因为新增的文件默认是不被 webpack 处理的
    config.module
      .rule("js")
      .include.add(/packages/)
      .end()
      .include.add(/examples/)
      .end()
      .use("babel")
      .loader("babel-loader")
      .tap((options) => {
        // 修改它的选项...
        return options;
      });
    // 添加markdown配置
    config.module
      .rule("md")
      .test(/\.md$/)
      .use("vue-loader")
      .loader("vue-loader")
      .end()
      .use("vue-markdown-loader")
      .loader("vue-markdown-loader/lib/markdown-compiler")
      .options({
        raw: true,
      });
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          "primary-color": "#e94c4b",
          "link-color": "#e94c4b",
          "border-radius-base": "2px",
        },
        javascriptEnabled: true,
      },
    },
  },
};
