// app.js
App({
  // 引入`towxml3.0`解析方法
  towxml:require('/towxml/index'),
  globalData: {
    token: '',
    userInfo: null,
    host: '124.70.47.51'
  },
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    
    
  },
  
})
