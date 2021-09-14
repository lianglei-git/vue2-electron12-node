/// node 子进程微服务
// import {
//     spawn
// } from 'child_process'

const { spawn } = require('child_process')
// import dotenv, {
//     config
// } from 'dotenv'

const { config } = require('dotenv')

const killProAll = require('tree-kill')

// import {
// isDev
// } from './preload/util'

const { isDev, portInUse } = require('./util')

// import {
//     join
// } from 'path'

const { join } = require('path')

const {
    red,
    blue,
    blackBright,
    gray
} = require('chalk')
config({
    path: join(__dirname, '../.env')
})
// console.log(process.env.NODE_PORT) // node 环境和当前环境采用一套env代码
/**
 * 关闭进程 所有进程!!
 */
const stopServer = (cprocess, callback) => {
    if (cprocess) {
        killProAll(cprocess.pid, "SIGTERM", _err => {
            console.log(_err, 'Killed')
            callback()
        })
    }
}

/**
 * 打开子进程
 */
const startSrever = (port) => {
    let cPObj = null
    let cmdstr
    let argv0 = []
    let config = {
        env: process.env,
        cwd:join(__dirname, '../../server'),// join(__dirname, '../server')
        shell: true
    }
    if (!isDev()) {
        cmdstr = 'yarn'
        cPObj = spawn(cmdstr, argv0, config)
    }

    argv0 = [`--port=${port}`]
    cmdstr = isDev() ? 'nodemon app.js' : 'node app.js'; // dev 和 pro 路径不同！
    // runNode()
    // const runNode = () => {
    cPObj = spawn(cmdstr, argv0, config)
    cPObj.stdout.on('data', data => {
        console.log(blue('node - stdout - ', data))
    })
    cPObj.stderr.on('data', data => {
        console.log(red('node - stderr - ', data))
    })
    cPObj.on('close', code => {
        console.log(blackBright('node_child_process - exit', code))
    })
    // }
    return cPObj
}
export {
    stopServer
}
export default () => {
    let curPort = process.env.NODE_PORT
    return new Promise(res => {
        // 这边这个目前只能用来当做 线上起服务版本，当然也可以用作动态起服务
        portInUse(process.env.NODE_PORT, (is) => {
            console.log(is)
            if (is) {
                console.log(gray('有此端口，无需重启'))
                res(startSrever(curPort++))
            } else {
                console.log('正在启动...热更新啦...')
                res(startSrever(process.env.NODE_PORT))
            }
        })
    })
}