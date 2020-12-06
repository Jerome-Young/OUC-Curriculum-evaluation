//input.js
Page({
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
  
  click_detail(){
    wx.navigateTo({
      url: '/pages/index/index',
    })
  }
})