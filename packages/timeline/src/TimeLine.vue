<!--
 * @Description: 表格展示列组件 MjSelectCol
 * @Author: panrui
 * @Date: 2021-06-07 14:44:14
 * @LastEditTime: 2021-12-27 11:26:30
 * @LastEditors: panrui
 * 不忘初心,不负梦想
-->
<template>
  <div>
    <slot v-if="isLoading" name="loading"></slot>
    <slot v-else-if="hasError" name="error"></slot>
    <div ref="tweetContainer" v-bind="attrs"></div>
  </div>
</template>
<script>
import {
  addPlatformScript,
  timelineProps,
  timelineEmits,
} from "../../../utils/twitter";
export default {
  name: "TimeLine",
  props: timelineProps,
  data() {
    return {
      isLoading: true,
      hasError: false,
    };
  },
  mounted() {},
  methods: {
    renderTweet() {
        Promise.resolve(window["twttr"] ? window["twttr"] : addPlatformScript()).then(({widgets }) => {
            
        })
    },
  },
};
</script>
