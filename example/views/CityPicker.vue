<!--
 * @Description: 省市县联动组件
 * @Author: panrui
 * @Date: 2021-06-03 16:02:13
 * @LastEditTime: 2021-06-03 16:09:39
 * @LastEditors: panrui
 * 不忘初心,不负梦想
-->
<template>
  <div class="city-picker-box">
    <a-card title="citypicker组件使用展示" style="width: 500px">
      <mj-city-picker></mj-city-picker>
    </a-card>
    <a-row type="flex">
      <a-col :span="20" class="markdown-body">
        <cityPickerDocs></cityPickerDocs>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import cityPickerDocs from "@/mds/cityPickerDocs.md";
export default {
  name: "CityPicker",
  components: {
    cityPickerDocs,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.city-picker-box {
  padding-left: 50px;
  padding-top: 20px;
  background-color: #fff;
}
</style>