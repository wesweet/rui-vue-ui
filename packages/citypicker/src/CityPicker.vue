<!--
 * @Description: 城市联动组件
 * @Author: panrui
 * @Date: 2021-06-03 15:46:23
 * @LastEditTime: 2021-06-03 18:00:16
 * @LastEditors: panrui
 * 不忘初心,不负梦想
-->
<template>
  <div class="">
    <a-row type="flex">
      <a-col>
        <a-select
          style="width: 120px; margin-right: 14px"
          @change="handProvinceChange"
          v-model="provincevalue"
        >
          <a-select-option
            :value="item.code"
            v-for="item in provinces"
            :key="item.code"
          >
            {{ item.name }}
          </a-select-option>
        </a-select>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import pccode from "../../../example/assets/pc-code.json";
import pcacode from "../../../example/assets/pca-code.json";
export default {
  name: "MjCityPicker",
  props: {
    // 是否开启三级联动
    isArea: {
      type: Boolean,
      default: false,
    },
    // 默认选择省份
    province: {
      type: String,
      default: "",
    },
    // 默认选择城市
    city: {
      type: String,
      default: "",
    },
    // 默认选择区县
    area: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      provinces: [],
      citys: [],
      areas: [],
      provincevalue: "",
      cityvalue: "",
      areavalue: "",
    };
  },
  created() {
    const data = this.isArea ? pcacode : pccode; // 是否开启三级联动
    this.provinces = [].concat(data); // 获取省份列表

    // 设置省份选择的值
    this.provinces.some((item) => {
      if (item.name === this.province) {
        this.provincevalue = item.code;
        this.citys = item.children; // 获取城市列表
        return true;
      }
    });

    // this.provincevalue = this.provinces.filter(item => {
    //   return item.name === this.province
    // })
  },
  mounted() {
    // console.log(this.isArea);
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