// component/rating/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
 
  },
 
  /*
   * 组件的初始数据
   */
  data: {
    imgs: [{
      id: 1
    }, {
      id: 2
    }, {
      id: 3
    }, {
      id: 4
    }, {
      id: 5
    }],
    starId: 5,
    src1: 'https://img-blog.csdnimg.cn/20200708144629175.png',
    src2: 'https://img-blog.csdnimg.cn/20200708144629178.png',
  },
 
  /**
   * 组件的方法列表
   */
  methods: {
    select(e) {
      console.log(e)
      this.data.starId = e.currentTarget.dataset.index;
      this.setData({
        starId: this.data.starId
      })
    }
  }
})

