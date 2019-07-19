// 用mockjs模拟生成数据
var Mock = require('mockjs');

let mr = Mock.Random;//提取mock的随机对象

//随机id和图片
let mapData = (n) => {
  var data = [];

  for (var i = 1; i <= n; i++) {

    data.push({
      id: i,
      title: "@ctitle(8,12)",
      des: "@csentence(10, 20)",
      time: "@integer(1553425967486,1553475967486)",
      detail:{
        auth:"@cname()",
        content:"@cparagraph(10,40)",
        auth_icon:mr.image('50x50', mr.color(), mr.cword(1))
      }
    })
  }
  return data
};
let mapProduct = (n)=>{
  var data = [];
  for(var i=1;i<=n;i++){
    data.push({
      id:i,
      img: mr.image('750x501', mr.color(), mr.cword(4,10)),
      pri:mr.integer(60,100),//随机整数
      title: "@ctitle(3,4)",
      content:"@cparagraph(10,40)"
    })
  }
  return data
}

//json-server 要对象||函数(返回mock后的数据)
module.exports = {
  ...Mock.mock({
    'home': mapData(32),//解决 auth_icon 不随机
    'follow': mapData(21),
    'column': mapData(11),
    'banner|2': [
      {
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        title: "@ctitle(4,8)",//标题型中文4到8个字
        sub_title: "@ctitle(6,12)",
        banner: mr.image('750x501', mr.color(), mr.cword(4,10)),//banner不变
        time: "@integer(1553425967486,1553475967486)",
        detail:{
          icon:mr.image('20x20', mr.color(), mr.cword(1,2)),//20X20尺寸
          auth:"@cname()",//百家姓
          content:"@cparagraph(10,40)"//正文
        }
      }
    ],
    'user':{
      "err": mr.integer(0,2),
      "msg": "已登录",
      "data": {
        "follow": mr.integer(0,0),
        "fans": mr.integer(0,0),
        "nikename": mr.cname(),
        "icon": mr.image('20x20',mr.color(),mr.cword(1)),
        "time": mr.integer(13,13)
      }
    },
    "banner2|16":[{
      'id|+1': 1,
      banner: mr.image('750x501', mr.color(), mr.cword(4,10))
    }],
    "product":mapProduct(30)
  })
};
