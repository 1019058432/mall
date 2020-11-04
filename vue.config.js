module.exports={
  assetsDir: 'static',
  parallel: false,
  // publicPath: './',//app需要调整目录结构
  configureWebpack:{
    resolve:{
      alias:{
        "assets": "@/assets",
        "components": "@/components",
        "common": "@/common",
        "network": "@/network",
        "views": "@/views"
      }
    }
  }
}
