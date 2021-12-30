<!--
 * @Description: Twitter时间线组件
 * @Author: panrui
 * @Date: 2021-12-27 11:19:48
 * @LastEditTime: 2021-12-30 17:29:05
 * @LastEditors: panrui
 * 不忘初心,不负梦想
-->
<template>
  <div v-if="installed">
    <div id="button"></div>
    <div id="container"></div>
  </div>
  <div v-else>
    <a-spin>
      <a-icon slot="indicator" type="loading" style="font-size: 24px" spin />
    </a-spin>
  </div>
</template>
<script>
import VueScript2 from "vue-script2";
export default {
  name: "MjTimeLine",
  data() {
    return {
      installed: !!window.twttr,
    };
  },
  props: {},
  mounted() {
    this.fnInstall();
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
            console.log(err);
          });
      }
    },
    // 加载Twitter
    fnInit() {
      this.$nextTick(() => {
        window.twttr.widgets
          .load()
          .then(() => {
            // 推特按钮
            window.twttr.widgets.createFollowButton(
              "Gokudounoeden",
              document.getElementById("button"),
              {
                size: "large",
              }
            );
            // 推文内容获取
            window.twttr.widgets.createTimeline(
              {
                sourceType: "profile",
                screenName: "Gokudounoeden",
              },
              document.getElementById("container"),
              {
                height: 400,
                chrome: "nofooter",
                borderColor: "#a80000",
              }
            );
          })
          .catch((err) => {
            console.log(err);
          });
      });
    },
  },
};
</script>
