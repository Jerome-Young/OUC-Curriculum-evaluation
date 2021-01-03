const db=wx.cloud.database()//数据库初始化\
var app=getApp()
Page({
  data: {
    reply:'',
  showtab: 0, //顶部选项卡索引
  tablist: {
  tabnum: 2,
  tabitem: [
  {
  "id": 0,
  "text": "评论"
  },
  {
  "id": 1,
  "text": "回复"
  }
  ],
  userid:'',
  source_id:'',
  teacher:'',
  classname:'',
  },
 
  productList: [],
  // tab切换
  currentTab: 0,
  },
  comment:function(e)

    {
      var that=this
      that.setData({
      source_id:e.currentTarget.dataset.source_id
    })
    console.log(that.data.source_id)
      db.collection("class")
      .where({//查询指令 条件筛选用where
       _id:that.data.source_id[0]._id//自己的id
      })
      .get()//获取数据
      .then(res=>{//then可以让回调函数呈链式分布
        console.log(res)
        that.setData({
          teacher:res.data[0].teacher
        })
        db.collection("class")
      .where({//查询指令 条件筛选用where
       _id:that.data.source_id[0]._id//自己的id
      })
      .get()//获取数据
      .then(res=>{//then可以让回调函数呈链式分布
        console.log(res)
        that.setData({
          classname:res.data[0].classname
        })
        wx.navigateTo({
          url: '/pages/detail/detail?teacher='+that.data.teacher+'&classname='+that.data.classname,
        })
      })
      }) 
       
    },
  onLoad: function () {
    this.setData({
      userid:app.user_login._id
    })
    db.collection("comment")
    .where({//查询指令 条件筛选用where
     user_id:this.data.userid//自己的id
    })
    .get()//获取数据
    .then(res=>{//then可以让回调函数呈链式分布
      console.log(res)
      this.setData({
        reply:res.data
      })
    })
  },
  tabset: function (e) {
    var that = this
    that.setData({
      showtab: e.currentTarget.dataset.tabindex
    })
    if (this.data.currentTab === e.currentTarget.dataset.tabindex) {
      return false;
    } else {
      that.setData({
        currentTab: e.currentTarget.dataset.tabindex
      })
    }
  },
  /**
  * 滑动切换tab
  */
  bindChange: function (e) {
  var that = this;
  that.setData({ currentTab: e.detail.current,
  showtab: e.detail.current});
  }
  })
  
  