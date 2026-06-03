Page({
  data: {
    showModal: false,
    deleteName: '',
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
  goBack: function() {
    wx.navigateBack();
  },
  addPartner: function() {
    wx.showToast({ title: '新增合伙人', icon: 'none' });
  },
  onSearchInput: function(e) {
    this.setData({ searchKeyword: e.detail.value });
  },
  showFilter: function() {
    wx.showToast({ title: '筛选', icon: 'none' });
  },
  editPartner: function(e) {
    var name = e.currentTarget.dataset.name;
    wx.showToast({ title: '编辑: ' + name, icon: 'none' });
  },
  showDeleteConfirm: function(e) {
    var name = e.currentTarget.dataset.name;
    this.setData({ showModal: true, deleteName: name });
  },
  hideDeleteConfirm: function() {
    this.setData({ showModal: false });
  },
  confirmDelete: function() {
    wx.showToast({ title: '删除成功', icon: 'success' });
    this.setData({ showModal: false });
  }
});
