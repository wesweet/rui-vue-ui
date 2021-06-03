<!--
 * @Description: 城市联动组件
 * @Author: panrui
 * @Date: 2021-06-03 15:46:23
 * @LastEditTime: 2021-06-03 16:56:29
 * @LastEditors: panrui
 * 不忘初心,不负梦想
-->
<template>
  <div class="">
    <a-row type="flex">
      <a-col> 
        
      </a-col>
    </a-row>
  </div>
</template>
<script>
import pccode from "../../../example/assets/pc-code.json";
import pcacode from "../../../example/assets/pca-code.json";
export default {
  name: "MjCityPicker",
  data() {
    return {
      provinces: [],
      citys: [],
      areas: [],
      // province: '',
      // city: '',
      // area: ''
    };
  },
  created() {
    console.log(this.isArea);
  },
  mounted() {
    console.log(this.isArea);
    console.log(pccode.length);
    console.log(pcacode.length);
  },
  props: {
    // 是否开启三级联动
    isArea: {
      type: Boolean,
      default: false,
    },
    // 默认选择省份
    province: {},
    // 默认选择城市
    city: {},
    // 默认选择区县
    area: {},
  },
  methods: {
    // 省份改变
    handProvinceChange(value) {
      console.log(value);
    },
    // 城市改变
    handCityChange(value) {
      console.log(value);
    },
    // 区县改变
    handAreaChange(value) {
      console.log(value);
    },
  },
};
</script>