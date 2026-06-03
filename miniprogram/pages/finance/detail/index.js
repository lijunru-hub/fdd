Page({
  data: {},
  onLoad: function(options) {
    if (options.id) {
      console.log('房源账本ID:', options.id);
    }
  },
  onReady: function() {},
  onShow: function() {},
  onHide: function() {},
  onUnload: function() {},

  goBack: function() {
    wx.navigateBack();
  },

  viewReminders: function() {
    wx.showToast({ title: '待提醒详情', icon: 'none' });
  },

  viewMortgage: function() {
    wx.showToast({ title: '按揭详情', icon: 'none' });
  },

  viewRent: function() {
    wx.showToast({ title: '收租详情', icon: 'none' });
  },

  addIncome: function() {
    wx.showToast({ title: '新增收入', icon: 'none' });
  },

  addExpense: function() {
    wx.showToast({ title: '新增支出', icon: 'none' });
  },

  addReminder: function() {
    wx.showToast({ title: '新增提醒', icon: 'none' });
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