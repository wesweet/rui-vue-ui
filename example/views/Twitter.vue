<!--
 * @Description: Twitter测试组件
 * @Author: panrui
 * @Date: 2021-06-03 14:30:26
 * @LastEditTime: 2021-12-30 18:02:37
 * @LastEditors: panrui
 * 不忘初心,不负梦想
-->
<template>
  <div class="Twitter-box">
    <a-card title="timeline组件使用展示" style="width: 500px">
      <mj-time-line :option="option"> </mj-time-line>
    </a-card>
    <a-row type="flex">
      <a-col :span="20" class="markdown-body">
        <twitterDocs></twitterDocs>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import twitterDocs from "@/mds/twitterDocs.md";
export default {
  name: "Twitter",
  components: {
    twitterDocs,
  },
  data() {
    return {
      option: {
        screenName: "Gokudounoeden",
        height: 400,
        follow: true,
      },
    };
  },
  methods: {
    fnSelectYear(option) {
      console.log(option);
    },
  },
};
</script>
<style lang="scss" scoped>
.Twitter-box {
  padding-left: 50px;
  padding-top: 20px;
  background-color: #fff;
}
</style>

