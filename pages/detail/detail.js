const db=wx.cloud.database()//数据库初始化
var app= getApp()

Page({
  data: {
  temp:'',
  talks: [],
  touchStart: 0,
  inputValue: '',
  inputBiaoqing: '',
  faces: '',
  names: "匿名用户",
  isShow: false, //控制emoji表情是否显示 
  isLoad: true, //解决初试加载时emoji动画执行一次
  cfBg: false,
  emojiChar: "☺-😋-😌-😍-😏-😜-😝-😞-😔-😪-😭-😁-😂-😃-😅-😆-👿-😒-😓-😔-😏-😖-😘-😚-😒-😡-😢-😣-😤-😢-😨-😳-😵-😷-😸-😻-😼-😽-😾-😿-🙊-🙋-🙏-✈-🚇-🚃-🚌-🍄-🍅-🍆-🍇-🍈-🍉-🍑-🍒-🍓-🐔-🐶-🐷-👦-👧-👱-👩-👰-👨-👲-👳-💃-💄-💅-💆-💇-🌹-💑-💓-💘-🚲",
  //0x1f---
  emoji: [
   "60a", "60b", "60c", "60d", "60f",
   "61b", "61d", "61e", "61f",
   "62a", "62c", "62e",
   "602", "603", "605", "606", "608",
   "612", "613", "614", "615", "616", "618", "619", "620", "621", "623", "624", "625", "627", "629", "633", "635", "637",
   "63a", "63b", "63c", "63d", "63e", "63f",
   "64a", "64b", "64f", "681",
   "68a", "68b", "68c",
   "344", "345", "346", "347", "348", "349", "351", "352", "353",
   "414", "415", "416",
   "466", "467", "468", "469", "470", "471", "472", "473",
   "483", "484", "485", "486", "487", "490", "491", "493", "498", "6b4"
  ],
  emojis: [], //qq、微信原始表情
  alipayEmoji: [], //支付宝表情
  classname:"",
  teacher:"",
  source_id:"",
  user_id:'',
  time:'',
  datatime:'',
  Teacher:"",
  idsave:"",
  starsave:0,
  peoplesave:0,
  showbutton:false,
  starnum:0,
  currentscore:"",
  lovesave:0,
  Ishidden:false,
  select:''
  },
  
onLoad: function(e) {
  if(app.user_login.star.indexOf(this.data.idsave)>=0){
    this.setData({
      select:'null'
    })
  }
  this.setData({
    names: app.user_login.head_name,
    faces: app.user_login.head_image,
    idsave:e.id,
    starsave:e.starid,
    peoplesave:e.peoplenum,
    lovesave:e.lovenum
  })
  db.collection("class")
  .where({//查询指令 条件筛选用where
   _id:e.id
  })
  .get()//获取数据
  .then(res=>{//then可以让回调函数呈链式分布
    this.setData({
      Teacher:res.data,
    })
  })
  var em = {},
   that = this,
   emChar = that.data.emojiChar.split("-");
  var emojis = []
  that.data.emoji.forEach(function(v, i) {
   em = {
   char: emChar[i],
   emoji: "0x1f" + v
   };
   emojis.push(em)
  });
  that.setData({
   emojis: emojis
  })
  
},
  //解决滑动穿透问题
  emojiScroll: function(e) {
  console.log(e)
  },
  //点击表情显示隐藏表情盒子
  emojiShowHide: function() {
  this.setData({
   isShow: !this.data.isShow,
   isLoad: false,
   cfBg: !this.data.false
  })
  },
  //表情选择
  emojiChoose: function(e) {
  console.log(e)
  //当前输入内容和表情合并
  // let value = e.currentTarget.dataset.emoji;
  this.data.inputBiaoqing += e.currentTarget.dataset.emoji;
  console.log(this.data.inputBiaoqing)
  this.setData({
   inputValue: this.data.inputBiaoqing
  })
  },
  //点击emoji背景遮罩隐藏emoji盒子
  cemojiCfBg: function() {
  this.setData({
   isShow: false,
   cfBg: false
  })
  },
  onReady: function() {
  // 评论弹出层动画创建
  this.animation = wx.createAnimation({
   duration: 400, // 整个动画过程花费的时间，单位为毫秒
   timingFunction: "ease", // 动画的类型
   delay: 0 // 动画延迟参数
  })
  },
  showTalks: function() {
  // 加载数据
  this.loadTalks();
  // 设置动画内容为：使用绝对定位显示区域，高度变为100%
  this.animation.bottom("0rpx").height("100%").step()
  this.setData({
   talksAnimationData: this.animation.export()
  })
  },
  
  hideTalks: function() {
  // 设置动画内容为：使用绝对定位隐藏整个区域，高度变为0
  this.animation.bottom("-100%").height("0rpx").step()
  this.setData({
   talks: [],
   talksAnimationData: this.animation.export()
  })
  },
  
  // 加载数据
  loadTalks: function(e) {
  // 随机产生一些评论
  wx.showNavigationBarLoading();
  let temp=this.data.idsave;
  //获取评论
  db.collection("comment")
  .where({//查询指令 条件筛选用where
    source_id:temp
  })
  .get()//获取数据
  .then(res=>{//then可以让回调函数呈链式分布
    console.log(res)
    this.setData({
      talks:res.data
    })
  })

 
  let that = this;
 //this.data.talks =this.data.talks.concat(this.data.times);
  //console.log(this.data.talks)
  
  this.setData({
   talks:this.data.talks,
   talksAnimationData: that.animation.export()
  })
  wx.hideNavigationBarLoading();
  },
  
  onScrollLoad: function() {
  // 加载新的数据
  this.loadTalks();
  },
  //下拉评论框隐藏
  touchStart: function(e) {
  let touchStart = e.touches[0].clientY;
  this.setData({
   touchStart,
  })
  },
  touchMove: function(e) {
  // console.log(this.data.touchStart)
  let touchLength = e.touches[0].clientY - this.data.touchStart;
  console.log(touchLength - 100)
  if (touchLength > 100) {
   this.animation.bottom("-100%").height("0rpx").step()
   this.setData({
   talks: [],
   talksAnimationData: this.animation.export(),
   })
  }
  },
  //输入框失去焦点时触发
  bindInputBlur: function(e) {
  console.log(e)
  console.log(this.data.inputBiaoqing)
  this.data.inputValue = e.detail.value + this.data.inputBiaoqing;
  },
  //点击发布，发布评论
  faBu: function() {
    if(this.data.names==undefined)
    {wx.showToast({
      title: '请先登录！',
      icon: 'none',
      duration: 2000
    })
  }
    else{
  let that = this;
  var timestamp = Date.parse(new Date());
timestamp = timestamp / 1000;
//获取当前时间
var n = timestamp * 1000;
var date = new Date(n);
//年
var Y = date.getFullYear();
//月
var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
//日
var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
//时
var h = date.getHours();
//分
var m = date.getMinutes();
var times = Y+"-"+M+"-"+D+"-"+h+":"+m;
this.setData({
  time:times
 })

  this.data.talks.unshift({
   avatarUrl: this.data.faces,
   nickName: this.data.names,
   comment: this.data.inputValue,
   insert_time: this.data.time
  })
   db.collection('comment').add({
    data:{
     comment:this.data.inputValue,
     source_id:this.data.idsave,
     nickName:this.data.names,
     insert_time:this.data.time,
     avatarUrl:this.data.faces,
     user_id:app.user_login._id
    }
})
.then(res=>{
    console.log(res)
})
  that.data.inputValue = '';
  that.setData({
   talks: that.data.talks,
   inputValue: that.data.inputValue,
   talksAnimationData: that.animation.export()
  })
}
},

//赞加一并上传
  Showlove:function(){
    var that=this
    if(this.data.names==undefined){
      wx.showToast({
        title: '请先登录！',
        icon: 'none',
        duration: 2000
      })
    }else{
      db.collection("user")
      .where({
        _id: app.user_login._id,
        love: app.user_login.love
      })
      .get()
      .then(res=>{
        var User=res;
        if(User.data[0].love.indexOf(that.data.idsave)>=0) {
          wx.showToast({
            title: '您已经评价过该课程！',
            icon: 'none',
            duration: 2000
          })
        }else{
          db.collection("user")
          .where({
            _id:app.user_login._id
          })
          .update({
            data:{
              love:db.command.push(that.data.idsave)
            },
            success:function(){
              db.collection('user')
              .where({
                _id:app.user_login._id
              })
              .get({
                success: function(a){
                  app.user_login = a.data[0]
                }
              })
              that.setData({
                lovesave:++that.data.lovesave
              })
              wx.cloud.callFunction({
                name:'loveadd',
                data:{
                    id:that.data.idsave,
                },
                success:function(){
                  console.log("success upload love")
                },
                fail:function(){console.error}
              })
            }
          })
        }
      })
    }
  },
//从页面上拿取星星数
handlesubmit(e){
  if(app.user_login.star.indexOf(this.data.idsave)>=0){
    this.setData({
      starnum:this.data.starsave
    })
  }else{
    this.setData({
      showbutton:e.detail.showbutton,
      starnum:e.detail.starid
    })
  }
},

//计算平均数并上传
  handlestar(){
    var that=this
    if(this.data.names==undefined){
      wx.showToast({
        title: '请先登录！',
        icon: 'none',
        duration: 2000
      })
    }else{
      db.collection("user")
      .where({
        _id: app.user_login._id,
        star: app.user_login.star,
      })
      .get()
      .then(res=>{
        var User=res;
        if(User.data[0].star.indexOf(that.data.idsave)>=0) {
          wx.showToast({
            title: '您已经评价过该课程！',
            icon: 'none',
            duration: 2000
          })
        }else{
          db.collection("user")
          .where({
            _id:app.user_login._id
          })
          .update({
            data:{
              star:db.command.push(that.data.idsave)
            },
            success:function(){
              db.collection('user')
              .where({
                _id:app.user_login._id
              })
              .get({
                success: function(a){
                  app.user_login = a.data[0]
                }
              })
            }
          })
          //按钮隐藏
          that.setData({
            showbutton:false,
            Ishidden:true,
            starsave:[that.data.starsave*that.data.peoplesave+that.data.starnum]/(++that.data.peoplesave),
            peoplesave:++that.data.peoplesave//评价人数
          })

          //上传数据
          wx.cloud.callFunction({
            name:'peopleadd',
            data:{
              id:this.data.idsave,
            },
            success:function(){
              console.log("success upload people")
            },
            fail:function(){console.error}
          })

          wx.cloud.callFunction({
            name:'uploadscore',
            data:{
              id:this.data.idsave,
              currentscore:this.data.starsave
            },
            success:function(){
              console.log("success upload star")
            },
            fail:function(){console.error}
          })
        }
      })
    }
  }
})

