// pages/dev_program/dev_program.js
Page({
  data: {
  showtab1: 0, //顶部选项卡索引
  showtab2: 0,
  tabnav: {
  tabnum1: 5,
  tabnum2: 3,
  tabitem1: [
  {
  "id": 0,
  "text": "计算机"
  },
  {
  "id": 1,
  "text": "保密管理"
  },
  {
  "id": 2,
  "text": "电子科学"
  },
  {
  "id": 3,
  "text": "通信工程"
  },
  {
    "id": 4,
    "text": "光电信息"
  },
],
tabitem2: [
  {
    "id": 0,
    "text": "培养方案"
  },
  {
    "id": 1,
    "text": "课程先修"
  },
  {
    "id": 2,
    "text": "相关说明"
  },
  ]
  },
  productList: [],
  // tab切换
  currentTab1: 0,
  currentTab2: 0,
  },
  onLoad: function () {
  },
  setTab1: function (e) {
  var that = this
  that.setData({
  showtab1: e.currentTarget.dataset.tabindex,
  })
  if (this.data.currentTab1 === e.currentTarget.dataset.tabindex) {
  return false;
  } else {
  that.setData({
  currentTab1: e.currentTarget.dataset.tabindex,
  })
  }
  },
setTab2: function (e) {
  var that = this
  that.setData({
  showtab2: e.currentTarget.dataset.tabindex,
  })
  if (this.data.currentTab2 === e.currentTarget.dataset.tabindex) {
  return false;
  } else {
  that.setData({
  currentTab2: e.currentTarget.dataset.tabindex,
  })
  }
  },
  /**
  * 滑动切换tab
  */
 bindChange1: function (e) {
  var that = this;
  that.setData({ currentTab1: e.detail.current,showtab1: e.detail.current});
  },
  bindChange2: function (e) {
    var that = this;
    that.setData({ currentTab2: e.detail.current,showtab2: e.detail.current});
    }
}
)
