const db=wx.cloud.database()//数据库初始化
Page({
  data:{
    Teacher:"",
  },

  //输入框数据读取
  MYinput(res){
  
    var VLU=res.detail.value   
    if(VLU=='') VLU="None"
    db.collection("class")
    .where(
      db.command.or([
        {
          classname:db.RegExp({
            regexp:VLU,
            options:'i',
          }),
        },
        {
          teacher:db.RegExp({
            regexp:VLU,
            options:'i',
        })
        }
      ])
    )
    .get()
    .then(res=>{
      console.log(res)
      this.setData({
        Teacher:res.data
      })
    })
    if(VLU==null){
      this.setData({
        Teacher:null
      })
    }
  },

  //查询
    Submit2(res){
    db.collection("class")
      .where(//查询指令 条件筛选用where
        db.command.or([//db.command实现多条件筛选 有or and；下面的代码是跨字段筛选 就很离谱还有个[] 
                      //而在单一字段筛选代码为：
                      // db.collection('TeacherList').where({
                      //   id: db.command.eq(0).or(db.command.eq(100))
                      // })
          {
             classname:res.detail.value.searchname
          },
          {
              teacher:res.detail.value.searchname
          }
        ])
       
      )
      .get()//获取数据
      .then(res=>{//then可以让回调函数呈链式分布
        console.log(res)
        this.setData({
          Teacher:res.data
        })
      })
  }
})
