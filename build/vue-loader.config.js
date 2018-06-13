// const docsLoader = require.resolve('./doc-loader')

module.exports = (isDev) => {
  return {
    preserveWhitepace: true,
    extractCSS: !isDev,
    cssModules: {
      localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
      camelCase: true
    },
    // loaders: {
    //   'docs': docsLoader
    //   //js: 'coffee-loader',
    // }
    // preLoader/postLoader: {//在loader之前解析或者在loader之后解析
          // js:'tsloader'
    // }
    // hotReload: false, // 根据环境变量生成
  }
}