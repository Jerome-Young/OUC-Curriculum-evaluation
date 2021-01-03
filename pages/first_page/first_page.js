var app = getApp()
const db=wx.cloud.database()//数据库初始化
Page({
  data: {
    userInfo: {},
    sortclass:'',
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
        "pic_url": 'cloud://test-env-8ger46eu356799f7.7465-test-env-8ger46eu356799f7-1304156061/程序配置图片/1.png'
      },
      {
        "name": "通识选修",
        "pic_url": 'cloud://test-env-8ger46eu356799f7.7465-test-env-8ger46eu356799f7-1304156061/程序配置图片/2.png'
      },
      {
        "name": "专业素养",
        "pic_url": 'cloud://test-env-8ger46eu356799f7.7465-test-env-8ger46eu356799f7-1304156061/程序配置图片/3.png'
      },
      {
        "name": "培养方案",
        "pic_url": 'cloud://test-env-8ger46eu356799f7.7465-test-env-8ger46eu356799f7-1304156061/程序配置图片/4.png'
      },
      {
        "name": "通识模块",
        "pic_url": 'cloud://test-env-8ger46eu356799f7.7465-test-env-8ger46eu356799f7-1304156061/程序配置图片/5.png'
      },
      {
        "name": "用户反馈",
        "pic_url": 'cloud://test-env-8ger46eu356799f7.7465-test-env-8ger46eu356799f7-1304156061/程序配置图片/6.png'
      }
    ],
    lovenum:0
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
      url: '/pages/gen_elective/gen_elective',
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
  hotsea(e){
    wx.navigateTo({
      url: '/pages/detail/detail?id='+e.currentTarget.dataset.id+'&starid='+e.currentTarget.dataset.starid+'&peoplenum='+e.currentTarget.dataset.people+'&lovenum='+e.currentTarget.dataset.love,
    })
  },
  onLoad: function () {

  },
  onShow:function(){
    db.collection("class")
    .orderBy(//orderBy进行排序
      'love','desc')
    .get()//获取数据
    .then(res=>{//then可以让回调函数呈链式分布
      this.setData({
        sortclass:res.data,
      })
    })
  }
})