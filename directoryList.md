
```v
|-- vue2-electron12
    |-- .child_env
    |-- .env
    |-- .gitignore
    |-- babel.config.js
    |-- favicon.ico
    |-- package.json
    |-- README.md
    |-- vue.config.js
    |-- yarn.lock
    |-- public
    |   |-- favicon.ico
    |   |-- index.html
    |-- server /* node 微服务 */
    |   |-- .gitignore
    |   |-- app.js  // 主入口
    |   |-- package.json
    |   |-- yarn.lock
    |   |-- utils
    |-- src // web 和 electron工程目录
        |-- background.js // electron跟文件
        |-- node_child_process.js // 子进程node微服务
        |-- util.js
        |-- main // electron 文件 需要vue.config.js中配置实时更新 （打包无需配置）
        |   |-- index.js
        |-- preload // electron和web连接层
        |   |-- index.js
        |-- rerender // web前端渲染进程(Vue)
            |-- App.vue
            |-- main.js
            |-- assets
            |   |-- logo.png
            |-- components
                |-- HelloWorld.vue
```