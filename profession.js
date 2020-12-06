Page({
  data: {
    showtab: 0, //顶部选项卡索引
    tabnav: {
    tabnum: 5,
    tabitem: [
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
    "text": "电子系"
    },
    {
    "id": 3,
    "text": "海洋技术"
    },
    {
    "id": 4,
    "text": "物理系"
    },
    {
    "id": 5,
    "text": "海洋科学"
    }
    ]
  },
  productList: [],
  // tab切换
  currentTab: 0,
  },
  onLoad: function () {
  },
  setTab: function (e) {
  var that = this
  that.setData({
  showtab: e.currentTarget.dataset.tabindex
  })
  if (this.data.currentTab === e.currentTarget.dataset.tabindex) {
  return false;
  } else {
  that.setData({
  currentTab: e.currentTarget.dataset.tabindex
  })
  }
  },
  /**
  * 滑动切换tab
  */
  bindChange: function (e) {
  var that = this;
  that.setData({ currentTab: e.detail.current,
  showtab: e.detail.current});
  }
  })
  
  