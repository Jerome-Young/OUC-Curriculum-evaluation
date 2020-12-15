Page({
  data: {
  showtab: 0, //顶部选项卡索引
  tablist: {
  tabnum: 2,
  tabitem: [
  {
  "id": 0,
  "text": "评论"
  },
  {
  "id": 1,
  "text": "回复"
  }
  ]
  },
  productList: [],
  // tab切换
  currentTab: 0,
  },
  onLoad: function () {
  },
  tabset: function (e) {
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
  
  