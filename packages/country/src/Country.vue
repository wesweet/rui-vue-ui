<!--
 * @Description: 多选带搜索保存插件
 * @Author: panrui
 * @Date: 2021-05-21 18:14:45
 * @LastEditTime: 2021-09-03 16:59:14
 * @LastEditors: panrui
 * 不忘初心,不负梦想
-->
<template>
  <div ref="country" class="countryBox">
    <a-button @click="handCard">
      <template v-if="checkNumber > 0">
        <!-- {{ $t('others.hasChoice') }} -->
        已选
        {{ checkNumber }}
      </template>
      <template v-else>
        <slot></slot>
      </template>
      <a-icon type="down"></a-icon>
    </a-button>
    <a-card
      v-show="cardFlag"
      :bordered="false"
      class="cardbox"
      :style="styleObject"
    >
      <!-- 顶部搜索 -->
      <div class="cardbox-search">
        <!-- <a-input-search :placeholder="this.$t('others.searchPlaceHolder')" v-model="searchinput" @change="onSearch" /> -->
        <a-input-search
          placeholder="请输入关键字"
          v-model="searchinput"
          @change="onSearch"
        />
      </div>
      <!-- /顶部搜索 -->
      <div class="contbox">
        <!-- leftbox -->
        <div class="wrapbox" style="border-right: 1px solid #eee">
          <!-- 列表 -->
          <div class="checkbox">
            <a-checkbox-group
              v-model="checkedList"
              :options="showPlainOptions"
              @change="onChange"
            >
              <template slot="label" slot-scope="option">
                {{ option.name }}
              </template>
            </a-checkbox-group>
          </div>
          <!-- /列表 -->
          <!-- 保存为 -->
          <div class="inputbox" v-if="isSave">
            <a-row type="flex" align="middle">
              <a-col :span="8">
                <!-- <a-checkbox @change="handBaseCheck" v-model="checked">{{ $t('others.saveAs') }}</a-checkbox> -->
                <a-checkbox @change="handBaseCheck" v-model="checked"
                  >保存为</a-checkbox
                >
              </a-col>
              <a-col :span="14">
                <!-- <a-input :placeholder="this.$t('others.areaPlaceHolder')" :disabled="!checked" v-model="value" /> -->
                <a-input
                  placeholder="输入地区名称"
                  :disabled="!checked"
                  v-model="value"
                />
              </a-col>
            </a-row>
          </div>
          <!-- /保存为 -->
          <div class="btnbox">
            <a-row type="flex" justify="center">
              <a-col :span="5">
                <!-- <a-button type="primary" @click="handSave"> {{ $t('others.sure') }} </a-button> -->
                <a-button type="primary" @click="handSave"> 确认 </a-button>
              </a-col>
              <a-col :span="2"> </a-col>
              <a-col :span="5">
                <!-- <a-button type="primary" @click.self="handCard"> {{ $t('others.cancel') }} </a-button> -->
                <a-button type="primary" @click.self="handCard">
                  取消
                </a-button>
              </a-col>
            </a-row>
          </div>
        </div>
        <!-- /leftbox -->
        <div
          class="wrapbox small"
          v-show="previewList.length"
          style="border-right: 1px solid #eee"
        >
          <a-row type="flex" justify="space-between" align="middle">
            <a-col>已选择</a-col>
            <a-col @click.stop="handDeletePre(-1)">清除</a-col>
          </a-row>
          <a-divider style="margin: 5px 0" />
          <div class="listbox">
            <a-row
              type="flex"
              v-for="(item, index) in previewList"
              justify="space-between"
              align="middle"
              :key="index"
              style="margin-bottom: 5px"
            >
              <a-col class="ellipsis" :title="item.name">
                {{ item.name }}
              </a-col>
              <a-col>
                <a-icon @click.stop="handDeletePre(index)" type="close" />
              </a-col>
            </a-row>
          </div>
        </div>
        <!-- rightbox -->
        <div class="wrapbox small" v-show="showAreaData.length && isSave">
          <a-row type="flex" justify="space-between" align="middle">
            <a-col>已保存</a-col>
          </a-row>
          <a-divider style="margin: 5px 0" />
          <div class="listbox">
            <a-row
              type="flex"
              v-for="(item, index) in showAreaData"
              :key="index"
              justify="space-between"
              align="middle"
            >
              <a-col
                class="ellipsis"
                @click="handAreaTitle(index)"
                :title="item.title"
              >
                {{ item.title }}
              </a-col>
              <a-col>
                <a-icon @click.stop="handDelete(index)" type="close" />
              </a-col>
            </a-row>
          </div>
        </div>
        <!-- /rightbox -->
      </div>
    </a-card>
  </div>
</template>
<script>
export default {
  name: "MjCountry",
  // 组件接收数据
  props: {
    plainOptions: {
      type: Array,
      default() {
        return [];
      },
      required: true,
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
      checkedList: [], // 默认设置需要选中的值
      saveCheckedList: [], // 最近一次选中的值
      indeterminate: false, // 全选不存在默认选中时设置false 否则设置true
      checkAll: false,
      showPlainOptions: [], // 传递过来的数据
      showAreaData: [], // 已保存过的数据
      searchinput: null, // 搜索框输入的值
      data: [], // 保存的地区
      value: null, // 保存列表名称
      checked: false, // 保存勾选状态
      previewList: [], // 预览数据
    };
  },
  // 实例化初始化完成
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
    // 点击区域名称回调
    handAreaTitle(index) {
      // 设置勾选
      this.checkedList = [].concat(this.areaData[index].list);
      this.onChange(this.checkedList);
    },
    // 给document绑定点击事件
    click(e) {
      const _this = this;
      if (_this.$refs.country && _this.$refs.country.contains(e.target)) {
        return;
      }
      _this.checkedList = [];
      _this.cardFlag =
        _this.indeterminate =
        _this.checkAll =
        _this.checked =
          false;
    },
    // 弹窗显示隐藏控制
    handCard() {
      if (!this.initFlag) {
        // 检测组件距离浏览器左侧位置
        this.initFlag = !this.initFlag;
        document.body.clientWidth -
          this.$refs.country.getBoundingClientRect().left >
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
        this.onChange(this.checkedList);
      }
      this.searchinput = "";
      this.onSearch();
    },
    // 删除
    handDelete(index) {
      // 调用父组件方法 更新areaData 数据
      this.fnDelete({
        id: this.areaData[index].id,
        index,
      });
    },
    // 保存
    handSave() {
      if (this.checked) {
        // 勾选状态下
        if (!this.value) {
          this.$message.info("请输入地区名称");
          return;
        }
        if (!this.checkedList.length) {
          this.$message.info("请勾选地区名称");
          return;
        }
        if (
          this.areaData.some((item) => {
            return item.title === this.value;
          })
        ) {
          this.$message.info("地区名称不能重复");
          return;
        }
        this.fnSave({
          title: this.value,
          list: this.checkedList,
        });
        this.checked = false;
        this.value = "";
      } else {
        this.fnSureClick(this.checkedList); // 返回选中的数组
        this.saveCheckedList = [].concat(this.checkedList); // 临时存储最近一次选中的值
      }
      this.checkNumber = this.checkedList.length;
      this.handCard();
    },
    // 地区保存为chexkbox
    handBaseCheck(e) {
      this.checked = e.target.checked;
    },
    // 快捷搜索
    onSearch() {
      if (this.searchinput) {
        this.showPlainOptions = this.showPlainOptions.filter((o) => {
          return o.name.includes(this.searchinput);
        });
      } else {
        this.showPlainOptions = [].concat(this.plainOptions);
      }
    },
    // 地区勾选
    onChange(checkedList) {
      this.indeterminate =
        !!checkedList.length && checkedList.length < this.plainOptions.length;
      this.checkAll = checkedList.length === this.plainOptions.length;
      // 先删除
      const _previewList = this.previewList.filter((item) => {
        return this.showPlainOptions.every((m) => {
          return m.value !== item.value;
        });
      });
      const list = this.showPlainOptions.filter((item) => {
        return checkedList.indexOf(item.value) > -1;
      });
      this.previewList = [].concat(this.unique(_previewList.concat(list)));
      this.checkedList = this.previewList.map((item) => {
        return item.value;
      });
    },
    // 数组去重
    unique(arr) {
      const res = new Map();
      return arr.filter((a) => !res.has(a) && res.set(a, 1));
    },
    // 删除预览
    handDeletePre(index) {
      if (index > -1) {
        this.checkedList.splice(index, 1);
        this.previewList.splice(index, 1);
      } else {
        this.checkedList = [];
        this.previewList = [];
      }
    },
    // 全选
    onCheckAllChange(e) {
      const _this = this;
      Object.assign(this, {
        checkedList: e.target.checked
          ? _this.plainOptions.map((item) => {
              return item.value;
            })
          : [],
        indeterminate: false,
      });
    },
  },
  /**
   * 监听当前日期默认日期改变触发
   */
  watch: {
    plainOptions: {
      immediate: true,
      handler(n) {
        this.showPlainOptions = [].concat(n);
      },
    },
    areaData: {
      immediate: true,
      handler(n) {
        this.showAreaData = [].concat(n);
      },
    },
  },
};
</script>
<style lang="less" scoped>
.countryBox {
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
          min-width: 300px;
          &.small {
            min-width: 220px;
            padding: 10px;
          }
          .checkbox {
            min-width: 300px;
            height: 166px;
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
            height: 240px;
            // margin: 10px;
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
            .ant-row-flex {
              margin-bottom: 10px;
            }
            .ellipsis {
              width: 160px;
              text-align: left;
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
