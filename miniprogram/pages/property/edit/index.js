Page({
  data: {
    formData: {
      buyDate: '',
      totalPrice: '',
      downPayment: '',
      loanAmount: '',
      city: '',
      district: '',
      address: '',
      area: '',
      houseType: '',
      holder: '',
      agencyFee: '',
      agencyPhone: '',
      partners: [
        { name: '', share: '', investment: '' }
      ],
      photos: [],
      documents: [],
      documentLocation: '',
      remark: ''
    }
  },
  onLoad: function(options) {
    if (options.id) {
      console.log('编辑房源ID:', options.id);
    }
  },
  onReady: function() {},
  onShow: function() {},
  onHide: function() {},
  onUnload: function() {},

  goBack: function() {
    wx.navigateBack();
  },

  addPartner: function() {
    const partners = [...this.data.formData.partners, { name: '', share: '', investment: '' }];
    this.setData({
      'formData.partners': partners
    });
  },

  removePartner: function(e) {
    const index = e.currentTarget.dataset.index || this.data.formData.partners.length - 1;
    const partners = this.data.formData.partners.filter((_, i) => i !== index);
    this.setData({
      'formData.partners': partners.length > 0 ? partners : [{ name: '', share: '', investment: '' }]
    });
  },

  uploadImage: function() {
    wx.chooseImage({
      count: 9,
      success: function(res) {
        console.log('选择图片:', res.tempFilePaths);
        wx.showToast({ title: '图片上传成功', icon: 'success' });
      },
      fail: function() {
        wx.showToast({ title: '图片选择失败', icon: 'none' });
      }
    });
  },

  uploadFile: function() {
    wx.showToast({ title: '文件上传功能', icon: 'none' });
  },

  submitForm: function() {
    wx.showLoading({ title: '提交中...' });
    setTimeout(() => {
      wx.hideLoading();
      wx.showToast({ title: '保存成功', icon: 'success' });
      setTimeout(() => {
        wx.navigateBack();
      }, 1500);
    }, 1000);
  }
});