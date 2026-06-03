Page({
  data: {
    searchKeyword: ''
  },
  onLoad: function(options) {},
  onReady: function() {},
  onShow: function() {},
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  onShareAppMessage: function() {},

  handleDownload: function() {
    wx.showToast({ title: '下载功能', icon: 'none' });
  },

  addProperty: function() {
    wx.navigateTo({ url: '/pages/property/edit/index' });
  },

  editProperty: function(e) {
    const id = e.currentTarget.dataset.id || 1;
    wx.navigateTo({ url: `/pages/property/edit/index?id=${id}` });
  },

  viewLedger: function() {
    wx.showToast({ title: '账本详情', icon: 'none' });
  },

  archiveProperty: function() {
    wx.showToast({ title: '已归档', icon: 'success' });
  },

  viewDetail: function(e) {
    const id = e.currentTarget.dataset.id || e.currentTarget.parentElement.dataset.id || e.currentTarget.parentElement.parentElement.dataset.id;
    wx.navigateTo({ url: `/pages/property/detail/index?id=${id || 1}` });
  },

  goToDetail: function(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({ url: `/pages/property/detail/index?id=${id}` });
  },

  goToFinance: function() {
    wx.navigateTo({ url: '/pages/finance/index' });
  },

  goToReminders: function() {
    wx.navigateTo({ url: '/pages/reminders/index' });
  },

  goToProfile: function() {
    wx.navigateTo({ url: '/pages/profile/index' });
  }
});