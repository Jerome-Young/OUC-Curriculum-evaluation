// pages/detail/detail.js
const db=wx.cloud.database()//数据库初始化
Page({

  /**
   * 页面的初始数据
   */
  data: {
classname:"",
teacher:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    console.log(e)
    let that=this;
this.data.classname=e.classname;
this.data.teacher=e.teacher;
    db.collection("class")
    .where({//查询指令 条件筛选用where
      classname:this.data.classname,
      teacher:this.data.teacher
    })
    .get()//获取数据
    .then(res=>{//then可以让回调函数呈链式分布
      console.log(res)
      this.setData({
        Teacher:res.data
      })
    })
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