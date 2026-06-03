Page({
  data: {
    showMortgageModal: false,
    showRentModal: false,
    mortgageForm: {
      monthlyAmount: '1450.00',
      paymentDay: '28',
      downPayment: '500000.00',
      paidCount: '12',
      totalCount: '360'
    },
    rentForm: {
      monthlyRent: '8000.00',
      rentDay: '5',
      tenantName: '张三',
      phone: '13800138000'
    }
  },
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

  editMortgage: function() {
    this.setData({ showMortgageModal: true });
  },

  closeMortgageModal: function() {
    this.setData({ showMortgageModal: false });
  },

  preventClose: function() {},

  onMortgageInput: function(e) {
    const field = e.currentTarget.dataset.field;
    this.setData({
      [`mortgageForm.${field}`]: e.detail.value
    });
  },

  saveMortgage: function() {
    wx.showToast({ title: '按揭设置已保存', icon: 'success' });
    this.closeMortgageModal();
  },

  viewMortgage: function() {
    wx.showToast({ title: '按揭详情', icon: 'none' });
  },

  editRent: function() {
    this.setData({ showRentModal: true });
  },

  closeRentModal: function() {
    this.setData({ showRentModal: false });
  },

  onRentInput: function(e) {
    const field = e.currentTarget.dataset.field;
    this.setData({
      [`rentForm.${field}`]: e.detail.value
    });
  },

  saveRent: function() {
    wx.showToast({ title: '收租设置已保存', icon: 'success' });
    this.closeRentModal();
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