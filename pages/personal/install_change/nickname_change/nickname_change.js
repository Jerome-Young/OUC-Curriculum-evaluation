var app=getApp()
const db=wx.cloud.database()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickname:'小海',
    nickname_change:'',
    change:true,
    fileID:'',
    isnicknamerep:false
  },

  NicknameInput :function (e) {
    this.setData({
      nickname_change: e.detail.value
    })
    if(e.detail.value != this.data.nickname){
      this.setData({
        change: false
      })
    }else if(e.detail.value == this.data.nickname){
      this.setData({
        change: true
      })
    }
  },


  restore :function(){
    if (this.data.nickname_change == '') {
      wx.showToast({
        title: '昵称不能设置为空',
        icon: 'none',
        duration: 2000
      })
    }else if (this.data.nickname_change.length >= 7){
      wx.showToast({
        title: '昵称超出最大限度',
        icon: 'none',
        duration: 2000
      })
    }else{
      var that =this
      db.collection('user')
      .where({
        head_name: that.data.nickname_change
      })
      .get({
        success: function (isnicknamerep) {
          if(isnicknamerep.data.length==0){
            db.collection('user')
            .where({
              _id: app.user_login._id
            })
            .update({
              data:{
                head_name: that.data.nickname_change
              },
              success: res => {
                db.collection('comment').where({
                  user_id:app.user_login._id
                })
                .update({
                  data:{
                    nickName: that.data.nickname_change
                  }
                })
                that.setData({
                  fileID: that.data.nickname_change,
                })
                app.user_login.head_name = that.data.fileID
                wx.navigateBack({
                  delta: 1,
                })
              }
            })
          }else{
            wx.showToast({
              title: '该昵称已存在，请重新输入',
              icon: 'none',
              duration: 2000
            })
          }
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    this.setData({
      nickname: app.user_login.head_name
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