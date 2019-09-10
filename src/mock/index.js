var Mock = require('mockjs')
var data = Mock.mock({
    "pageSize":5,
    'list|1-30': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        "link":"www.baidu.com",
        "text":"這是什麽"
    }]
})
Mock.mock('/goodList','post',function(options){
    //取出参数
    var {page,pageSize} = JSON.parse(options.body);
    console.log(page,pageSize)
    // console.log(data)
    //用slice从大数组data中截取一部分作为返回数据
    var arr =  data.list.slice( (page-1)*pageSize ,page*pageSize );

    return {
        "status":200,
        "page":page,
        "pageSize":pageSize,
        "total": data.length,
        "list":arr
    }
});
// console.log(JSON.stringify(data,null,4))
