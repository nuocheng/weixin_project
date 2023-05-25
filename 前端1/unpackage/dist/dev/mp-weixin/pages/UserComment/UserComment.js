"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      // 校验规则
      // rules: {
      // 	name: {
      // 		rules: [{
      // 			required: true,
      // 			errorMessage: '姓名不能为空'
      // 		}]
      // 	},
      // 	title: {
      // 		rules: [{
      // 			required: true,
      // 			errorMessage: '标题不能为空'
      // 		}]
      // 	},
      // 	comment: {
      // 		rules: [{
      // 			required: true,
      // 			errorMessage: '正文内容不能为空'
      // 		}]
      // 	}
      // },
      // 自定义表单数据
      customFormData: {
        name: "",
        number_id: "",
        title: "",
        content: "",
        image:[],
        flag: 1
      },
      // 自定义表单校验规则
      customRules: {
        name: {
          rules: [{
            required: true,
            errorMessage: "姓名不能为空"
          }]
        },
        title: {
          rules: [{
            required: true,
            errorMessage: "标题不能为空"
          }]
        },
        content: {
          rules: [{
            required: true,
            errorMessage: "正文内容不能为空"
          }]
        }
      }
    };
  },
  onLoad() {
  },
  onReady() {
    this.$refs.customForm.setRules(this.customRules);
  },
  methods: {
    // onClickItem(e) {
    // 	console.log(e);
    // 	this.current = e.currentIndex
    // },
    // add() {
    // 	this.dynamicLists.push({
    // 		label: '域名',
    // 		rules: [{
    // 			'required': true,
    // 			errorMessage: '域名项必填'
    // 		}],
    // 		id: Date.now()
    // 	})
    // },
    // del(id) {
    // 	let index = this.dynamicLists.findIndex(v => v.id === id)
    // 	this.dynamicLists.splice(index, 1)
    // },
    submit(ref) {
      this.$refs[ref].validate().then((res) => {
        console.log(res);
        wx.request({
          url:"http://47.115.207.176/add_info/",
          method:'POST',
          data:res,
          header: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          success(res){
            if(res.data.flag==1){
              common_vendor.index.navigateTo({
                url: "/pages/Success/Success"
              });
            }
          },
          fail(err){
            console.log(res)
          }
          
        })
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
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_file_picker2 = common_vendor.resolveComponent("uni-file-picker");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_easyinput2 + _easycom_uni_forms_item2 + _easycom_uni_file_picker2 + _easycom_uni_forms2)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_file_picker = () => "../../uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_forms_item + _easycom_uni_file_picker + _easycom_uni_forms)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $data.customFormData.name = $event),
    b: common_vendor.p({
      placeholder: "请输入姓名",
      modelValue: $data.customFormData.name
    }),
    c: common_vendor.p({
      label: "姓名",
      required: true,
      name: "name",
      ["label-width"]: "50"
    }),
    d: common_vendor.o(($event) => $data.customFormData.number_id = $event),
    e: common_vendor.p({
      placeholder: "请输入工号,非必填选项",
      modelValue: $data.customFormData.number_id
    }),
    f: common_vendor.p({
      label: "工号",
      required: true,
      name: "number_id",
      ["label-width"]: "50"
    }),
    g: common_vendor.o(($event) => $data.customFormData.title = $event),
    h: common_vendor.p({
      placeholder: "请输入标题",
      modelValue: $data.customFormData.title
    }),
    i: common_vendor.p({
      label: "标题",
      required: true,
      name: "title",
      ["label-width"]: "50"
    }),
    j: common_vendor.o(($event) => $data.customFormData.content = $event),
    k: common_vendor.p({
      type: "textarea",
      placeholder: "请输入意见正文",
      modelValue: $data.customFormData.content
    }),
    l: common_vendor.p({
      required: true,
      name: "content"
    }),
    m: common_vendor.p({
      limit: "3",
      title: " "
    }),
    n: common_vendor.o(($event) => $data.customFormData.image = $event),
    o: common_vendor.p({
      label: "图片上传",
      ["label-width"]: "50",
      modelValue: $data.customFormData.image
    }),
    p: common_vendor.o((...args) => $options.switch2Change && $options.switch2Change(...args)),
    q: common_vendor.o(($event) => $data.customFormData.flag = $event),
    r: common_vendor.p({
      label: "是否匿名",
      required: true,
      name: "flag",
      ["label-width"]: "50",
      modelValue: $data.customFormData.flag
    }),
    s: common_vendor.sr("customForm", "b479c908-0"),
    t: common_vendor.p({
      rules: _ctx.customForm,
      modelValue: $data.customFormData,
      ["label-position"]: _ctx.left
    }),
    v: common_vendor.o(($event) => $options.submit("customForm"))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "F:/Users/Administrator/Desktop/suggestion/pages/UserComment/UserComment.vue"]]);
wx.createPage(MiniProgramPage);
