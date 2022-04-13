const { defineConfig } = require('@vue/cli-service')
module.exports = {
  devServer:{

    port:9001,
    proxy:{
      '/api':{
        target:'http://newkayak.iptime.org:1247/',
        changeOrigin:true
      },
      '/admin':{
        target:'http://newkayak.iptime.org:1247/',
        changeOrigin:true
      }
    }
  }
}

