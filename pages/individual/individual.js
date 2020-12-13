const db=wx.cloud.database()//数据库初始化
var app = getApp()

Page({
  data: {
    items: [{
      name: '1',
      checked: false,
      value: '记住密码'
    }],//记住密码的复选框
    isrememberpass: '',//是否记住密码
    account: '',//用户名
    password: '',//密码
    login:false,
    userListInfo: [{
      icon: "../../images/pinglun.png",
      text: '我的评论',
      url: '/pages/personal/my_comment/my_comment'
    },{
      icon: "../../images/xiaoxi.png",
      text: '消息',
      url: '/pages/personal/news/news'
    },{
      icon: "../../images/lianxiwomen.png",
      text: '联系我们',
      url: '/pages/personal/contact_us/contact_us'
    },{
      icon: "../../images/shezhi.png",
      text: '设置',
      url: '/pages/personal/install/install'
    }],
    head_image: '../../images/默认头像.jpg',
    showModal: false,
    head_name: '小海'
  },

// 获取输入账号
  accountInput :function (e) {
    this.setData({
      account: e.detail.value
    })
  },
 
// 获取输入密码
  passwordInput :function (e) {
    this.setData({
      password: e.detail.value
    })
  },
 
// 登录
  bindGetUserInfo: function(e) {
    if (e.detail.userInfo) {
      //用户按了允许授权按钮
      wx.showLoading({
        title: 'loading...',
      })
      if (this.data.account == '') {
        wx.showToast({
          title: '账号或手机号不能为空',
          icon: 'none',
          duration: 2000
        })
      } else if (this.data.password == '') {
        wx.showToast({
          title: '密码不能为空',
          icon: 'none',
          duration: 2000
        })
      } else {
        var that = this
        // 登录接口
        var parame = {}
        // 此处要先判断你输入的是用户名还是手机号，用户名就要用户名的字段去查，手机号就要使用手机号的字段去查
        if (!(/^1[3456789]\d{9}$/.test(this.data.account))) {//验证手机号码是否正确的正则表达式
          // 不是手机号，说明是输入的用户名
          parame = {
            account: this.data.account
          }
        } else {
          // 输入的手机号
          parame = {
            mobile: this.data.account
          }
        }
        db.collection('user').where(parame)//查询语句
          .get({
            success: function(res) {
              wx:wx.hideLoading();
              if (res.data == '') {//为空说明没有查到数据
                wx.showToast({
                  title: '用户不存在',
                  icon: 'none',
                  duration: 3000
                })
              } else {//不为空说明查询到数据了
                if (res.data[0].password == that.data.password) {//查询到数据后再判断用户输入的密码是否正确
                  wx.showToast({
                    title: '登录成功',
                    icon: 'none',
                    duration: 3000
                  })
                  if (that.data.isrememberpass != '') { //判断用户是否勾选了记住密码
                    // 勾选了则存储到本地缓存
                    wx.setStorage({
                      key: 'password',
                      data: that.data.password,
                    })
                  } else { //不记住密码，删除缓存
                    wx.removeStorage({
                      key: 'password',
                      success: function(res) {},
                    })
                  }
                  wx.setStorage({ //存储用户名
                    key: 'account',
                    data: that.data.account,
                  })
                  wx.setStorage({//存储用户的信息id，作为userId
                    key: 'userId',
                    data: res.data[0]._id,
                  })
                  // 显示登陆成功后的页面样式
                  that.setData({
                    login: true,
                    head_name: res.data[0].head_name,
                    head_image: res.data[0].head_image
                  })
                  // 登录状态传递给app.js
                  app.user_login = that.data
                }else{
                  wx.showToast({
                    title: '密码错误',
                    icon: 'none',
                    duration: 3000
                  })
                }
                that.setData({
                  head_image: app.user_login.head_image,
                  head_name: app.user_login.head_name
                })
              }
            }
          })
      }
    } else {
      //用户按了拒绝按钮
      wx.showModal({
        title: '警告',
        content: '您点击了拒绝授权，将无法进行账号登录，请授权之后再登录!!!',
        showCancel: false,
        confirmText: '返回授权',
        success: function(res) {}
      })
    }
  },

  // 记住密码复选框
  checkboxChange: function(e) {
    this.setData({
      isrememberpass: e.detail.value
    })
  },

  register(){
    wx.navigateTo({
      url: '/pages/register/register',
    })
  },

  onLoad: function(){
    var that = this
    wx.getUserInfo(function(userInfo){
      userInfo: userInfo
    })
  },

  //点击事件 
  click_personal(e){
    wx.navigateTo({
      url: e.currentTarget.dataset.go
    })
  },
  // 注销
  click_zhuxiao(){
    wx.showToast({
      title: '注销成功',
      icon: 'none',
      duration: 2000
    })
    this.setData({
      login: false,
      password: '',
      account: ''
    })
    app.user_login = ''
  },


})