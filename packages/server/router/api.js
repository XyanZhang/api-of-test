// 这个页面用于存放首页所有接口
const Router = require("koa-router")
const home = new Router()
// const db = require("../utils/db") //导入数据库文件

// 写对应的接口
home.get("/sse.php", async (ctx) => {
  let body = {
    state:1,
    data: [{
      id: 1,
      name: 'demo1'
    },{
      id: 2,
      name: 'demo2'
    },{
      id: 3,
      name: 'demo3'
    }]
  }
  // setInterval(() => {
  //   console.log(123)
  //   ctx.body = body
  // }, 2000)
  ctx.body = body
})

module.exports = home