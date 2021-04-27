// import Koa from 'koa'
// import Cors from 'koa2-cors'
// 目前使用cjs，并没有统一规范mjs，mjs跟微服务不好做适配
const minimist = require('minimist')

const Koa = require('koa')

const Cors = require('koa2-cors')

const { config } = require('dotenv')

const path = require('path')

config({ path: path.join(__dirname, '../.env') })

const app = new Koa()

const argv = minimist(process.argv.slice(2))

const port = argv.port || process.env.NODE_PORT || 3000

// console.log(process.env.NODE_PORT) // 或 通过命令行参数传过来
// console.log('我正在修改')

app.use(Cors())

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(port, () => {
  console.log('我出发了', port)
})