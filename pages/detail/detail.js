// pages/detail/detail.js
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
var now = new Date();
var year = now.getFullYear();       //年
var month = now.getMonth() + 1;     //月
var day = now.getDay();            //日
var hh = now.getHours();            //时

Page({

  data: {
    grids: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    tabs: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
    applicationTime: [ { time: "12:00" }, { time: "12:30" }, { time: "13:00" }, { time: "13:30" }, { time: "14:00" }, { time: "14:30" }, { time: "15:00" }, { time: "15:30" }, { time: "16:00" }, { time: "17:30" }, { time: "18:00" }, { time: "18:30" }, { time: "19:00" }, { time: "19:30" }, { time: "20:00" }, { time: "20:30" }, { time: "21:00" }],
    activeIndex: 1,
    sliderOffset: 0,
    sliderLeft: 0
  },
  onLoad: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  CurentTime: function (){ 
    
    var mm = now.getMinutes();          //分
    var ss = now.getSeconds();           //秒

    var clock = year + "-";
        
    if(month < 10)
            clock += "0";
        
    clock += month + "-";
        
    if(day < 10)
            clock += "0";
            
    clock += day + " ";
        
    if(hh < 10)
            clock += "0";
            
    clock += hh + ":";
    if(mm < 10) clock += '0'; 
    clock += mm + ":"; 
         
    if(ss < 10) clock += '0'; 
    clock += ss; 
    return(clock);
  }
})