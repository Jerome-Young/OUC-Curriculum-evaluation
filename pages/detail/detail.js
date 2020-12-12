// pages/detail/detail.js
const db=wx.cloud.database()//数据库初始化

var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
classname:"",
teacher:"",
wantID: 0,
userID: 0, //userID
replyUserID: 0, //回复哪个人的userID 默认等于楼主id
replyName: "",
count: 0,
content: "",
imgUrl: "",
time: "",
title: "",
userName: "",
userImg: "",
limit: 5,
wantReplay: [],
contentInp: "",
replyInp: "",
focus: false,
check: true, //默认显示我来评论input
isCard: true,
comment_text: null,
reply_id:0,
placeholder:'就不说一句吗？',
reply_id:0,
now_reply_name:null,
type:0,
now_parent_id:0,
now_reply:0

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
    this.setData({
      wantID: e.id
    })
    this.getWantDetail();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */

  replyComment:function(e){
    var id = e.currentTarget.dataset.cid
    console.log(id)
    var name = e.currentTarget.dataset.name
    
    var type = e.currentTarget.dataset.type
    var parent_id = e.currentTarget.dataset.pid
    console.log(parent_id)
    this.setData({
      now_reply:id,
      now_reply_name: name,
      now_reply_type: type,
      now_parent_id:parent_id,
      focus:true,
      placeholder: '回复' + name+":"
    })
  },
  getWantDetail() {
    let params = {
      wantID: this.data.wantID,
      offset: 0,
      limit: this.data.limit
    }
    app.getWantDetail(params).then(res => {
      let wantDetail = [];
      for (var i = 0; i < res.data.wantDetail.length; i++) {
        if (res.data.wantDetail[i].pid === 0) {
          wantDetail = res.data.wantDetail[i]
          res.data.wantDetail.splice(i, 1)
        }
      }
      this.setData({
        wantReplay: res.data.wantDetail,
        count: wantDetail.count,
        content: wantDetail.content,
        imgUrl: wantDetail.imgUrl,
        time: wantDetail.time,
        title: wantDetail.title,
        userName: wantDetail.userName,
        userImg: wantDetail.userImg,
        userID: wantDetail.userID,
        replyUserID: wantDetail.userID,
      })
    })
  },
 
  onReachBottom: function() {
    this.data.limit = this.data.limit + 4
    this.getWantDetail();
  },
  //触摸事件切换到回复楼主
  touchstar: function() {
    this.setData({
      check: true,
      focus: false,
      contentInp: "",
      replyInp: "",
    })
  },
  /**评论输入框 */
  contentInp(e) {
    this.setData({
      contentInp: e.detail.value
    })
  },
  /**答复输入框 */
  replyInp(e) {
    this.setData({
      replyInp: e.detail.value
    })
  },
 
  /**消息图片点击 */
  addWantImg() {
    this.setData({
      focus: true,
    })
  },
  addWant() {
    if (this.data.contentInp.length > 100) {
      wx.showToast({
        title: '请将字数控制在100字以内哦',
        icon: "none",
        duration: 1000,
        mask: true,
      })
    } else {
      if (this.data.replyUserID === this.data.userID && this.data.check === true) {
        this.addComment();
      } else {
        this.addReply();
      }
    }
  },
 
  /**发表评论 */
  addComment() {
    let params = {
      pID: this.data.wantID,
      userID: app.globalData.userID,
      content: this.data.contentInp,
      replyUserID: this.data.userID,
      type: 1,
      state: true
    }
    app.addReply(params).then(res => {
      if (res.state === 1) {
        this.setData({
          contentInp: ""
        })
        wx.showToast({
          title: '评论成功',
          icon: "none",
          duration: 1000,
          mask: true,
        })
        this.getWantDetail();
      }
    })
  },
  /**点击评论获取要回复的人的id */
  getReplyUserID(e) {
    let replyID = e.currentTarget.dataset.replyuserid;
    if (replyID === app.globalData.userID) {
      wx.showToast({
        title: '请不要回复自己哦',
        icon: "none",
        duration: 1000,
        mask: true,
      })
    } else {
      this.setData({
        replyUserID: replyID,
        replyName: e.currentTarget.dataset.replyname,
        focus: true,
        check: false
      })
    }
  },
  /**回复 */
  addReply() {
    let params = {
      pID: this.data.wantID,
      userID: app.globalData.userID,
      content: this.data.replyInp,
      replyUserID: this.data.replyUserID,
      type: 1,
      state: false
    }
    app.addReply(params).then(res => {
      if (res.state === 1) {
        this.setData({
          replyInp: "",
          check: true
        })
        wx.showToast({
          title: '评论成功',
          icon: "none",
          duration: 1000,
          mask: true,
        })
        this.getWantDetail();
      }
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function(ops) {
    wx.showShareMenu({
      withShareTicket: true
    })
    return {
      title: 'xxxx',
      path: 'pages/wantDetail/wantDetail?id=' + this.data.wantID,
      imageUrl: "https://qhds.drefore.cn" + this.data.imgUrl,
      success: function(res) {
        console.log("success" + res)
      },
      fail: function(res) {
        console.log("fail" + res)
      }
    }
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

  },
  etCommentText: function (e) {
    var val = e.detail.value;
    this.setData({
      comment_text: val
    });
  },
onReplyBlur: function (e) {
    var that = this;
    const text = e.detail.value.trim();
    if (text === '') {
      that.setData({
        now_reply: 0,
        now_reply_name:null,
        now_reply_type:0,
        now_parent_id:0,
        placeholder: "就不说一句吗？",
        focus:false
      });
    }
  },
  
  sendComment:function(e){
    var that= this
    var comment_list = that.data.comment_list  //获取data中的评论列表
    var comment_list2 = that.data.comment_list2  //获取data中的回复列表
    var comment_text = that.data.comment_text  //获取当前的评论幸喜
    var userinfo = that.data.userinfo   //获取当前的用户信息
    var comment_user_name = userinfo.nickName  //用户昵称
    var comment_user_avatar = userinfo.avatarUrl //用户头像
    var timestamp = Date.parse(new Date()); //时间戳
    var create_time = common.timetrans(timestamp)  //格式化时间戳
    var reply_id = that.data.reply_id //获取回复的评论id
    console.log(timestamp)
    console.log(create_time)
    var comment_list_length = comment_list.length //获取当前评论数组的长度
    console.log("当前评论数组的长度" + comment_list_length)
    var last_id = comment_list[comment_list_length -1].comment_id //获取最后一个的id
    console.log("当前评论数组的最后一个的id" + last_id)
    var comment_list2_length = comment_list2.length //获取当前回复数组的长度
    console.log("当前评论数组的长度" + comment_list2_length)
    var last_id2 = comment_list2[comment_list2_length - 1].comment_id //获取回复一个的id
    console.log("当前评论数组的最后一个的id" + last_id2)
    var new_id = last_id > last_id2 ? last_id + 1 : last_id2 + 1
    console.log("新的id是"+new_id)
    var reply_name = null
    var parent_id = 0
    var reply_id = that.data.now_reply
    console.log("回复的id是" + reply_id)
    if (reply_id!=0){
      console.log("现在是回复")
      var reply_type = that.data.now_reply_type
      parent_id = that.data.now_parent_id
      console.log("回复的所属的parent_id是" + parent_id)
      console.log("回复的类型是" + reply_type)
      if (parent_id > 0) {
        if (reply_type == 1){
          parent_id = reply_id
          console.log("现在是回复评论")
        }else{
    
          reply_name = that.data.now_reply_name
          console.log("现在是再回复" + reply_name+"的回复")
        }
      }
    }else{
      console.log("现在是评论" )
    }
    var comment_detail = {}
    comment_detail.comment_id = new_id
    comment_detail.comment_user_name = comment_user_name
    comment_detail.comment_user_avatar = comment_user_avatar
    comment_detail.comment_text = comment_text
    comment_detail.comment_time = create_time
    comment_detail.reply_id = reply_id
    comment_detail.parent_id = parent_id
    comment_detail.reply_name = reply_name
    console.log(comment_detail)
    if (comment_detail.parent_id>0){
      comment_list2.push(comment_detail)
    }else{
      comment_list.unshift(comment_detail)
    }
    
    that.setData({
      comment_text:null,
      now_reply: 0,
      now_reply_name: null,
      now_reply_type: 0,
      now_parent_id: 0,
      placeholder: "就不说一句吗？",
      comment_list,
      comment_list2
    },()=>{
      //这里写你访问后台插入数据库的代码
    })
    
  },
})