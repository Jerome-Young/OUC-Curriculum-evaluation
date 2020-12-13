var app = getApp()
Page({
  data: {
    userInfo: {},
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    onOff: '',
    imgUrls: [
      'https://s1.ax1x.com/2020/11/07/B54XYF.jpg',
      'https://s1.ax1x.com/2020/11/07/B5q4r4.jpg',
      'https://s1.ax1x.com/2020/11/07/B5LyOe.jpg'
    ],
    
    functions: [
      {
        "name": "公共基础",
        "pic_url": '../../images/1.jpg'
      },
      {
        "name": "通识选修",
        "pic_url": '../../images/2.jpg'
      },
      {
        "name": "专业素养",
        "pic_url": '../../images/3.jpg'
      },
      {
        "name": "培养方案",
        "pic_url": '../../images/4.jpg'
      },
      {
        "name": "通识模块",
        "pic_url": '../../images/5.jpg'
      },
      {
        "name": "用户反馈",
        "pic_url": '../../images/6.jpg'
      }
    ]
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
// 点击事件
  imgclick_0(){
    wx.navigateTo({
      url: '/pages/pub_basic/pub_basic',
    })
  },
  imgclick_1(){
    wx.navigateTo({
      url: '/pages/gen_ elective/gen_elective',
    })
  },
  imgclick_2(){
    wx.navigateTo({
      url: '/pages/profession/profession',
    })
  },
  imgclick_3(){
    wx.navigateTo({
      url: '/pages/dev_program/dev_program',
    })
  },
  imgclick_4(){
    wx.navigateTo({
      url: '/pages/gen_model/gen_model',
    })
  },
  imgclick_5(){
    wx.navigateTo({
      url: '/pages/user_feedback/user_feedback',
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    // app.getUserInfo(function (userInfo) {
    //   //更新数据
    //   that.setData({
    //     userInfo: userInfo
    //   })
    //   that.update()
    // })
  }
})