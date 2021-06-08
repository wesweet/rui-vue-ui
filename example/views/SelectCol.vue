<!--
 * @Description: 表格展示列组件
 * @Author: panrui
 * @Date: 2021-06-07 14:51:40
 * @LastEditTime: 2021-06-08 14:43:06
 * @LastEditors: panrui
 * 不忘初心,不负梦想
-->
<template>
  <div class="select-col-box">
    <a-card title="SelectCol组件使用展示" style="width: 500px">
      <mj-select-col
        :plainOptions="plainOptions"
        :colData="colData"
      ></mj-select-col>
    </a-card>
    <a-row type="flex">
      <a-col :span="20" class="markdown-body">
        <selectColDocs></selectColDocs>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import selectColDocs from "@/mds/selectColDocs.md";
export default {
  name: "SelectCol",
  components: {
    selectColDocs,
  },
  data() {
    return {
      plainOptions: [
        {
          name: "展示",
          value: 1,
        },
        {
          name: "cpm",
          value: 2,
        },
        {
          name: "点击",
          value: 3,
        },
        {
          name: "点击率",
          value: 4,
        },
        {
          name: "激活",
          value: 5,
        },
        {
          name: "转化率",
          value: 6,
        },
        {
          name: "CTR*CVR",
          value: 7,
        },
        {
          name: "折前消耗",
          value: 8,
        },
        {
          name: "实际消耗",
          value: 9,
        },
        {
          name: "CPI",
          value: 10,
        },
        {
          name: "付费人数",
          value: 11,
        },
      ],
      colData: [
        {
          name: "设置",
          value: 0,
          list: [
            {
              name: "展示",
              value: 1,
            },
            {
              name: "cpm",
              value: 2,
            },
            {
              name: "点击",
              value: 3,
            },
          ],
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.select-col-box {
  padding-left: 50px;
  padding-top: 20px;
  background-color: #fff;
}
</style>