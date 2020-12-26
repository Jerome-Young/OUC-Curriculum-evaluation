const db=wx.cloud.database()//数据库初始化
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [{
      name: '1',
      checked: true,
      value: '显示密码'
    }],//复选框
    old_text:'若包含字母，请注意区分大小写',
    new_text:'8-16位，且由字母，数字或下划线组成',
    show:false,
    old_password:'',
    new_password:''
  },

  // 显示密码
  isshowpas:function(e){
    if(e.detail.value==1){
      this.setData({
        show: false
      })
    }else{
      this.setData({
        show: true
      })
    }
  },

  old_password:function(e){
    this.setData({
      old_password: e.detail.value
    })
  },

  new_password:function(e){
    this.setData({
      new_password: e.detail.value
    })
  },

  passchange:function(e){
    var that=this
    var pattern = /^[\w_]{8,16}$/;//密码正则
    if(that.data.old_password===''){
      wx.showToast({
        title: '请输入旧密码！',
        icon: 'none',
        duration: 2000
      })
    }else if(that.data.old_password!==app.user_login.password){
      wx.showToast({
        title: '旧密码输入不正确！',
        icon: 'none',
        duration: 2000
      })
    }else if(that.data.new_password===''){
      wx.showToast({
        title: '请输入新密码！',
        icon: 'none',
        duration: 2000
      })
    }else if(!pattern.test(that.data.new_password)){
      wx.showToast({
        title: '密码长度必须为8-16位，并且由字母，数字或下划线组成',
        icon: 'none',
        duration: 3000
      })
    }else if(that.data.new_password===that.data.old_password){
      wx.showToast({
        title: '新密码不能与旧密码一致！',
        icon: 'none',
        duration: 3000
      })
    }else{
      console.log(app.user_login._id)
      db.collection('user').where({
        _id:app.user_login._id
      })
      .update({
        data:{
          password: that.data.new_password
        },
        success: res => {
          app.user_login.password = that.data.new_password
          wx.navigateBack({
            delta: 1,
          })
        }
      })
    }
  },

  /*
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