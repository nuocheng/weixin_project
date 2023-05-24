"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      // title: 'Hello'
    };
  },
  onLoad() {
  },
  methods: {
    toUserComment() {
      common_vendor.index.navigateTo({
        url: "/pages/UserComment/UserComment"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.toUserComment && $options.toUserComment(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "F:/Users/Administrator/Desktop/suggestion/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
