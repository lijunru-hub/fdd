Page({
  data: {
    holderStatus: 'active'
  },
  onLoad: function(options) {},
  onReady: function() {},
  onShow: function() {},
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  onShareAppMessage: function() {},
  goBack: function() {
    wx.navigateBack();
  },
  addHolder: function() {
    wx.showToast({ title: '新增代持人', icon: 'none' });
  },
  viewDocuments: function() {
    wx.showToast({ title: '查看证件', icon: 'none' });
  },
  editHolder: function() {
    wx.showToast({ title: '编辑代持人', icon: 'none' });
  },
  deleteHolder: function() {
    wx.showModal({
      title: '确认删除',
      content: '确定要删除该代持人吗？',
      confirmText: '删除',
      confirmColor: '#ba1a1a',
      success: function(res) {
        if (res.confirm) {
          wx.showToast({ title: '删除成功', icon: 'success' });
        }
      }
    });
  },
  toggleStatus: function() {
    var status = this.data.holderStatus === 'active' ? 'disabled' : 'active';
    this.setData({ holderStatus: status });
    wx.showToast({ title: '状态已' + (status === 'active' ? '启用' : '禁用'), icon: 'none' });
  }
});
