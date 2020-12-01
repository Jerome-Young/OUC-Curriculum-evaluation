//input.js
const db=wx.cloud.database()//数据库初始化
Page({
  data: {
    collegeCur_math: -2,
    collegeCur_physic: -2,
    collegeCur_english: -2,
    collegeCur_politic: -2,
    collegeCur_sport: -2,
    math_list:['1','2','3','4','5','6'],
    physic_list:['1','2','3','4','5','6'],
    english_list:['1','2','3','4','5','6'],
    politic_list:['1','2','3','4','5','6'],
    sport_list:['1','2','3','4','5','6'],
  },

  collegeSelect_math(e) {
    this.setData({
      collegeCur_math: e.currentTarget.dataset.id - 1,
      scrollLeft_math: (e.currentTarget.dataset.id - 3) * 100,
      showList: false,
    })
    },
  collegeSelect_physic(e) {
    this.setData({
      collegeCur_physic: e.currentTarget.dataset.id - 1,
      scrollLeft_physic: (e.currentTarget.dataset.id - 3) * 100,
      showList: false,
    })
    },
  collegeSelect_english(e) {
    this.setData({
      collegeCur_english: e.currentTarget.dataset.id - 1,
      scrollLeft_english: (e.currentTarget.dataset.id - 3) * 100,
      showList: false,
    })
    },
  collegeSelect_politic(e) {
    this.setData({
      collegeCur_politic: e.currentTarget.dataset.id - 1,
      scrollLeft_politic: (e.currentTarget.dataset.id - 3) * 100,
      showList: false,
    })
    },
  collegeSelect_sport(e) {
    this.setData({
      collegeCur_sport: e.currentTarget.dataset.id - 1,
      scrollLeft_sport: (e.currentTarget.dataset.id - 3) * 100,
      showList: false,
    })
    },
  
  click_detail(e){
    let that=this;
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