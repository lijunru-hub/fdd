Page({
  data: {
    userInfo: {
      name: 'WeChat User',
      role: 'Administrator',
      id: '8849201'
    }
  },
  onLoad: function(options) {},
  onReady: function() {},
  onShow: function() {},
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  onShareAppMessage: function() {},
  goToSettings: function() {
    wx.showToast({ title: 'Settings', icon: 'none' });
  },
  goToProperty: function() {
    wx.navigateTo({ url: '/pages/property/index' });
  },
  goToFinance: function() {
    wx.navigateTo({ url: '/pages/finance/index' });
  },
  goToCycle: function() {
    wx.showToast({ title: '成交周期', icon: 'none' });
  },
  goToReminders: function() {
    wx.navigateTo({ url: '/pages/reminders/index' });
  },
  goToPartners: function() {
    wx.navigateTo({ url: '/pages/partners/index' });
  },
  goToHolders: function() {
    wx.navigateTo({ url: '/pages/holders/index' });
  },
  goToAssistants: function() {
    wx.showToast({ title: '协管人员管理', icon: 'none' });
  },
  confirmLogout: function() {
    wx.showModal({
      title: '确认退出',
      content: '您确定要退出登录吗？',
      confirmText: '退出',
      confirmColor: '#ba1a1a',
      success: function(res) {
        if (res.confirm) {
          wx.showToast({ title: '已退出', icon: 'success' });
        }
      }
    });
  }
});
