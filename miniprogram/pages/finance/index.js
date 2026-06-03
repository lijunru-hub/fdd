Page({
  data: {},
  onLoad: function(options) {},
  onReady: function() {},
  onShow: function() {},
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  onShareAppMessage: function() {},

  viewLedgerDetail: function(e) {
    const id = e.currentTarget.dataset.id || 1;
    wx.navigateTo({ url: `/pages/finance/detail/index?id=${id}` });
  },

  goToProperty: function() {
    wx.navigateTo({ url: '/pages/property/index' });
  },

  goToReminders: function() {
    wx.navigateTo({ url: '/pages/reminders/index' });
  },

  goToProfile: function() {
    wx.navigateTo({ url: '/pages/profile/index' });
  }
});