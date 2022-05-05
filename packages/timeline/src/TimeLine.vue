<!--
 * @Description: Twitter时间线组件
 * @Author: panrui
 * @Date: 2021-12-27 11:19:48
 * @LastEditTime: 2022-01-21 14:49:18
 * @LastEditors: panrui
 * 不忘初心,不负梦想
-->
<template>
  <div>
    <!-- <div v-show="readly">
      <div v-show="installed">
        <div v-show="option.follow" id="button"></div>
        <div id="container"></div>
      </div>
    </div> -->
  </div>
</template>
<script>
import VueScript2 from "vue-script2";
export default {
  name: "MjTimeLine",
  data() {
    return {
      installed: !!window.twttr,
      readly: false,
    };
  },
  props: {
    option: {
      type: Object,
      default() {
        return {
          screenName: "TwitterDev", // 用户名称
          theme: "light", // 主题
          width: 0, // 宽度
          height: 600, // 高度
          limit: undefined, // 限制条数，设置了此字段那么高度无效
          follow: true, // 是否显示关注按钮
        };
      },
    },
    fnCallback: {
      type: Function,
      default: function () {},
    },
  },
  mounted() {
    // this.fnInstall();
  },
  methods: {
    // 安装widgets
    fnInstall() {
      if (!this.installed) {
        VueScript2.load("https://platform.twitter.com/widgets.js")
          .then(() => {
            this.installed = true;
            this.$nextTick(() => {
              this.fnInit();
            });
          })
          .catch((err) => {
            this.readly = false;
            this.fnCallback(this.readly);
            console.log(err);
          });
      } else {
        this.installed = true;
        this.$nextTick(() => {
          this.fnInit();
        });
      }
    },
    // 加载Twitter
    fnInit() {
      const that = this;
      this.$nextTick(() => {
        window.twttr.widgets
          .load()
          .then(() => {
            that.readly = true;
            this.fnCallback(this.readly);
            if (that.option.follow) {
              // 推特按钮
              window.twttr.widgets.createFollowButton(
                that.option.screenName,
                document.getElementById("button"),
                {
                  size: "large",
                }
              );
            }
            // 推文内容获取
            window.twttr.widgets.createTimeline(
              {
                sourceType: "profile",
                screenName: that.option.screenName,
                // sourceType: "list", // 使用这个变量存在异常 Required parameter list_id -or- [user_id -or- screen_name] with list_slug] is missing or invalid
                // slug: "national-parks",
              },
              document.getElementById(that.option.id),
              {
                height: that.option.height,
                chrome: "nofooter",
                borderColor: "#a80000",
              }
            );
          })
          .catch((err) => {
            that.readly = false;
            this.fnCallback(this.readly);
            console.log(err);
          });
      });
    },
  },
};
</script>
