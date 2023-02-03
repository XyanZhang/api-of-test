// router的入口文件
// 引入路由
const Router = require("koa-router")
const router = new Router()
const home = require("./home") //导入home,使home中的接口可用
const api = require("./api");
// router.use()
router.use("/home", home.routes(), home.allowedMethods())

router.use("/api", api.routes(), api.allowedMethods())

// 一般首页是直接访问ip+端口号进入,所以可以将期重定向到/home下的某一个路由
router.redirect("/", "/home")

module.exports = router // 导出router给app.js使用
