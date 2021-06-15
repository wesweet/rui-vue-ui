<!--
 * @Description: SelectYear组件
 * @Author: panrui
 * @Date: 2021-06-03 14:30:26
 * @LastEditTime: 2021-06-15 17:52:51
 * @LastEditors: panrui
 * 不忘初心,不负梦想
-->
<template>
  <div class="selectyear-box">
    <a-card title="SelectYear组件使用展示" style="width: 500px">
      <mj-select-year :fnSelectYear="fnSelectYear"> </mj-select-year>
    </a-card>
    <a-row type="flex">
      <a-col :span="20" class="markdown-body">
        <selectYearDocs></selectYearDocs>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import selectYearDocs from "@/mds/selectYearDocs.md";
export default {
  name: "SelectYear",
  components: {
    selectYearDocs,
  },
  data() {
    return {};
  },
  methods: {
    fnSelectYear(option) {
      console.log(option);
    },
  },
};
</script>
<style lang="scss" scoped>
.selectyear-box {
  padding-left: 50px;
  padding-top: 20px;
  background-color: #fff;
}
</style>
