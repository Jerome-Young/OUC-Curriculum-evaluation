const db=wx.cloud.database()
Page({

  data: {
    Register:[
      {num:'0',value:"是",checked:false},
      {num:'1',value:"否",checked:false}
    ],
    register:true
  },

  radioChange(e){
    if(e.detail.value=="是") {
      console.log(register)
      this.setData({
        register:true
      })
    }
    else{
      this.setData({
        register:false
      })
    }
    
  },



  Submit(res){
    wx.showLoading({
      title: 'Loading...',
      mask:true
    })//防止一次性多次点击 和 hideloading呼应
    // console.log(res.detail.value)
    console.log(register)
    var {classname,teacher,comment,introduction}=res.detail.value;//把输入框里的值保存在var对象里
    
    // var ALL=res.detail.value;//直接把整个对象给ALL变量
    db.collection("TeacherList")
    .add({
      
      data:{
        classname:classname,
        teacher:teacher,
        comment:comment,
        introduction:introduction,
        register:register
      }//比较复杂
      
      // data:ALL//简单~
    })
    .then(res=>{
      wx.hideLoading({
        success: (res) => {},
      })
    })
  },

  
//update 更改一条； set 更改一条并删除其他的（慎用
//remove 删除
//以上两条都需要精确地doc（“id”）

// //监听函数实例
//   good(res){
//     db.collection
//     .where(
//       db.command.and([
//         {
//           classname:res.detail.value.classname
//         },
//         {
//           teacher:res.detail.value.teacher
//         }
//       ])
//     )
//     .get()
//     .then(res=>{
//       this.setData({
//         love:res.detail.value.love+1
//       })
//     })
//   },

  

})