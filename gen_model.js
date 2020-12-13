// pages/gen_model/gen_model.js
Page({
  data: {
    moveStartX1: 0, //起始位置
    moveSendBtnLeft1: 0, //发送按钮的left属性
    moveEndX1: 0, //结束位置
    moveStartX2: 0, //起始位置
    moveSendBtnLeft2: 0, //发送按钮的left属性
    moveEndX2: 0, //结束位置
    moveStartX3: 0, //起始位置
    moveSendBtnLeft3: 0, //发送按钮的left属性
    moveEndX3: 0, //结束位置
    moveStartX4: 0, //起始位置
    moveSendBtnLeft4: 0, //发送按钮的left属性
    moveEndX4: 0, //结束位置
    moveStartX5: 0, //起始位置
    moveSendBtnLeft5: 0, //发送按钮的left属性
    moveEndX5: 0, //结束位置
    moveStartX6: 0, //起始位置
    moveSendBtnLeft6: 0, //发送按钮的left属性
    moveEndX6: 0, //结束位置
    screenWidth: 0, //屏幕宽度
    SendBtnColor1: "#289adc",//按钮颜色
    SendBtnColor2: "#289adc",
    SendBtnColor3: "#289adc",
    SendBtnColor4: "#289adc",
    SendBtnColor5: "#289adc",
    SendBtnColor6: "#289adc",
  },
  onLoad: function () {
    var that = this;
    // 获取屏幕宽度
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          screenWidth: res.screenWidth
        })
      },
    })
  },
  //滑动一
  //开始移动
  moveSendBtnStart1: function (e) {
    console.log("start");
    console.log(e);
    this.setData({
      moveStartX1: e.changedTouches["0"].clientX
    })
  },
  //移动发送按钮
  moveSendBtn1: function (e) {
    var that = this;
    // console.log(e.touches[0]);
    var left = ((e.touches[0].clientX - that.data.moveStartX1) / (that.data.screenWidth / 750))
    console.log(left)
    if (left <= 275.5) {
      this.setData({
        moveSendBtnLeft1: left
      })
    } else {
      this.setData({
        moveSendBtnLeft1: 275.5
      })
    }
  },
  //结束移动
  moveSendBtnEnd1: function (e) {
    console.log("end");
    var that = this;
    var left = ((e.changedTouches[0].clientX - that.data.moveStartX1) / (that.data.screenWidth / 750))
    console.log(left);
    if (left < 275.5) {
      for (let i = left; i >= 0; i--) {
        that.setData({
          moveSendBtnLeft1: i
        })
      }
    } else {
      that.setData({
        moveEndX: e.changedTouches[0].clientX,
      });
      {
        wx.navigateTo({
          url: '../../pages/gen/gen',
        })
      }
      this.setData({
        moveSendBtnLeft1: 0
      })
    }
  },
   //滑动二
   //开始移动
  moveSendBtnStart2: function (e) {
    console.log("start");
    console.log(e);
    this.setData({
      moveStartX2: e.changedTouches["0"].clientX
    })
  },
  //移动发送按钮
  moveSendBtn2: function (e) {
    var that = this;
    // console.log(e.touches[0]);
    var left = ((e.touches[0].clientX - that.data.moveStartX2) / (that.data.screenWidth / 750))
    console.log(left)
    if (left <= 275.5) {
      this.setData({
        moveSendBtnLeft2: left
      })
    } else {
      this.setData({
        moveSendBtnLeft2: 275.5
      })
    }
  },
  // 结束移动
  moveSendBtnEnd2: function (e) {
    console.log("end");
    var that = this;
    var left = ((e.changedTouches[0].clientX - that.data.moveStartX2) / (that.data.screenWidth / 750))
    console.log(left);
    if (left < 275.5) {
      for (let i = left; i >= 0; i--) {
        that.setData({
          moveSendBtnLeft2: i
        })
      }
    } else {
      that.setData({
        moveEndX2: e.changedTouches[0].clientX,
      });
      {
        wx.navigateTo({
          url: '../../pages/gen/gen',
        })
      }
      this.setData({
        moveSendBtnLeft2: 0
      })
    }
  },
  //滑动三
  //开始移动
  moveSendBtnStart3: function (e) {
    console.log("start");
    console.log(e);
    this.setData({
      moveStartX3: e.changedTouches["0"].clientX
    })
  },
  //移动发送按钮
  moveSendBtn3: function (e) {
    var that = this;
    // console.log(e.touches[0]);
    var left = ((e.touches[0].clientX - that.data.moveStartX3) / (that.data.screenWidth / 750))
    console.log(left)
    if (left <= 275.5) {
      this.setData({
        moveSendBtnLeft3: left
      })
    } else {
      this.setData({
        moveSendBtnLeft3: 275.5
      })
    }
  },
  // 结束移动
  moveSendBtnEnd3: function (e) {
    console.log("end");
    var that = this;
    var left = ((e.changedTouches[0].clientX - that.data.moveStartX3) / (that.data.screenWidth / 750))
    console.log(left);
    if (left < 275.5) {
      for (let i = left; i >= 0; i--) {
        that.setData({
          moveSendBtnLeft3: i
        })
      }
    } else {
      that.setData({
        moveEndX3: e.changedTouches[0].clientX,
      });
      {
        wx.navigateTo({
          url: '../../pages/gen/gen',
        })
      }
      this.setData({
        moveSendBtnLeft3: 0
      })
    }
  },
  //滑动四
   //开始移动
   moveSendBtnStart4: function (e) {
    console.log("start");
    console.log(e);
    this.setData({
      moveStartX4: e.changedTouches["0"].clientX
    })
  },
  //移动发送按钮
  moveSendBtn4: function (e) {
    var that = this;
    // console.log(e.touches[0]);
    var left = ((e.touches[0].clientX - that.data.moveStartX4) / (that.data.screenWidth / 750))
    console.log(left)
    if (left <= 275.5) {
      this.setData({
        moveSendBtnLeft4: left
      })
    } else {
      this.setData({
        moveSendBtnLeft4: 275.5
      })
    }
  },
  // 结束移动
  moveSendBtnEnd4: function (e) {
    console.log("end");
    var that = this;
    var left = ((e.changedTouches[0].clientX - that.data.moveStartX4) / (that.data.screenWidth / 750))
    console.log(left);
    if (left < 275.5) {
      for (let i = left; i >= 0; i--) {
        that.setData({
          moveSendBtnLeft4: i
        })
      }
    } else {
      that.setData({
        moveEndX4: e.changedTouches[0].clientX,
      });
      {
        wx.navigateTo({
          url: '../../pages/gen/gen',
        })
      }
      this.setData({
        moveSendBtnLeft4: 0
      })
    }
  },
  //滑动五
  //开始移动
   moveSendBtnStart5: function (e) {
    console.log("start");
    console.log(e);
    this.setData({
      moveStartX5: e.changedTouches["0"].clientX
    })
  },
  //移动发送按钮
  moveSendBtn5: function (e) {
    var that = this;
    // console.log(e.touches[0]);
    var left = ((e.touches[0].clientX - that.data.moveStartX5) / (that.data.screenWidth / 750))
    console.log(left)
    if (left <= 275.5) {
      this.setData({
        moveSendBtnLeft5: left
      })
    } else {
      this.setData({
        moveSendBtnLeft5: 275.5
      })
    }
  },
  // 结束移动
  moveSendBtnEnd5: function (e) {
    console.log("end");
    var that = this;
    var left = ((e.changedTouches[0].clientX - that.data.moveStartX5) / (that.data.screenWidth / 750))
    console.log(left);
    if (left < 275.5) {
      for (let i = left; i >= 0; i--) {
        that.setData({
          moveSendBtnLeft5: i
        })
      }
    } else {
      that.setData({
        moveEndX5: e.changedTouches[0].clientX,
      });
      {
        wx.navigateTo({
        url:'../../pages/gen/gen',
        })
      }
      this.setData({
        moveSendBtnLeft5: 0
      })
  }
  },
  //滑动六
  //开始移动
   moveSendBtnStart6: function (e) {
    console.log("start");
    console.log(e);
    this.setData({
      moveStartX6: e.changedTouches["0"].clientX
    })
  },
  //移动发送按钮
  moveSendBtn6: function (e) {
    var that = this;
    // console.log(e.touches[0]);
    var left = ((e.touches[0].clientX - that.data.moveStartX6) / (that.data.screenWidth / 750))
    console.log(left)
    if (left <= 275.5) {
      this.setData({
        moveSendBtnLeft6: left
      })
    } else {
      this.setData({
        moveSendBtnLeft6: 275.5
      })
    }
  },
  // 结束移动
  moveSendBtnEnd6: function (e) {
    console.log("end");
    var that = this;
    var left = ((e.changedTouches[0].clientX - that.data.moveStartX6) / (that.data.screenWidth / 750))
    console.log(left);
    if (left < 275.5) {
      for (let i = left; i >= 0; i--) {
        that.setData({
          moveSendBtnLeft6: i
        })
      }
    } else {
      that.setData({
        moveEndX6: e.changedTouches[0].clientX,
      });
      {
        wx.navigateTo({
          url: '../../pages/gen/gen',
        })
      }
      this.setData({
        moveSendBtnLeft6: 0
      })
    }
  },
})