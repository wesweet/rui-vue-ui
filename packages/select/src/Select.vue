<!--
 * @Description: 下拉选择组件
 * @Author: panrui
 * @Date: 2021-06-03 12:06:40
 * @LastEditTime: 2021-07-26 16:24:33
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
    :style="{ width: width + 'px' }"
  >
    <a-select-option
      v-for="(item, index) in showList"
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
  },
  watch: {
    list: {
      immediate: true,
      handler(n) {
        this.showList = [].concat(n);
      },
    },
  },
};
</script>
