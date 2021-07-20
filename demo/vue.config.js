const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)
const webpack = require('webpack')

module.exports = {
    /* # # 基本路径 */
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    /* # # 输出文件目录--默认dist */
    outputDir: 'dist',
    /* # # 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。*/
    // assetsDir: '',
    /* # # 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。*/
    indexPath: 'index.html',
    /* # 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。
    然而，这也要求 index 的 HTML 是被 Vue CLI 自动生成的。
    如果你无法使用 Vue CLI 生成的 index HTML，你可以通过将这个选项设为 false 来关闭文件名哈希。*/
    filenameHashing: true,
    /* # 构建多页时使用 */
    pages: undefined,
    lintOnSave: true,
    /* # 是否使用包含运行时编译器的Vue核心的构建 */
    runtimeCompiler: false,
    /* # 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。
    如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来 */
    transpileDependencies: [],
    /* # 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。*/
    productionSourceMap: false, 
    /* # 设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性。*/
    crossorigin: undefined,
    /* # 在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)。
    如果你构建后的文件是部署在 CDN 上的，启用该选项可以提供额外的安全性。*/
    integrity: false,
    /* # webpack-dev-server 相关配置 */
    devServer: {
        host: '0.0.0.0',
        port: 9000,
        https: false,
        open: true,
        hotOnly: false,
        proxy: null, // 设置代理
        hot:true
    },
    /* # 对内部的 webpack 配置进行更细粒度的修改。*/
    chainWebpack: (config) => {  
        // 修复HMR
        config.resolve.symlinks(true);
        //修复 Lazy loading routes Error
        config.plugin('html').tap(args => {
            args[0].chunksSortMode = 'none';
            return args;
        });

        // 添加别名
        config.resolve.alias
            .set('@', resolve('src'))
            .set('assets', resolve('src/assets'))
            .set('common', resolve('src/common'))
            .set('components', resolve('src/components'));
    },
    /* # 是否为 Babel 或 TypeScript 使用 thread-loader。*/
    parallel: require('os').cpus().length > 1,
    /* # PWA 插件相关配置 */
    pwa: {},
    /* # 第三方插件配置 */
    pluginOptions: {
        
    }
}
