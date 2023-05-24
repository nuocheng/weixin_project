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
        number_id:"1232",
        title: "",
        content: "",
        image: "",
        flag: ""
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
        title: {
          rules: [{
            required: true,
            errorMessage: "标题不能为空"
          }]
        },
        number_id: {
          rules: [{
            required: true,
            errorMessage: "员工号不能为空"
          }]
        },
        comment: {
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
          url:"http://127.0.0.1:8000/add_info/",
          method:'POST',
          data:res,
          success(res){
            if(res.flag==1){
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
    name_a: common_vendor.o(($event) => $data.customFormData.name = $event),
    name_b: common_vendor.p({
      placeholder: "请输入姓名",
      modelValue: $data.customFormData.name
    }),
    name_c: common_vendor.p({
      label: "姓名",
      required: true,
      name: "name",
      ["label-width"]: "50"
    }),
    number_id_a: common_vendor.o(($event) => $data.customFormData.number_id = $event),
    number_id_b: common_vendor.p({
      placeholder: "请输入员工号",
      modelValue: $data.customFormData.number_id
    }),
    number_id_c: common_vendor.p({
      label: "工号",
      required: true,
      name: "number_id",
      ["label-width"]: "50"
    }),
    title_a: common_vendor.o(($event) => $data.customFormData.title = $event),
    title_b: common_vendor.p({
      placeholder: "请输入标题",
      modelValue: $data.customFormData.title
    }),
    title_c: common_vendor.p({
      label: "标题",
      required: true,
      name: "title",
      ["label-width"]: "50"
    }),
    content_a: common_vendor.o(($event) => $data.customFormData.content = $event),
    content_b: common_vendor.p({
      type: "textarea",
      placeholder: "请输入意见正文",
      modelValue: $data.customFormData.content
    }),
    content_c: common_vendor.p({
      limit: "3",
      title: " ",
      name:"content"
    }),
    j: common_vendor.o(($event) => $data.customFormData.image = $event),
    k: common_vendor.p({
      label: "图片上传",
      ["label-width"]: "55",
      modelValue: $data.customFormData.image
    }),
    l: common_vendor.o((...args) => $options.switch2Change && $options.switch2Change(...args)),
    m: common_vendor.o(($event) => $data.customFormData.flag = $event),
    n: common_vendor.p({ 
      label: "是否匿名",
      ["label-width"]: "55",
      modelValue: $data.customFormData.flag
    }),
    o: common_vendor.sr("customForm", "b479c908-0"),
    p: common_vendor.p({
      rules: _ctx.customForm,
      modelValue: $data.customFormData,
      ["label-position"]: _ctx.left
    }),
    q: common_vendor.o(($event) => $options.submit("customForm"))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "F:/Users/Administrator/Desktop/suggestion/pages/UserComment/UserComment.vue"]]);
wx.createPage(MiniProgramPage);
