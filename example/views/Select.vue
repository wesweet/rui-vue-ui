<!--
 * @Description: Select组件
 * @Author: panrui
 * @Date: 2021-06-03 12:08:47
 * @LastEditTime: 2021-07-26 16:30:13
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
export default {
  name: "Select",
  components: {
    selectDocs,
  },
  data() {
    return {
      list: [
        { value: "1", name: "热血三国" },
        { value: "2", name: "热血三国2" },
        { value: "3", name: "热血三国3" },
      ],
      defaultValue: "1",
      width: 200,
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
