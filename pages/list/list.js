//index.js
//获取应用实例
var Bmob = require('../../utils/bmob.js');
var common = require('../../utils/common.js');
var app = getApp();
var that;
Page({
  data: {
    loading: false,
    windowHeight: 0,
    windowWidth: 0,
    limit: 10,
    userInfo: 10,
    teaList: {}
  },
  onLoad: function () {

    that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      console.log(userInfo)
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })

  },
  noneWindows: function () {
  },
  onShow: function () {

    var Teacher = Bmob.Object.extend("TEACHER");
    var query = new Bmob.Query(Teacher);


    // 查询所有数据
    query.limit(that.data.limit);
    query.find({
      success: function (results) {



        that.setData({
          teaList: results
        })
      },
      error: function (error) {
        console.log("查询失败: " + error.code + " " + error.message);
      }
    });
    wx.getSystemInfo({
      success: (res) => {
        that.setData({
          windowHeight: res.windowHeight,
          windowWidth: res.windowWidth
        })
      }
    })


  },
  pullUpLoad: function (e) {
    var limit = that.data.limit + 2
    this.setData({
      limit: limit
    })
    this.onShow()
  },
  
  closeLayer: function () {
    
  }
  
})
