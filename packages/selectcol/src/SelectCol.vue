<!--
 * @Description: 表格展示列组件 MjSelectCol
 * @Author: panrui
 * @Date: 2021-06-07 14:44:14
 * @LastEditTime: 2022-05-05 14:19:48
 * @LastEditors: panrui
 * 不忘初心,不负梦想
-->
<template>
  <div ref="selectcol" class="selectColBox">
    <a-button @click="handCard">
      {{ radioName }}
      <a-icon type="down"></a-icon>
    </a-button>
    <a-card v-show="cardFlag" :bordered="false" :style="styleObject">
      <div class="contbox">
        <!-- leftbox -->
        <div
          class="wrapbox"
          style="border-right: 1px solid #eee"
          v-show="leftBoxFlag"
        >
          <div class="listbox" :style="{ height: height - 63 + 'px' }">
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
                <a-col :span="5" v-if="item.value != -1">
                  <a-icon
                    @click="handEdit(item)"
                    style="margin-right: 10px"
                    type="edit"
                  />
                  <a-icon @click.stop="handDelete(item)" type="close" />
                </a-col>
              </a-row>
            </a-radio-group>
          </div>
          <a-divider style="margin: 0" />
          <a-row type="flex" style="margin-left: 15px; padding: 15px 0">
            <a-col>
              <a-button type="primary" @click="handAdd(1)"> 新增 </a-button>
            </a-col>
          </a-row>
        </div>
        <!-- /leftbox -->
        <!-- rightbox -->
        <div class="wrapbox" v-show="rightboxFlag">
          <div
            class="listbox"
            style="border-right: 1px solid #eee"
            :style="{ height: height - 63 + 'px' }"
          >
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
              <a-button
                type="primary"
                @click="handSubmit"
                :disabled="submitFlag"
              >
                确认
              </a-button>
            </a-col>
            <a-col>
              <a-button type="primary" @click="handAdd(0)"> 重置 </a-button>
            </a-col>
            <a-col>
              <a-button type="primary" @click="handAdd(2)"> 关闭 </a-button>
            </a-col>
          </a-row>
        </div>
        <div class="wrapbox" v-show="rightboxFlag">
          <div class="listbox" :style="{ height: height - 63 + 'px' }">
            <div style="padding: 10px">已选择{{ draggableList.length }}栏</div>
            <div class="draggable-box" :style="{ height: height - 113 + 'px' }">
              <draggable v-model="draggableList" @end="handend">
                <transition-group>
                  <div v-for="(item, index) in draggableList" :key="item.value">
                    <a-row
                      type="flex"
                      justify="space-between"
                      class="draggable-item"
                    >
                      <a-col>
                        <a-icon type="menu" />
                        {{ item.name }}
                      </a-col>
                      <a-col
                        @click="handDraDelete(item, index)"
                        :span="4"
                        style="text-align: right"
                      >
                        <a-icon type="close" />
                      </a-col>
                    </a-row>
                  </div>
                </transition-group>
              </draggable>
            </div>
          </div>
          <a-divider style="margin: 0" />
          <a-row
            type="flex"
            align="middle"
            style="padding: 15px 0"
            v-if="inputboxFlag"
          >
            <a-col :span="6" :offset="3">另存为：</a-col>
            <a-col :span="14">
              <a-input v-model="inputValue" placeholder="请输入" />
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
    // 勾选保存组回调
    fnOnchangeClick: {
      type: Function,
      default: function () {},
    },
    // 确认按钮回调函数
    fnSureClick: {
      type: Function,
      default: function () {},
    },
    // 确认删除回调函数
    fnDelete: {
      type: Function,
      default: function () {},
    },
    // 组件弹框高度
    height: {
      type: Number,
      default: 343,
    },
    // 是否支持隐藏左侧菜单功能
    hideLeft: {
      type: Boolean,
      default: false,
    },
    // 默认选择的值
    value: {
      type: Number,
      default: -1,
    },
  },
  data() {
    return {
      initFlag: false, // 弹窗是否初始化展示过
      checkNumber: 0, // 当前查询的数量
      styleObject: {}, // 弹窗位置样式
      cardFlag: false, // 卡片默认不展示
      radioValue: -1, // radio选择的值
      radioName: "默认", // 选中的值
      precheckedList: [], // 上一次选择的值
      checkedList: [], // checkbox当前选择的值
      draggableList: [], // 拖动数组
      showColData: [],
      rightboxFlag: false, // 右侧展开状态
      inputboxFlag: false, // 输入框展开状态
      inputValue: "", // 输入框值
      editValue: "", // 编辑值
      leftBoxFlag: true, // 左侧菜单展示状态
    };
  },
  // 实例化初始化完成
  beforeCreate() {},
  created() {},
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
      if (this.$refs.selectcol && this.$refs.selectcol.contains(e.target)) {
        return;
      }
      this.handAdd(2);
      this.radioValue = this.showColData.find((item) => {
        return item.name == this.radioName;
      }).value;
      this.cardFlag = false;
      this.leftBoxFlag = true;
    },
    // radio选中
    handRadioChange(e) {
      const data = this.showColData.find((item) => {
        return item.value == e.target.value;
      });
      this.radioName = data.name;
      this.radioValue = data.value;
      this.fnOnchangeClick(data);
      this.handCard();
    },
    // 删除功能
    handDelete(item) {
      if (item.value == this.radioValue) {
        this.radioValue = this.showColData[0].value;
        this.radioName = this.showColData[0].name;
      }
      this.fnDelete(item.value);
    },
    // 编辑功能
    handEdit(item) {
      this.editValue = item.value;
      this.radioValue = item.value;
      this.inputValue = item.name;
      this.checkedList = [].concat(item.list);
      this.precheckedList = [].concat(this.checkedList);
      let _draggableList = [];
      item.list.map((m) => {
        this.plainOptions.map((n) => {
          if (m == n.value) {
            _draggableList.push(n);
          }
        });
      });
      this.draggableList = [].concat(_draggableList);
      this.rightboxFlag = this.inputboxFlag = true;
      if (this.hideLeft) {
        this.leftBoxFlag = false;
      }
    },
    // 弹窗显示隐藏控制
    handCard() {
      if (!this.$refs.selectcol) {
        return;
      }
      if (!this.initFlag) {
        // 检测组件距离浏览器左侧位置
        this.initFlag = !this.initFlag;
        document.body.clientWidth -
          this.$refs.selectcol.getBoundingClientRect().left >
        (this.rightboxFlag ? 600 : 300)
          ? (this.styleObject = {
              left: 0,
            })
          : (this.styleObject = {
              right: 0,
            });
      }
      this.cardFlag = !this.cardFlag;
    },
    // checkbox选中的值 checkedList
    handCheckboxChange(checkedList) {
      let list = [];
      if (checkedList.length > this.precheckedList.length) {
        // 新增
        list = this.checkedList.filter((item) => {
          return this.precheckedList.indexOf(item) == -1;
        });
        const data = this.plainOptions.filter((item) => {
          return list.indexOf(item.value) > -1;
        });
        this.draggableList = this.draggableList.concat(data);
      } else {
        // 删除
        list = this.precheckedList.filter((item) => {
          return this.checkedList.indexOf(item) == -1;
        });
        const index = this.draggableList.findIndex((item) => {
          return item.value == list[0];
        });
        this.draggableList.splice(index, 1);
      }
      this.precheckedList = [].concat(checkedList);
    },
    // 拖拽结束
    handend() {
      console.log(this.draggableList);
    },
    // 0重置 1新增 2关闭按钮
    handAdd(status) {
      if (status) {
        this.rightboxFlag = this.inputboxFlag = status == 1 ? true : false;
      }
      this.precheckedList = this.checkedList = this.draggableList = [];
      this.inputValue = "";
      if (status == 1 && this.hideLeft) {
        this.leftBoxFlag = false;
      }
      if (status == 2) {
        this.leftBoxFlag = true;
      }
    },
    // 确认按钮
    handSubmit() {
      this.fnSureClick({
        name: this.inputValue,
        list: this.draggableList.map((item) => {
          return item.value;
        }),
        value: this.editValue ? this.editValue : "",
      });
      this.handAdd(2);
    },
    // 拖动组件删除功能
    handDraDelete(item, index) {
      this.draggableList.splice(index, 1);
      const list = this.checkedList.filter((m) => {
        return m != item.value;
      });
      this.checkedList = [].concat(list);
      this.precheckedList = [].concat(list);
    },
  },
  watch: {
    plainOptions: {
      immediate: true,
      handler(n) {
        if (this.showColData[0]) {
          this.showColData[0].list = [].concat(
            n.map((item) => {
              return item.value;
            })
          );
        }
      },
    },
    colData: {
      immediate: true,
      handler(n) {
        const list = this.plainOptions.map((item) => {
          return item.value;
        });
        this.showColData = [
          {
            name: "默认",
            value: -1,
            list: list,
          },
        ].concat(n);
      },
    },
    value: {
      immediate: true,
      handler(n) {
        if (n) {
          this.handRadioChange({
            target: {
              value: n,
            },
          });
        }
      },
    },
  },
  computed: {
    // 提交按钮状态
    submitFlag() {
      return this.inputValue && this.draggableList.length ? false : true;
    },
  },
};
</script>
<style lang="scss" scoped>
.selectColBox {
  position: relative;
  // z-index: 99;
  display: inline-block;
  color: rgba(0, 0, 0, 0.65);
  cursor: pointer;
  /deep/ .ant-card {
    position: absolute;
    top: 33px;
    z-index: 12;
    background: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    .ant-card-body {
      padding: 0;
      .ant-radio-group {
        display: flex;
        flex-direction: column;
        padding: 10px;
        .ant-row-flex {
          margin-bottom: 10px;
        }
      }
      .ant-checkbox-group {
        display: flex;
        flex-direction: column;
        padding: 10px;
        .ant-checkbox-group-item {
          margin-bottom: 12px;
        }
      }
    }
  }
  .contbox {
    display: flex;
    .wrapbox {
      min-width: 250px;
      .listbox {
        // height: 280px;
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
        .draggable-box {
          // height: 230px;
          padding: 0 10px;
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
          .draggable-item {
            margin-bottom: 5px;
            padding: 4px 8px 4px 0;
            background-color: #efefef;
          }
        }
      }
    }
  }
}
.ellipsis {
  display: block;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;
  overflow: hidden;
}
</style>
