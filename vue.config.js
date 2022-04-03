const { defineConfig } = require('@vue/cli-service')
module.exports = {
  devServer:{

    port:9001,
    proxy:{
      '/api':{
        target:'http://192.168.0.15:1247',
        changeOrigin:true
      },
      '/admin':{
        target:'http://192.168.0.15:1247',
        changeOrigin:true
      }
    }
  }
}

