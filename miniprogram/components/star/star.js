// component/rating/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    starid:{
      type:Number,
      value:0
    }
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
    introd4uction:"",
    src1: 'https://img-blog.csdnimg.cn/20200708144629175.png',
    src2: 'https://img-blog.csdnimg.cn/20200708144629178.png',
    showbutton:""
  },
 
  /**
   * 组件的方法列表
   */
  methods: {
    select(e) {
      console.log(e)
      this.setData({
        starid:e.currentTarget.dataset.index
      })
      switch(e.currentTarget.dataset.index){
        case(5):{
          this.setData({
          introduction:"强烈推荐"
        })
          break;
        }
        
        case(4):{
          this.setData({
            introduction:"敬业"
          })
          break;
        }

        case(3):{
          this.setData({
          introduction:"合格"
        })
        break;
        }
        
        case(2):{
          this.setData({
          introduction:"不推荐"
        })
        break;
        }
        
        case(1):{
          this.setData({
          introduction:"差"
        })
        break;
        }
        
      }
      this.triggerEvent("usersubmit",{
        showbutton:true,
        starid:this.data.starid
      });
    }
  }
})

