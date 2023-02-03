// 整个koa项目的入口文件
const Koa = require("koa2") // 引入koa2
const app = new Koa() // 声明一个实例
const port = 1234 // 端口号
const router = require("./router") // 配置路由
// const cors = require("koa2-cors") // 解决跨域
const static = require("koa-static") // 静态资源管理
const path = require("path")

/**
 * use()就是调用router中间件
 * router.routes()作用是启动路由
 * router.allowedMethods()作用是允许任何请求(例如:get,post,put)
 */
app.use(static(path.join(__dirname + "/public"))) //读取静态资源
// app.use(cors()) //后端允许跨域访问
app.use(router.routes(), router.allowedMethods())

app.listen(port, () => {
  console.log(`server in running at http://localhost:${port}`)
})
