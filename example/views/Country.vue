<!--
 * @Description: Country组件
 * @Author: panrui
 * @Date: 2021-05-24 15:22:17
 * @LastEditTime: 2021-05-25 10:33:47
 * @LastEditors: panrui
 * 不忘初心,不负梦想
-->
<template>
  <div class="country-box">
    <a-card title="country组件使用展示" style="width: 500px">
      <pr-country
        :plainOptions="[
          { name: '中国', value: 1 },
          { name: '日本', value: 2 },
          { name: '韩国', value: 3 },
        ]"
        :fnSureClick="fnSureClick"
        :isSave="true"
        :fnSave="fnSave"
        :fnDelete="fnDelete"
        :areaData="areaData"
      >
        <template v-slot> 渠道分包 </template>
      </pr-country>
    </a-card>
    <a-row type="flex">
      <a-col> </a-col>
      <!-- <a-col :span="9" :offset="1">
        <a-row>
          <a-col>当前确定选择的值为</a-col>
          <a-col>{{ sureData }}</a-col>
        </a-row>
        <a-row>
          <a-col>当前已保存的区域</a-col>
          <a-col>{{ areaData }}</a-col>
        </a-row>
      </a-col> -->
    </a-row>
    <a-row type="flex">
      <a-col :span="20" class="markdown-body">
        <country></country>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import country from "@/mds/country.md";
export default {
  name: "Country",
  components: {
    country,
  },
  data() {
    return {
      sureData: [], // 当前选择的值
      areaData: [
        {
          title: "中国",
          id: 1,
          list: [1],
        },
      ], // 当前已保存的区域
    };
  },
  methods: {
    // 确认按钮回调函数
    fnSureClick(option) {
      console.log(option);
      this.sureData = [].concat(option);
    },
    // 保存列表回调函数
    fnSave(option) {
      console.log(option);
      const id = (Math.random() * 1000).toFixed(0);
      option.id = id;
      this.areaData.push(option);
    },
    // 删除列表回调函数
    fnDelete(option) {
      console.log(option);
      this.areaData.splice(option.index, 1);
      console.log(this.areaData);
    },
  },
};
</script>
<style lang="scss">
.country-box {
  padding-left: 50px;
  padding-top: 20px;
  background-color: #fff;
}
</style>
