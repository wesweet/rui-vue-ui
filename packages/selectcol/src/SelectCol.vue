<!--
 * @Description: 表格展示列组件 MjSelectCol
 * @Author: panrui
 * @Date: 2021-06-07 14:44:14
 * @LastEditTime: 2021-06-08 14:53:00
 * @LastEditors: panrui
 * 不忘初心,不负梦想
-->
<template>
  <div ref="selectcol" class="channelbox">
    <a-button @click="handCard">
      测试
      <a-icon type="down"></a-icon>
    </a-button>
    <a-card
      v-show="cardFlag"
      :bordered="false"
      class="cardbox"
      :style="styleObject"
    >
      <div class="contbox">
        <!-- leftbox -->
        <div class="wrapbox" style="border-right: 1px solid #eee">
          <div class="listbox">
            <a-radio-group v-model="radioValue" @change="handRadioChange">
              <a-row
                type="flex"
                justify="space-between"
                align="middle"
                v-for="(item, index) in showColData"
                :key="index"
              >
                <a-col :span="18">
                  <a-radio
                    :value="item.value"
                    class="ellipsis"
                    :title="item.name"
                  >
                    {{ item.name }}
                  </a-radio>
                </a-col>
                <a-col :span="4">
                  <a-icon
                    @click="handDelete(item)"
                    style="margin-right: 10px"
                    type="delete"
                  />
                  <a-icon @click="handEdit(item)" type="edit" />
                </a-col>
              </a-row>
            </a-radio-group>
          </div>
        </div>
        <!-- /leftbox -->
        <!-- rightbox -->
        <div class="wrapbox">
          <div class="listbox" style="border-right: 1px solid #eee">
            <a-checkbox-group
              v-model="checkedList"
              :options="plainOptions"
              @change="handCheckboxChange"
            >
              <template slot="label" slot-scope="option">
                {{ option.name }}
              </template>
            </a-checkbox-group>
          </div>
          <a-divider style="margin: 0" />
          <a-row type="flex" justify="space-around" style="padding: 15px 0">
            <a-col>
              <a-button type="primary"> 确认 </a-button>
            </a-col>
            <a-col>
              <a-button type="primary"> 重置 </a-button>
            </a-col>
            <a-col>
              <a-button type="primary"> 关闭 </a-button>
            </a-col>
          </a-row>
        </div>
        <div class="wrapbox">
          <div class="listbox">
            <div style="padding: 10px">已选择3栏</div>
            <div style="height: 333px;">
              <draggable v-model="plainOptions">
                <transition-group>
                  <div v-for="element in plainOptions" :key="element.value">
                    {{ element.name }}
                  </div>
                </transition-group>
              </draggable>
            </div>
          </div>
          <a-divider style="margin: 0" />
          <a-row type="flex" style="padding: 15px 0">
            <a-col>
              <a-input placeholder="Basic usage" />
            </a-col>
          </a-row>
        </div>
        <!-- /rightbox -->
      </div>
    </a-card>
  </div>
</template>
<script>
import draggable from "vuedraggable";
export default {
  name: "MjSelectCol",
  components: {
    draggable,
  },
  // 组件接收数据
  props: {
    // 表格列数据
    plainOptions: {
      type: Array,
      default() {
        return [];
      },
      required: true,
    },
    // 已保存的表格列
    colData: {
      type: Array,
      default() {
        return [];
      },
    },
    // 已保存的区域
    areaData: {
      type: Array,
      default() {
        return [];
      },
    },
    isSave: {
      type: Boolean,
      default: false,
    },
    fnSureClick: {
      type: Function,
      default: function () {},
    },
    fnSave: {
      type: Function,
      default: function () {},
    },
    fnDelete: {
      type: Function,
      default: function () {},
    },
  },
  data() {
    return {
      initFlag: false, // 弹窗是否初始化展示过
      checkNumber: 0, // 当前查询的数量
      styleObject: {}, // 弹窗位置样式
      cardFlag: false, // 卡片默认不展示
      radioValue: 1,
      checkedList: [], // 默认设置需要选中的值
      saveCheckedList: [], // 最近一次选中的值
      indeterminate: false, // 全选不存在默认选中时设置false 否则设置true
      checkAll: false,
      showPlainOptions: [], // 传递过来的数据
      showAreaData: [], // 已保存过的数据
      data: [], // 保存的地区
      value: null, // 保存列表名称
      checked: false, // 保存勾选状态
      previewList: [], // 预览数据
    };
  },
  // 实例化初始化完成
  created() {
    console.log(456);
  },
  // 组件挂在阶段
  mounted() {
    // 点击其他区域关闭弹窗显示
    document.addEventListener("click", this.click, false);
  },
  // 组件销毁阶段
  destroyed() {
    // 移除document的点击事件
    document.removeEventListener("click", this.click, false);
  },
  methods: {
    // 给document绑定点击事件
    click(e) {
      const _this = this;
      if (_this.$refs.selectcol && _this.$refs.selectcol.contains(e.target)) {
        return;
      }
      _this.cardFlag = false;
      // _this.checkedList = [];
      // _this.cardFlag = _this.indeterminate = _this.checkAll = _this.checked = false;
    },
    handRadioChange(e) {
      console.log("radio checked", e.target.value);
    },
    handDelete(item) {
      console.log(item);
    },
    handEdit(item) {
      console.log(item);
    },
    // 弹窗显示隐藏控制
    handCard() {
      if (!this.initFlag) {
        // 检测组件距离浏览器左侧位置
        this.initFlag = !this.initFlag;
        document.body.clientWidth -
          this.$refs.selectcol.getBoundingClientRect().left >
        (this.isSave ? 600 : 300)
          ? (this.styleObject = {
              left: 0,
            })
          : (this.styleObject = {
              right: 0,
            });
      }
      this.cardFlag = !this.cardFlag;
      if (this.cardFlag && this.saveCheckedList.length) {
        // 弹窗打开条件
        this.checkedList = [].concat(this.saveCheckedList); // 还原上一次选中的值
        this.handCheckboxChange(this.checkedList);
      }
    },
    handCheckboxChange() {
      
    }
  },
  /**
   * 监听当前日期默认日期改变触发
   */
  watch: {
    colData: {
      immediate: true,
      handler(n) {
        this.showColData = [
          {
            name: "默认",
            value: -1,
            list: this.plainOptions,
          },
        ].concat(n);
      },
    },
  },
};
</script>
<style lang="less" scoped>
.channelbox {
  position: relative;
  display: inline-block;
  color: rgba(0, 0, 0, 0.65);
  cursor: pointer;
  .cardbox {
    position: absolute;
    top: 33px;
    z-index: 9;
    background: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    /deep/ .ant-card-body {
      padding: 0;
      .cardbox-search {
        padding: 10px;
        border-bottom: 1px solid #e8e8e8;
      }
      .cardbox-checkall {
        padding: 10px;
        border-bottom: 1px solid #e8e8e8;
      }
      .contbox {
        display: flex;
        .wrapbox {
          min-width: 250px;
          &.small {
            // min-width: 220px;
            padding: 10px;
          }
          .checkbox {
            min-width: 250px;
            padding: 10px;
            .ant-checkbox-group {
              height: 100%;
              width: 100%;
              overflow-y: auto;
              &::-webkit-scrollbar {
                width: 8px; /*高宽分别对应横竖滚动条的尺寸*/
                height: 4px;
                scrollbar-arrow-color: #e94c4b;
              }
              &::-webkit-scrollbar-thumb {
                border-radius: 10px;
                background-color: rgba(0, 0, 0, 0.25);
              }
              &::-webkit-scrollbar-track {
                border-radius: 5px;
                background-color: #eeeeee;
              }
              .ant-checkbox-group-item {
                display: block;
                text-align: left;
                white-space: nowrap;
                word-break: break-all;
              }
            }
          }
          .inputbox {
            padding: 10px;
          }
          .btnbox {
            padding: 10px;
          }
          .listbox {
            height: 400px;
            width: 250px;
            box-sizing: border-box;
            overflow-y: auto;
            &::-webkit-scrollbar {
              width: 8px; /*高宽分别对应横竖滚动条的尺寸*/
              height: 4px;
              scrollbar-arrow-color: #e94c4b;
            }
            &::-webkit-scrollbar-thumb {
              border-radius: 10px;
              background-color: rgba(0, 0, 0, 0.25);
            }
            &::-webkit-scrollbar-track {
              border-radius: 5px;
              background-color: #eeeeee;
            }
            .ant-checkbox-group {
              display: flex;
              flex-direction: column;
              padding: 10px;
              .ant-checkbox-group-item {
                margin-bottom: 12px;
              }
            }
            .ant-radio-group {
              display: flex;
              flex-direction: column;
              padding: 10px;
            }
            .ant-row-flex {
              margin-bottom: 10px;
            }
            .ellipsis {
              display: block;
              width: 100%;
              text-overflow: ellipsis;
              white-space: nowrap;
              word-break: break-all;
              overflow: hidden;
            }
          }
        }
      }
    }
  }
}
</style>