var app=getApp()

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    starid:{
      type:Number,
      value:0
    },
    detailid:{
      type:String,
      value:''
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
    introduction:"",
    src1: 'https://img-blog.csdnimg.cn/20200708144629175.png',
    src2: 'https://img-blog.csdnimg.cn/20200708144629178.png',
    showbutton:""
  },
 
  /**
   * 组件的方法列表
   */
  methods: {
    select(e) {
      if(app.user_login===''){
        wx.showToast({
          title: '请先登录！',
          icon: 'none',
          duration: 2000
        })
      }else{
        if(app.user_login.star.indexOf(e.currentTarget.dataset.detailid)<0){
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
            starid:this.data.starid,
          });
        }else{
          wx.showToast({
            title: '您已评价过该课程！',
            icon: 'none',
            duration: 2000
          })
        }
      }
    }
  }
})

