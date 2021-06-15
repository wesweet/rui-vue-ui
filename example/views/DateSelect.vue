<!--
 * @Author: hxw
 * @Date: 2021-06-04 11:14:58
 * @LastEditTime: 2021-06-15 17:52:18
 * @LastEditors: panrui
 * @Description: 自定义时间组件
-->
<template>
  <div class="dateSelect-box">
    <a-card
      title="时间范围选择（带对比功能：前一天、前一周、前一月）组件使用展示"
      style="width: 800px"
    >
      <mj-date-select
        :fnSelectDate="fnSelectDate"
        :compareAllowClear="true"
        :currentDisabled="false"
        :defaultValue="[moment(), moment()]"
        :compareDefaultValue="[moment(), moment()]"
      />
    </a-card>
    <a-row type="flex">
      <a-col :span="20" class="markdown-body">
        <dateSelectDocs></dateSelectDocs>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import dateSelectDocs from "@/mds/dateSelectDocs.md";
import moment from "moment";
export default {
  name: "DateSelect",
  components: {
    dateSelectDocs,
  },
  data() {
    return {};
  },
  methods: {
    /**
     * 日期设置组件
     */
    moment,
    fnSelectDate() {
      console.log("选择后回调");
    },
    /**
     * 确认时间后组件回调
     */
    selectCallback() {
      this.fnSelectDate({
        start_time: this.startTime,
        end_time: this.endTime,
        compare_start_time:
          this.contrastTime.length > 0
            ? this.contrastTime[0].format(this.formatDate)
            : null,
        compare_end_time:
          this.contrastTime.length > 0
            ? this.contrastTime[1].format(this.formatDate)
            : null,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.dateSelect-box {
  padding-left: 50px;
  padding-top: 20px;
  background-color: #fff;
}
</style>
