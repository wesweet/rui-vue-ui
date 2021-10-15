<!--
 * @Description: 下拉选择组件
 * @Author: panrui
 * @Date: 2021-06-03 12:06:40
 * @LastEditTime: 2021-09-30 11:21:29
 * @LastEditors: panrui
 * 不忘初心,不负梦想
-->
<template>
  <a-select
    show-search
    :mode="mode"
    :placeholder="placeholder"
    :default-value="defaultValue"
    option-filter-prop="children"
    :filter-option="filterOption"
    @change="handleChangeSelect"
    @search="handleSearch"
    @popupScroll="handPopupScroll"
    :style="{ width: width + 'px' }"
  >
    <a-select-option
      v-for="(item, index) in frontList"
      :key="index"
      :value="item.value"
    >
      {{ item.name }}
    </a-select-option>
  </a-select>
</template>

<script>
export default {
  name: "MjSelect",
  props: {
    changeSelect: {
      type: Function,
      default: function () {},
    },
    defaultValue: [String, Number],
    ident: [String, Number],
    mode: {
      type: String,
      default: "default",
    },
    list: {
      type: Array,
      default() {
        return [];
      },
    },
    placeholder: {
      type: String,
      default: null,
    },
    width: {
      type: Number,
      default: 150,
    },
  },
  data() {
    return {
      showList: [],
      frontList: [],
    };
  },
  methods: {
    handleChangeSelect(value, option) {
      console.log(value, option);
      let name = "";
      switch (this.mode) {
        case "default":
          name = this.showList.find((item) => {
            return item.value === value;
          }).name;
          break;
        case "multiple":
          name = [];
          for (let index = 0; index < this.showList.length; index++) {
            const element = this.showList[index];
            if (value.indexOf(element.value) !== -1) {
              name.push(element.name);
            }
          }
          break;
        default:
          break;
      }
      this.changeSelect({
        ident: this.ident,
        value: value,
        name: name,
      });
    },
    filterOption(input, option) {
      return (
        option.componentOptions.children[0].text
          .toLowerCase()
          .indexOf(input.toLowerCase()) >= 0
      );
    },
    handleSearch(value) {
      console.log(value);
    },
    handPopupScroll(option) {
      console.log(option);
    },
  },
  watch: {
    list: {
      immediate: true,
      handler(n) {
        this.showList = [].concat(n);
        this.frontList =
          this.showList.length > 100
            ? this.showList.slice(0, 100)
            : [].concat(n);
      },
    },
  },
};
</script>
