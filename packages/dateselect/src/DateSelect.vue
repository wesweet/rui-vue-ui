<!--
 * @Author: hxw
 * @Date: 2021-06-04 11:14:58
 * @LastEditTime: 2021-06-15 17:54:09
 * @LastEditors: panrui
 * @Description: 自定义时间组件
-->
<template>
  <a-space>
    <a-range-picker
      :ranges="ranges"
      :disabled="currentDisabled"
      :disabled-date="disabledDate"
      :default-value="defaultValue"
      :inputReadOnly="true"
      :allowClear="false"
      @change="onChange"
    />
    <a-icon type="swap" v-if="is_show" />
    <a-dropdown>
      <a-menu slot="overlay" @click="handleMenuClick">
        <a-menu-item key="1">前一日</a-menu-item>
        <a-menu-item key="2">前一周</a-menu-item>
        <a-menu-item key="3">前一月</a-menu-item>
        <a-menu-item key="4">自定义时间</a-menu-item>
      </a-menu>
      <a-button v-if="!is_show">+对比 <a-icon type="down" /> </a-button>
      <a-range-picker
        :ranges="ranges_1"
        :default-value="compareDefaultValue"
        :disabled-date="disabledDate"
        :open="is_open"
        v-model="contrastTime"
        :inputReadOnly="true"
        :allowClear="compareAllowClear"
        @calendarChange="handCalendarChange"
        @change="handOnChange"
        @openChange="handOpenChange"
        v-if="is_show"
      />
    </a-dropdown>
  </a-space>
</template>

<script>
import moment from "moment";
export default {
  name: "MjDateSelect",
  props: {
    fnSelectDate: {
      type: Function,
      default: function () {},
    },
    compareAllowClear: {
      type: Boolean,
      default: true,
    },
    currentDisabled: {
      type: Boolean,
      default: false,
    },
    defaultValue: {
      type: Array,
      default() {
        return [];
      },
    },
    compareDefaultValue: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      // 预设常用日期范围快捷方式
      ranges: {
        今日: () => [moment(), moment()],
        昨日: () => [
          moment().startOf("day").subtract(1, "days"),
          moment().endOf("day").subtract(1, "days"),
        ],
        最近7日: () => [moment().startOf("day").subtract(6, "days"), moment()],
        最近30日: () => [
          moment().startOf("day").subtract(29, "days"),
          moment(),
        ],
        本月: () => [
          moment().startOf("month"),
          moment().endOf("month").endOf("month"),
        ],
        上月: () => [
          moment()
            .month(moment().month() - 1)
            .startOf("month"),
          moment()
            .month(moment().month() - 1)
            .endOf("month"),
        ],
      },
      // 对比日期
      ranges_1: {},
      is_show: 0,
      is_open: false,
      contrastTime: [], // 自定义时间
      startTime: null, // 开始时间
      endTime: null, // 结束时间
      timeStr: null, // 自定义时间的开始时间
      diffTime: 0,
      ekey: null,
      // 禁止选择未来的日期
      disabledDate(current) {
        // Can not select days before today and today
        return current && current > moment().endOf("day");
      },
      formatDate: "YYYY-MM-DD",
    };
  },
  methods: {
    /**
     * 日期设置组件
     */
    moment,
    /**
     * 当前日期选择
     */
    onChange(dates, dateStrings) {
      // 设置开始时间
      this.startTime = dateStrings[0];
      // 设置结束时间
      this.endTime = dateStrings[1];
      // 计算两个时间间隔天数
      this.diffTime = dates[1].diff(dates[0], "days");
      // 判断是否选择过对比日期
      if (this.ekey) {
        if (this.ekey > 3) {
          this.setContrastTime();
        } else {
          this.handleMenuClick({
            key: this.ekey,
          });
        }
      } else {
        this.selectCallback();
      }
    },
    /**
     * 对比时间插件打开或关闭状态
     */
    handOpenChange() {
      if (this.contrastTime.length === 0) {
        this.is_show = false;
      } else {
        this.is_open = false;
      }
    },
    /**
     * 对比时间插件改变回调函数
     */
    handCalendarChange(dates) {
      this.is_open = false;
      if (dates.length === 1) {
        this.timeStr = dates[0].format(this.formatDate);
      }
      // 设置时间
      this.setContrastTime();
    },
    /**
     * 对比时间范围确定回调函数
     */
    handOnChange(dates) {
      if (dates.length === 0) {
        this.is_show = false;
        this.ekey = null;
      }
      this.selectCallback();
    },
    /**
     * 设定对比时间
     */
    setContrastTime() {
      this.contrastTime = [
        moment(this.timeStr),
        this.disabledDate(moment(this.timeStr).add(this.diffTime, "d"))
          ? moment().endOf("day")
          : moment(this.timeStr).add(this.diffTime, "d"),
      ];
      this.selectCallback();
    },
    /**
     * 对比菜单切换触发
     */
    handleMenuClick(e) {
      const key = parseInt(e.key);
      this.ekey = key;
      this.is_show = true;
      switch (key) {
        case 1:
          this.contrastTime = [
            moment(this.startTime).subtract(1, "d"),
            moment(this.endTime).subtract(1, "d"),
          ];
          break;
        case 2:
          this.contrastTime = [
            moment(this.startTime).subtract(1, "w"),
            moment(this.startTime).subtract(1, "w").add(this.diffTime, "d"),
          ];
          break;
        case 3:
          this.contrastTime = [
            moment(this.startTime).subtract(1, "M"),
            moment(this.startTime).subtract(1, "M").add(this.diffTime, "d"),
          ];
          break;
        case 4:
          this.is_open = true;
          break;
        default:
          break;
      }
      key !== 4 && this.selectCallback();
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
  /**
   * 监听当前日期默认日期改变触发
   */
  watch: {
    defaultValue: {
      immediate: true,
      handler(n) {
        // 设置开始时间
        this.startTime = n[0].format(this.formatDate);
        // 设置结束时间
        this.endTime = n[1].format(this.formatDate);
        // 计算两个时间间隔天数
        this.diffTime = n[1].diff(n[0], "days");
      },
    },
    compareDefaultValue: {
      immediate: true,
      handler(n) {
        if (n.length > 0) {
          this.handleMenuClick({
            key: 1,
          });
        }
      },
    },
  },
};
</script>
