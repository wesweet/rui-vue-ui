<!--
 * @Description: 下拉选择组件
 * @Author: panrui
 * @Date: 2021-06-03 12:06:40
 * @LastEditTime: 2021-07-26 17:15:53
 * @LastEditors: panrui
 * 不忘初心,不负梦想
-->
<template>
  <a-select
    show-search
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
    defaultValue: {
      type: String,
      default: "",
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
      this.changeSelect({
        value: value,
        name: this.showList[option.data.key].name,
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
