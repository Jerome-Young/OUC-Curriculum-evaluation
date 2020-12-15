// pages/gen_elective/gen_elective.js
const db=wx.cloud.database()//数据库初始化
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
    Teacher:""

  },
click(e){
wx.navigateTo({
  url: '/pages/detail/detail?teacher='+e.currentTarget.dataset.teacher+'&classname='+e.currentTarget.dataset.classname,
})
},
    //查询
    Submit2(res){
      var VLU=res.detail.value   
      if(VLU=='') VLU="None"
      db.collection("class")
        .where(//查询指令 条件筛选用where
          db.command.or([
            {
              classname:db.RegExp({
                regexp:VLU,
                options:'i',
              }),
            },
            {
              teacher:db.RegExp({
                regexp:VLU,
                options:'i',
            })
            }
          ])
        )
        .get()//获取数据
        .then(res=>{//then可以让回调函数呈链式分布
          console.log(res)
          this.setData({
            Teacher:res.data
          })
        })
        if(VLU==null){
          this.setData({
            Teacher:null
          })
        }
    }
,
// 获取滚动条当前位置
onPageScroll: function (e) {
  console.log(e)
  if (e.scrollTop > 100) {
    this.setData({
      floorstatus: true
    });
  } else {
    this.setData({
      floorstatus: false
    });
  }
},

//回到顶部
goTop: function (e) {  // 一键回到顶部
  if (wx.pageScrollTo) {
    wx.pageScrollTo({
      scrollTop: 0
    })
  } else {
    wx.showModal({
      title: '提示',
      content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
    })
  }
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})