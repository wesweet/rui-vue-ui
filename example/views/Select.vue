<!--
 * @Description: Select组件
 * @Author: panrui
 * @Date: 2021-06-03 12:08:47
 * @LastEditTime: 2021-09-30 11:18:50
 * @LastEditors: panrui
 * 不忘初心,不负梦想
-->
<template>
  <div class="select-box">
    <a-card title="select组件使用展示" style="width: 500px">
      <mj-select
        :changeSelect="changeSelect"
        :defaultValue="defaultValue"
        :list="list"
        :width="width"
        :ident="ident"
        placeholder="请选择"
      />
    </a-card>
    <a-row type="flex">
      <a-col :span="20" class="markdown-body">
        <selectDocs></selectDocs>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import selectDocs from "@/mds/selectDocs.md";
const list = [];
for (let index = 0; index < 1000; index++) {
  list.push({
    value: index + "",
    name: `热血三国${index}`,
  });
}
export default {
  name: "Select",
  components: {
    selectDocs,
  },
  data() {
    return {
      list: list,
      defaultValue: "1",
      width: 200,
      ident: 1,
      mode: "multiple",
    };
  },
  methods: {
    changeSelect(option) {
      console.log(option);
    },
  },
};
</script>
<style lang="scss" scoped>
.select-box {
  padding-left: 50px;
  padding-top: 20px;
  background-color: #fff;
}
</style>
