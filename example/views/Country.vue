<!--
 * @Description: Country组件
 * @Author: panrui
 * @Date: 2021-05-24 15:22:17
 * @LastEditTime: 2021-05-24 15:38:04
 * @LastEditors: panrui
 * 不忘初心,不负梦想
-->
<template>
  <div>
    <pr-country
      :plainOptions="[
        { name: '中国', value: 1 },
        { name: '日本', value: 2 },
        { name: '韩国', value: 3 },
      ]"
      :fnSureClick="fnSureClick"
    >
      <template v-slot>全部</template>
    </pr-country>
  </div>
</template>
<script>
export default {
  name: "Country",
  data() {
    return {};
  },
  methods: {
    fnSureClick() {},
  },
};
</script>
