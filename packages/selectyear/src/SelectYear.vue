<!--
 * @Description: 年度选择组件
 * @Author: panrui
 * @Date: 2021-06-03 13:52:35
 * @LastEditTime: 2022-01-21 12:53:40
 * @LastEditors: panrui
 * 不忘初心,不负梦想
-->
<template>
  <div>
    <a-button-group>
      <a-row type="flex">
        <a-col>
          <a-button @click="decline" v-if="minYear < year">
            <a-icon type="left" />
          </a-button>
          <a-button disabled v-else>
            <a-icon type="left" />
          </a-button>
        </a-col>
        <a-col>
          <span class="yearbox">{{ year }}</span>
        </a-col>
        <a-col>
          <a-button @click="increase" v-if="maxYear > year">
            <a-icon type="plus" />
          </a-button>
          <a-button disabled v-else>
            <a-icon type="right" />
          </a-button>
        </a-col>
      </a-row>
    </a-button-group>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "MjSelectYear",
  props: {
    fnSelectYear: {
      type: Function,
      default: function () {},
    },
  },
  data() {
    return {
      minYear: 2010,
      maxYear: moment().format("YYYY"),
      year: moment().format("YYYY"),
    };
  },
  mounted() {
    // console.log(moment().format('YYYY'))
  },
  methods: {
    increase() {
      this.year += 1;
      this.fnSelectYear({
        year: this.year,
      });
    },
    decline() {
      this.year -= 1;
      this.fnSelectYear({
        year: this.year,
      });
    },
  },
};
</script>

<style lang="less" scoped>
.yearbox {
  border: 1px solid #ccc;
  height: 32px;
  line-height: 32px;
  box-sizing: border-box;
  font-size: 16px;
  text-align: center;
  width: 100px;
  display: block;
}
</style>
