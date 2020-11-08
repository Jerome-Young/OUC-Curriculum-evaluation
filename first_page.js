var app = getApp()
Page({
  data: {
    userInfo: {},
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    imgUrls: [
      'https://s1.ax1x.com/2020/11/07/B54XYF.jpg',
      'https://s1.ax1x.com/2020/11/07/B5q4r4.jpg',
      'https://s1.ax1x.com/2020/11/07/B5LyOe.jpg'
    ],
    
    functions: [
      {
        "name": "公共基础",
        "pic_url": '../../images/1.png'
      },
      {
        "name": "通识选修",
        "pic_url": '../../images/2.png'
      },
      {
        "name": "专业素养",
        "pic_url": '../../images/5.png'
      },
      {
        "name": "培养方案",
        "pic_url": '../../images/4.png'
      },
      {
        "name": "通识模块",
        "pic_url": '../../images/3.png'
      },
      {
        "name": "用户反馈",
        "pic_url": '../../images/6.png'
      }
    ]
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
      that.update()
    })
  }
})