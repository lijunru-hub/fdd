Page({
  data: {
    showCompleteModal: false,
    completeDate: '',
    uploadedImages: [],
    remark: ''
  },
  onLoad: function(options) {},
  onReady: function() {},
  onShow: function() {},
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  onShareAppMessage: function() {},

  addReminder: function() {
    wx.showToast({ title: '新增代办', icon: 'none' });
  },

  markComplete: function() {
    this.setData({
      showCompleteModal: true,
      completeDate: '',
      uploadedImages: [],
      remark: ''
    });
  },

  viewDetail: function() {
    wx.showToast({ title: '查看详情', icon: 'none' });
  },

  closeModal: function() {
    this.setData({
      showCompleteModal: false
    });
  },

  preventClose: function() {},

  onDateChange: function(e) {
    this.setData({
      completeDate: e.detail.value
    });
  },

  chooseImage: function() {
    const that = this;
    wx.chooseImage({
      count: 9 - that.data.uploadedImages.length,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function(res) {
        const tempFilePaths = res.tempFilePaths;
        that.setData({
          uploadedImages: that.data.uploadedImages.concat(tempFilePaths)
        });
      }
    });
  },

  previewImage: function(e) {
    const index = e.currentTarget.dataset.index;
    const images = this.data.uploadedImages;
    wx.previewImage({
      current: images[index],
      urls: images
    });
  },

  deleteImage: function(e) {
    const index = e.currentTarget.dataset.index;
    const images = this.data.uploadedImages;
    images.splice(index, 1);
    this.setData({
      uploadedImages: images
    });
  },

  onRemarkInput: function(e) {
    this.setData({
      remark: e.detail.value
    });
  },

  confirmComplete: function() {
    if (!this.data.completeDate) {
      wx.showToast({ title: '请选择完成日期', icon: 'none' });
      return;
    }
    wx.showToast({ title: '已标记完成', icon: 'success' });
    this.closeModal();
  },

  goToProperty: function() {
    wx.navigateTo({ url: '/pages/property/index' });
  },

  goToFinance: function() {
    wx.navigateTo({ url: '/pages/finance/index' });
  },

  goToProfile: function() {
    wx.navigateTo({ url: '/pages/profile/index' });
  }
});