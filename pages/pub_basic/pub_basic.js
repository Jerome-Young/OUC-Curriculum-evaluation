//input.js
const db=wx.cloud.database()//数据库初始化
Page({
  data: {
    collegeCur_math: -2,
    collegeCur_physic: -2,
    collegeCur_english: -2,
    collegeCur_politic: -2,
    collegeCur_sport: -2,
    math_list:[{txt:"高等数学Ⅰ1"},{txt:"高等数学Ⅰ2"},{txt:"线性代数"},{txt:"数学物理方法A"},{txt:"概率统计"},{txt:"复变函数与积分变换"},{txt:"微积分Ⅰ"},{txt:"大学数学A"},{txt:"大学数学B"}],
    physic_list:[{txt:"大学物理Ⅰ1"},{txt:"大学物理Ⅰ2"},{txt:"大学物理Ⅱ1"},{txt:"大学物理Ⅱ2"},{txt:"大学物理Ⅲ1"},{txt:"大学物理Ⅲ2"},{txt:"大学物理实验1"},{txt:"大学物理实验2"},{txt:"大学物理基础"}],
    english_list:[{txt:"大学英语Ⅰ"},{txt:"大学英语Ⅱ"},{txt:"大学英语Ⅲ"},{txt:"大学英语Ⅳ"},{txt:"大学德语"},{txt:"大学日语"},{txt:"商务英语视听说"},
    {txt:"高级口语"},{txt:"英语演讲艺术"},{txt:"跨文化交际视听说"},{txt:"中国文化通览"},{txt:"口译"},{txt:"实用英语写作"},{txt:"笔译"},{txt:"美国历史与文化"},{txt:"大学法语"},{txt:"大学韩国语"},{txt:"大学俄语"},{txt:"大学西班牙语"},{txt:"英语电影的艺术与科学"},{txt:"大学基础英语Ⅰ"},{txt:"大学基础英语Ⅱ"},{txt:"大学基础英语Ⅲ"},{txt:"大学基础英语Ⅳ"}],
    politic_list:[{txt:"马基"},{txt:"思修"},{txt:"毛概"},{txt:"近纲"},{txt:"军概"}],
    sport_list:[{txt:"初级篮球"},{txt:"形体"},{txt:"初级足球"},{txt:"羽毛球"},{txt:"射箭"},{txt:"初级网球"},{txt:"乒乓球"},{txt:"初级排球"},{txt:"中级排球"},{txt:"拳击"},{txt:"太极拳"},{txt:"跆拳道"},{txt:"长拳"},{txt:"柔道"},{txt:"健美操"},{txt:"游泳"},{txt:"有氧踏板"},{txt:"初级剑"},{txt:"艺术体操"},{txt:"拓展训练"},{txt:"有氧舞蹈"},{txt:"帆船运动与文化"},{txt:"定向越野"},{txt:"瑜伽"},{txt:"田径游戏"},{txt:"轮滑"},{txt:"健康辅导课"},{txt:"中级游泳"},{txt:"击剑"},{txt:"中级跆拳道"},{txt:"健身健美"}],
    other_list:[{txt:"海洋学1"},{txt:"海洋学2"},{txt:"海洋学3"},{txt:"工程制图"},{txt:"计算机网络"},{txt:"数据库技术与应用"},{txt:"大学计算机应用基础"},{txt:"大学计算机基础"},{txt:"移动Web开发技术基础"},{txt:"C程序设计"},{txt:"Python程序设计"},{txt:"无机及分析化学"},{txt:"有机化学"},{txt:"大学化学"},{txt:"物理化学实验"},{txt:"物理化学"},{txt:"无机及分析化学实验"},{txt:"有机化学实验"}]
  },
  // 数学
  collegeSelect_math(e) {
    this.data.classname= e.currentTarget.dataset.txt
    db.collection("class")
    .where({//查询指令 条件筛选用where
      classname:this.data.classname,
    })
    .get()//获取数据
    .then(res=>{//then可以让回调函数呈链式分布
      console.log(res)
      this.setData({
        Teacher:res.data
      })
    })
    this.setData({
      collegeCur_math: e.currentTarget.dataset.id - 1,
      scrollLeft_math: (e.currentTarget.dataset.id - 3) * 100,

    })
    },
    // 物理
  collegeSelect_physic(e) {
    this.data.classname= e.currentTarget.dataset.txt
    db.collection("class")
    .where({//查询指令 条件筛选用where
      classname:this.data.classname,
    })
    .get()//获取数据
    .then(res=>{//then可以让回调函数呈链式分布
      console.log(res)
      this.setData({
        Teacher:res.data
      })
    })
    this.setData({
      collegeCur_physic: e.currentTarget.dataset.id - 1,
      scrollLeft_physic: (e.currentTarget.dataset.id - 3) * 100,
    })
    },
    // 英语
  collegeSelect_english(e) {
    this.data.classname= e.currentTarget.dataset.txt
    db.collection("class")
    .where({//查询指令 条件筛选用where
      classname:this.data.classname,
    })
    .get()//获取数据
    .then(res=>{//then可以让回调函数呈链式分布
      console.log(res)
      this.setData({
        Teacher:res.data
      })
    })
    this.setData({
      collegeCur_english: e.currentTarget.dataset.id - 1,
      scrollLeft_english: (e.currentTarget.dataset.id - 3) * 100,
    })
    },
    // 政治
  collegeSelect_politic(e) {
    this.data.classname= e.currentTarget.dataset.txt
    db.collection("class")
    .where({//查询指令 条件筛选用where
      classname:this.data.classname,
    })
    .get()//获取数据
    .then(res=>{//then可以让回调函数呈链式分布
      console.log(res)
      this.setData({
        Teacher:res.data
      })
    })
    this.setData({
      collegeCur_politic: e.currentTarget.dataset.id - 1,
      scrollLeft_politic: (e.currentTarget.dataset.id - 3) * 100,
    })
    },
    // 体育
  collegeSelect_sport(e) {
    this.data.classname= e.currentTarget.dataset.txt
    db.collection("class")
    .where({//查询指令 条件筛选用where
      classname:this.data.classname,
    })
    .get()//获取数据
    .then(res=>{//then可以让回调函数呈链式分布
      console.log(res)
      this.setData({
        Teacher:res.data
      })
    })
    this.setData({
      collegeCur_sport: e.currentTarget.dataset.id - 1,
      scrollLeft_sport: (e.currentTarget.dataset.id - 3) * 100,
    })
    },
    // 其他
    collegeSelect_other(e) {
      this.data.classname= e.currentTarget.dataset.txt
      db.collection("class")
      .where({//查询指令 条件筛选用where
        classname:this.data.classname,
      })
      .get()//获取数据
      .then(res=>{//then可以让回调函数呈链式分布
        console.log(res)
        this.setData({
          Teacher:res.data
        })
      })
      this.setData({
        collegeCur_other: e.currentTarget.dataset.id - 1,
        scrollLeft_other: (e.currentTarget.dataset.id - 3) * 100,
      })
      },
  
  click_detail(e){
    wx.navigateTo({
      url: '/pages/detail/detail?teacher='+e.currentTarget.dataset.teacher+'&classname='+e.currentTarget.dataset.classname,
    })
  },
  onLoad: function (options) {
    db.collection("class")
    .get()//获取数据
    .then(res=>{//then可以让回调函数呈链式分布
      console.log(res)
      this.setData({
        Teacher:res.data
      })
    })
  },
})