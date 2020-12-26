var app = getApp()
const db=wx.cloud.database()

Page({
  data: {
    head_image:'cloud://test-env-8ger46eu356799f7.7465-test-env-8ger46eu356799f7-1304156061/默认头像.jpg',//默认图片，设置为空也可以
    head_name:'小海',
    mobile:'',
    password:''
  },
  onLoad: function(){
    this.setData({
      head_image: app.user_login.head_image,
      head_name: app.user_login.head_name,
      mobile: app.user_login.mobile,
    })
  },

  onShow: function(){
    this.setData({
      head_image: app.user_login.head_image,
      head_name: app.user_login.head_name,
      mobile: app.user_login.mobile,
    })
  },

  // 更改头像
  updatahead() {
    let that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        wx.showLoading({
          title: '上传中',
        });
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        let filePath = res.tempFilePaths[0];
        const name = Math.random() * 1000000;
        const cloudPath = name + filePath.match(/\.[^.]+?$/)[0]
        wx.cloud.uploadFile({
          cloudPath,//云存储图片名字
          filePath,//临时路径
          success: res => {
            console.log('[上传图片] 成功：', res)
            that.setData({
              head_image: res.fileID,//云存储图片路径,可以把这个路径存到集合，要用的时候再取出来
            });
            let fileID = res.fileID;
            //把图片存到user集合表
            db.collection("user").where({
              account:app.user_login.account
            })
            .update({
              data: {
                head_image: fileID
              },
              success: function (e) {
                wx.showToast({
                  title: '头像修改成功',
                  'icon': 'none',
                  duration: 3000
                })
                db.collection('comment').where({
                  user_id:app.user_login._id
                })
                .update({
                  data:{
                    avatarUrl: res.fileID
                  }
                })
                app.user_login.head_image = res.fileID
              },
              fail: function () {
                wx.showToast({
                  title: '图片存储失败',
                  'icon': 'none',
                  duration: 3000
                })
              }
            })
          },
          fail: e => {
            console.error('[上传图片] 失败：', e)
          },
          complete: () => {
            wx.hideLoading()
          },
          
        });
      }
    })
  },
  // 更改昵称
  updataname(){
    wx.navigateTo({
      url: '../install_change/nickname_change/nickname_change',
    })
  },
  
  updatamobile(){
    wx.navigateTo({
      url: '../install_change/mobile_change/mobile_change',
    })
  },

  updatapassword(){
    wx.navigateTo({
      url: '../install_change/password_change/password_change',
    })
  }

})