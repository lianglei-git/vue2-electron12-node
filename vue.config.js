module.exports = {
    outputDir: 'dist/render',
    publicPath: './',
    pluginOptions: {
        electronBuilder: {
            preload: { preload: 'src/preload/index.js' }, // , otherPreload: 'src/preload2.js'
            builderOptions: {
                'appId': 'com.wyDemo', //包名,程序的唯一标识符
                'productName': 'wyDemo', // 项目名，也是生成的安装文件名，即wyDemo.exe
                'copyright': 'ddx Copyright © 2020', // 版权信息
                'files': [
                    './**/*'
                ],
                'extraFiles': [ // 把指定的资源复制到程序根目录，即把server文件夹的内容复制到程序根目录，这里server文件夹下的内容相当于我的后台，我在background.js中有相应的处理。
                    './server'
                ],
                'directories': {
                    'output': './dists' // 输出文件路径
                },
                'win': { // win相关配置
                    'icon': './favicon.ico', // 图标，当前图标在根目录下，注意图标格式，保证图标存在；
                    "requestedExecutionLevel": "requireAdministrator", //获取管理员权限
                    'target': [{
                        'target': 'nsis', // 利用nsis制作安装程序
                        'arch': [ // 这个意思是打出来32 bit + 64 bit的包，但是这样打包出来的安装包体积比较大
                            'x64', // 64位
                            'ia32'
                        ]
                    }]
                },
                'nsis': {
                    'oneClick': false, // 是否一键安装
                    'allowElevation': true, // 允许请求提升。 如果为false，则用户必须使用提升的权限重新启动安装程序。
                    'allowToChangeInstallationDirectory': true, // 允许修改安装目录
                    'installerIcon': './favicon.ico', // 安装图标
                    'uninstallerIcon': './favicon.ico', // 卸载图标
                    'installerHeaderIcon': './favicon.ico', // 安装时头部图标
                    'createDesktopShortcut': true, // 创建桌面图标
                    'createStartMenuShortcut': true, // 创建开始菜单图标
                    'shortcutName': 'wyDemo' // 图标名称(项目名称)
                }
            }
        }
    },
    pages: {
        index: {
            entry: "src/rerender/main.js"
        }
    },
    configureWebpack: {
        
    }
}