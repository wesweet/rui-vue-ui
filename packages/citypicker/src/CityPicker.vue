<!--
 * @Description: 城市联动组件
 * @Author: panrui
 * @Date: 2021-06-03 15:46:23
 * @LastEditTime: 2021-07-15 15:04:08
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
            :value="item.name"
            v-for="item in provinces"
            :key="item.code"
          >
            {{ item.name }}
          </a-select-option>
        </a-select>
        <a-select
          v-show="isLevel >= 2"
          style="width: 120px; margin-right: 14px"
          @change="handCityChange"
          v-model="cityvalue"
        >
          <a-select-option
            :value="item.name"
            v-for="item in citys"
            :key="item.code"
          >
            {{ item.name }}
          </a-select-option>
        </a-select>
        <a-select
          v-show="isLevel == 3"
          style="width: 120px"
          @change="handAreaChange"
          v-model="areavalue"
        >
          <a-select-option
            :value="item.name"
            v-for="item in areas"
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
    isLevel: {
      type: Number,
      default: 1,
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
    fnCallback: {
      type: Function,
      default: function () {},
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
    if (this.isLevel > 3) {
      this.isLevel = 3;
    }
    const data = this.isLevel == 3 ? pcacode : pccode; // 是否开启三级联动
    this.provinces = [].concat(data); // 获取省份列表
    this.fnInit({
      province: this.province,
      city: this.city,
      area: this.area,
    });
  },
  mounted() {},
  methods: {
    // 设置省市区信息
    fnInit(option) {
      // 找到省份对应的下标
      const index = this.provinces.findIndex((item) => {
        return item.name === option.province;
      });
      if (index == -1) {
        // 找不到符合的省份信息
        this.provincevalue = this.provinces[0].name; // 默认选择北京
        this.citys = this.provinces[0].children;
        this.cityvalue = this.citys[0].name;
        if (this.isLevel == 3) {
          this.areas = this.citys[0].children;
          this.areavalue = this.areas[0].name;
        }
        return;
      }
      this.provincevalue = option.province;
      this.citys = this.provinces[index].children;
      const c_index = this.citys.findIndex((item) => {
        return item.name === option.city;
      });
      if (c_index == -1) {
        // 找不到符合的城市信息
        this.cityvalue = this.citys[0].name;
        if (this.isLevel == 3) {
          this.areas = this.citys[0].children;
          this.areavalue = this.areas[0].name;
        }
        return;
      }
      this.cityvalue = option.city;
      if (this.isLevel == 3) {
        this.areas = this.citys[c_index].children;
        const a_index = this.areas.findIndex((item) => {
          return item.name === option.area;
        });
        this.areavalue = a_index == -1 ? this.areas[0].name : option.area;
      }
    },
    // 省份改变
    handProvinceChange(value) {
      this.fnInit({
        province: value,
        city: "",
        area: "",
      });
      if (this.isLevel == 1) {
        this.fnCallback({
          province: value,
        });
      }
      this.fnCallback({
        province: value,
        city: "",
        area: "",
      });
    },
    // 城市改变
    handCityChange(value) {
      this.fnInit({
        province: this.provincevalue,
        city: value,
        area: "",
      });
      if (this.isLevel == 2) {
        this.fnCallback({
          province: this.provincevalue,
          city: value,
        });
      }
      this.fnCallback({
        province: this.provincevalue,
        city: value,
        area: "",
      });
    },
    // 区县改变
    handAreaChange(value) {
      this.fnCallback({
        province: this.provincevalue,
        city: this.cityvalue,
        area: value,
      });
    },
  },
};
</script>
