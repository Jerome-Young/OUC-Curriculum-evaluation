Page({
  data: {
    cateItems: [
      {
        cate_id: 1,
        cate_name: "科学与技术",
        ishaveChild: true,
        children:
        [
          {
            child_id: 1,
            name: '海洋地质概论',
            image: ""
          },
          {
            child_id: 2,
            name: '环境地质概论',
            image: ""
          },
          {
            child_id: 3,
            name: '设计思维与office高级应用',
            image: ""
          }
        ]
      },
      {
        cate_id: 2,
        cate_name: "社会与文化",
        ishaveChild: true,
        children:
        [
          {
            child_id: 1,
            name: '经济学思想与方法',
            image: ""
          },
          {
            child_id: 2,
            name: '逻辑学',
            image: ""
          }
        ]
      },
      {
        cate_id: 3,
        cate_name: "哲学与人生",
        ishaveChild: true,
        children:
        [
          {
            child_id: 1,
            name: '科学哲学导论',
            image: ""
          },
          {
            child_id: 2,
            name: '西方哲学选讲',
            image: ""
          },
          {
            child_id: 3,
            name: '教育哲学导论',
            image: ""
          }
        ]
      },
      {
        cate_id: 4,
        cate_name: "文学与艺术",
        ishaveChild: true,
        children: [
          {
            child_id: 1,
            name: '符号表达原理',
            image: ""
          },
          {
            child_id: 2,
            name: '语法与修辞',
            image: ""
          },
          {
            child_id: 3,
            name: '叙事作品解析例示',
            image: ""
          }
        ]
      },
      {
        cate_id: 5,
        cate_name: "历史与文明",
        ishaveChild: true,
        children: [
          {
            child_id: 1,
            name: '中国哲学简史',
            image: ""
          },
          {
            child_id: 2,
            name: '生态文明',
            image: ""
          },
          {
            child_id: 3,
            name: '世界近代史',
            image: ""
          }
        ]
      },
      {
        cate_id: 6,
        cate_name: "国防生",
        ishaveChild: true,
        children: [
          {
            child_id: 1,
            name: '人民军队导论',
            image: ""
          },
          {
            child_id: 2,
            name: '国防建设',
            image: ""
          },
          {
            child_id: 3,
            name: '军队基层文化工作',
            image: ""
          },
          {
            child_id: 4,
            name: '军事法概论',
            image: ""
          },
          {
            child_id: 5,
            name: '革命军人思想品德修养',
            image: ""
          },
          {
            child_id: 6,
            name: '军事基本技能',
            image: ""
          }
        ]
      }
    ],
    curNav: 1,
    curIndex: 0
  },

  //事件处理函数  
  switchRightTab: function (e) {
    // 获取item项的id，和数组的下标值  
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
    // 把点击到的某一项，设为当前index  
    this.setData({
      curNav: id,
      curIndex: index
    })
  }
})  