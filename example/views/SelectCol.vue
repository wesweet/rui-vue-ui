<!--
 * @Description: 表格展示列组件
 * @Author: panrui
 * @Date: 2021-06-07 14:51:40
 * @LastEditTime: 2021-07-02 17:40:29
 * @LastEditors: panrui
 * 不忘初心,不负梦想
-->
<template>
  <div class="select-col-box">
    <a-card title="SelectCol组件使用展示" style="width: 500px">
      <mj-select-col
        :plainOptions="plainOptions"
        :colData="colData"
        :fnSureClick="fnSureClick"
        :fnDelete="fnDelete"
        :fnOnchangeClick="fnOnchangeClick"
        :height="height"
        :hideLeft="hideLeft"
        :value="value"
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
        { name: "前一列", value: 1, list: [1] },
        { name: "前二列", value: 2, list: [1, 2] },
        { name: "前三列", value: 3, list: [1, 2, 3] },
        { name: "前四列", value: 4, list: [1, 2, 3, 4] },
        { name: "前五列", value: 5, list: [1, 2, 3, 4, 5] },
      ],
      height: 250,
      hideLeft: true,
      value: 1,
    };
  },
  methods: {
    // 确认按钮回调
    fnSureClick(option) {
      if (option.value) {
        const index = this.colData.findIndex((item) => {
          return item.value == option.value;
        });
        let list = [].concat(this.colData);
        list[index] = option;
        this.colData = [].concat(list);
        // this.colData[index] = option;
      } else {
        option.value = Date.parse(new Date());
        this.colData = this.colData.concat(option);
      }
    },
    // 选择组列回调
    fnOnchangeClick(option) {
      console.log(option);
    },
    // 确认删除回调
    fnDelete(option) {
      const index = this.colData.findIndex((item) => {
        return item.value == option;
      });
      this.colData.splice(index, 1);
    },
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
