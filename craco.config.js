// 添加自定义的webpack配置
/*
    安装 @craco/craco
    然后在package.json文件里将 react-scripts 命令替换成 craco, 具体见文件里
*/

const path = require('path')

module.exports = {
    // webpack配置
    webpack: {
        // 配置别名
        // 配置完别名，可以在jsconfig.json里进行配置(具体见文件中)，可以在使用时有路径提示，和消除警告
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    }
}