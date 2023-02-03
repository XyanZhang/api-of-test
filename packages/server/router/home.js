// 这个页面用于存放首页所有接口
const Router = require("koa-router")
const home = new Router()
// const db = require("../utils/db") //导入数据库文件

// 写对应的接口
home.get("/", async (ctx) => {
  ctx.body = "首页"
})

module.exports = home