"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      // 基础表单数据
      baseFormData: {
        name: "",
        age: "",
        introduction: "",
        sex: 2,
        hobby: [5],
        datetimesingle: 1627529992399
      },
      // 表单数据
      alignmentFormData: {
        name: "",
        age: ""
      },
      // 单选数据源
      sexs: [{
        text: "男",
        value: 0
      }, {
        text: "女",
        value: 1
      }, {
        text: "保密",
        value: 2
      }],
      // 多选数据源
      hobbys: [{
        text: "跑步",
        value: 0
      }, {
        text: "游泳",
        value: 1
      }, {
        text: "绘画",
        value: 2
      }, {
        text: "足球",
        value: 3
      }, {
        text: "篮球",
        value: 4
      }, {
        text: "其他",
        value: 5
      }],
      // 分段器数据
      current: 0,
      items: ["左对齐", "顶部对齐"],
      // 校验表单数据
      valiFormData: {
        name: "",
        age: "",
        introduction: ""
      },
      // 校验规则
      rules: {
        name: {
          rules: [{
            required: true,
            errorMessage: "姓名不能为空"
          }]
        },
        age: {
          rules: [{
            required: true,
            errorMessage: "年龄不能为空"
          }, {
            format: "number",
            errorMessage: "年龄只能输入数字"
          }]
        }
      },
      // 自定义表单数据
      customFormData: {
        name: "",
        age: "",
        hobby: []
      },
      // 自定义表单校验规则
      customRules: {
        name: {
          rules: [{
            required: true,
            errorMessage: "姓名不能为空"
          }]
        },
        age: {
          rules: [{
            required: true,
            errorMessage: "年龄不能为空"
          }]
        },
        hobby: {
          rules: [
            {
              format: "array"
            },
            {
              validateFunction: function(rule, value, data, callback) {
                if (value.length < 2) {
                  callback("请至少勾选两个兴趣爱好");
                }
                return true;
              }
            }
          ]
        }
      },
      dynamicFormData: {
        email: "",
        domains: {}
      },
      dynamicLists: [],
      dynamicRules: {
        email: {
          rules: [{
            required: true,
            errorMessage: "域名不能为空"
          }, {
            format: "email",
            errorMessage: "域名格式错误"
          }]
        }
      },
      sourceType: ["album", "camera"],
      imageStyles: {
        width: 64,
        height: 64,
        border: {
          radius: "50%"
        }
      },
      listStyles: {
        // 是否显示边框
        border: true,
        // 是否显示分隔线
        dividline: true,
        // 线条样式
        borderStyle: {
          width: 1,
          color: "blue",
          style: "dashed",
          radius: 2
        }
      },
      fileLists: [{
        url: "https://web-assets.dcloud.net.cn/unidoc/zh/shuijiao-small.jpg",
        extname: "png",
        name: "shuijiao.png"
      }, {
        url: "https://web-assets.dcloud.net.cn/unidoc/zh/shuijiao-small.jpg",
        extname: "png",
        name: "uniapp-logo.png"
      }, {
        url: "https://web-assets.dcloud.net.cn/unidoc/zh/shuijiao-small.jpg",
        extname: "png",
        name: "shuijiao.png"
      }]
    };
  },
  computed: {
    // 处理表单排列切换
    alignment() {
      if (this.current === 0)
        return "left";
      if (this.current === 1)
        return "top";
      return "left";
    }
  },
  onLoad() {
  },
  onReady() {
    this.$refs.customForm.setRules(this.customRules);
  },
  methods: {
    onClickItem(e) {
      console.log(e);
      this.current = e.currentIndex;
    },
    add() {
      this.dynamicLists.push({
        label: "域名",
        rules: [{
          "required": true,
          errorMessage: "域名项必填"
        }],
        id: Date.now()
      });
    },
    del(id) {
      let index = this.dynamicLists.findIndex((v) => v.id === id);
      this.dynamicLists.splice(index, 1);
    },
    submit(ref) {
      this.$refs[ref].validate().then((res) => {
        console.log("success", res);
        common_vendor.index.showToast({
          title: `校验通过`
        });
      }).catch((err) => {
        console.log("err", err);
      });
    },
    switch2Change: function(e) {
      console.log("switch2 发生 change 事件，携带值为", e.detail.value);
    }
  }
};
if (!Array) {
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_data_checkbox2 = common_vendor.resolveComponent("uni-data-checkbox");
  const _easycom_uni_datetime_picker2 = common_vendor.resolveComponent("uni-datetime-picker");
  const _easycom_uni_file_picker2 = common_vendor.resolveComponent("uni-file-picker");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  const _easycom_uni_segmented_control2 = common_vendor.resolveComponent("uni-segmented-control");
  (_easycom_uni_card2 + _easycom_uni_easyinput2 + _easycom_uni_forms_item2 + _easycom_uni_data_checkbox2 + _easycom_uni_datetime_picker2 + _easycom_uni_file_picker2 + _easycom_uni_forms2 + _easycom_uni_section2 + _easycom_uni_segmented_control2)();
}
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_data_checkbox = () => "../../uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox.js";
const _easycom_uni_datetime_picker = () => "../../uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.js";
const _easycom_uni_file_picker = () => "../../uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
const _easycom_uni_segmented_control = () => "../../uni_modules/uni-segmented-control/components/uni-segmented-control/uni-segmented-control.js";
if (!Math) {
  (_easycom_uni_card + _easycom_uni_easyinput + _easycom_uni_forms_item + _easycom_uni_data_checkbox + _easycom_uni_datetime_picker + _easycom_uni_file_picker + _easycom_uni_forms + _easycom_uni_section + _easycom_uni_segmented_control)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      ["is-shadow"]: false,
      ["is-full"]: true
    }),
    b: common_vendor.o(($event) => $data.baseFormData.name = $event),
    c: common_vendor.p({
      placeholder: "请输入姓名",
      modelValue: $data.baseFormData.name
    }),
    d: common_vendor.p({
      label: "姓名",
      required: true
    }),
    e: common_vendor.o(($event) => $data.baseFormData.age = $event),
    f: common_vendor.p({
      placeholder: "请输入年龄",
      modelValue: $data.baseFormData.age
    }),
    g: common_vendor.p({
      label: "年龄",
      required: true
    }),
    h: common_vendor.o(($event) => $data.baseFormData.sex = $event),
    i: common_vendor.p({
      localdata: $data.sexs,
      modelValue: $data.baseFormData.sex
    }),
    j: common_vendor.p({
      label: "性别",
      required: true
    }),
    k: common_vendor.o(($event) => $data.baseFormData.hobby = $event),
    l: common_vendor.p({
      multiple: true,
      localdata: $data.hobbys,
      modelValue: $data.baseFormData.hobby
    }),
    m: common_vendor.p({
      label: "兴趣爱好",
      required: true
    }),
    n: common_vendor.o(($event) => $data.baseFormData.introduction = $event),
    o: common_vendor.p({
      type: "textarea",
      placeholder: "请输入自我介绍",
      modelValue: $data.baseFormData.introduction
    }),
    p: common_vendor.p({
      label: "自我介绍"
    }),
    q: common_vendor.o(($event) => $data.baseFormData.datetimesingle = $event),
    r: common_vendor.p({
      type: "datetime",
      ["return-type"]: "timestamp",
      modelValue: $data.baseFormData.datetimesingle
    }),
    s: common_vendor.p({
      label: "日期时间"
    }),
    t: common_vendor.p({
      limit: "3",
      title: "最多选择3张图片"
    }),
    v: common_vendor.p({
      label: "图片上传"
    }),
    w: common_vendor.o((...args) => $options.switch2Change && $options.switch2Change(...args)),
    x: common_vendor.p({
      label: "是否匿名"
    }),
    y: common_vendor.sr("baseForm", "64b487d2-2,64b487d2-1"),
    z: common_vendor.p({
      modelValue: $data.baseFormData
    }),
    A: common_vendor.p({
      title: "基本用法",
      type: "line"
    }),
    B: common_vendor.o($options.onClickItem),
    C: common_vendor.p({
      current: $data.current,
      values: $data.items,
      styleType: "button"
    }),
    D: common_vendor.o(($event) => $data.baseFormData.name = $event),
    E: common_vendor.p({
      placeholder: "请输入姓名",
      modelValue: $data.baseFormData.name
    }),
    F: common_vendor.p({
      label: "姓名",
      required: true
    }),
    G: common_vendor.o(($event) => $data.baseFormData.age = $event),
    H: common_vendor.p({
      placeholder: "请输入年龄",
      modelValue: $data.baseFormData.age
    }),
    I: common_vendor.p({
      label: "年龄",
      required: true
    }),
    J: common_vendor.sr("baseForm", "64b487d2-20,64b487d2-18"),
    K: common_vendor.p({
      modelValue: $data.alignmentFormData,
      ["label-position"]: $options.alignment
    }),
    L: common_vendor.p({
      title: "对齐方式",
      type: "line"
    }),
    M: common_vendor.o(($event) => $data.valiFormData.name = $event),
    N: common_vendor.p({
      placeholder: "请输入姓名",
      modelValue: $data.valiFormData.name
    }),
    O: common_vendor.p({
      label: "姓名",
      required: true,
      name: "name"
    }),
    P: common_vendor.o(($event) => $data.valiFormData.age = $event),
    Q: common_vendor.p({
      placeholder: "请输入年龄",
      modelValue: $data.valiFormData.age
    }),
    R: common_vendor.p({
      label: "年龄",
      required: true,
      name: "age"
    }),
    S: common_vendor.o(($event) => $data.valiFormData.introduction = $event),
    T: common_vendor.p({
      type: "textarea",
      placeholder: "请输入自我介绍",
      modelValue: $data.valiFormData.introduction
    }),
    U: common_vendor.p({
      label: "自我介绍",
      name: "introduction"
    }),
    V: common_vendor.sr("valiForm", "64b487d2-26,64b487d2-25"),
    W: common_vendor.p({
      rules: $data.rules,
      modelValue: $data.valiFormData
    }),
    X: common_vendor.o(($event) => $options.submit("valiForm")),
    Y: common_vendor.p({
      title: "表单校验",
      type: "line"
    }),
    Z: common_vendor.o(($event) => $data.customFormData.name = $event),
    aa: common_vendor.p({
      placeholder: "请输入姓名",
      modelValue: $data.customFormData.name
    }),
    ab: common_vendor.p({
      label: "姓名",
      required: true,
      name: "name"
    }),
    ac: common_vendor.o(($event) => $data.customFormData.age = $event),
    ad: common_vendor.p({
      placeholder: "请输入年龄",
      modelValue: $data.customFormData.age
    }),
    ae: common_vendor.p({
      label: "年龄",
      required: true,
      name: "age"
    }),
    af: common_vendor.o(($event) => $data.customFormData.hobby = $event),
    ag: common_vendor.p({
      multiple: true,
      localdata: $data.hobbys,
      modelValue: $data.customFormData.hobby
    }),
    ah: common_vendor.p({
      label: "兴趣爱好",
      required: true,
      name: "hobby"
    }),
    ai: common_vendor.sr("customForm", "64b487d2-34,64b487d2-33"),
    aj: common_vendor.p({
      rules: $data.customRules,
      modelValue: $data.customFormData
    }),
    ak: common_vendor.o(($event) => $options.submit("customForm")),
    al: common_vendor.p({
      title: "自定义校验规则",
      type: "line"
    }),
    am: common_vendor.o(($event) => $data.dynamicFormData.email = $event),
    an: common_vendor.p({
      placeholder: "请输入姓名",
      modelValue: $data.dynamicFormData.email
    }),
    ao: common_vendor.p({
      label: "邮箱",
      required: true,
      name: "email"
    }),
    ap: common_vendor.f($data.dynamicLists, (item, index, i0) => {
      return {
        a: "64b487d2-46-" + i0 + "," + ("64b487d2-45-" + i0),
        b: common_vendor.o(($event) => $data.dynamicFormData.domains[item.id] = $event, item.id),
        c: common_vendor.p({
          placeholder: "请输入域名",
          modelValue: $data.dynamicFormData.domains[item.id]
        }),
        d: common_vendor.o(($event) => $options.del(item.id), item.id),
        e: item.id,
        f: "64b487d2-45-" + i0 + ",64b487d2-42",
        g: common_vendor.p({
          label: item.label + " " + index,
          required: true,
          rules: item.rules,
          name: "domains[" + item.id + "]"
        })
      };
    }),
    aq: common_vendor.sr("dynamicForm", "64b487d2-42,64b487d2-41"),
    ar: common_vendor.p({
      rules: $data.dynamicRules,
      modelValue: $data.dynamicFormData
    }),
    as: common_vendor.o((...args) => $options.add && $options.add(...args)),
    at: common_vendor.o(($event) => $options.submit("dynamicForm")),
    av: common_vendor.p({
      title: "动态表单",
      type: "line"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "F:/Users/Administrator/Desktop/suggestion/pages/comment/comment.vue"]]);
wx.createPage(MiniProgramPage);
