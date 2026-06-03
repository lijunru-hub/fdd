Page({
  data: {
    property: {
      id: 1,
      title: '阳光花园小区 3室2厅2卫',
      price: 850,
      unitPrice: 70833,
      location: '北京市朝阳区望京街道阳光花园小区12号楼',
      tags: ['精装', '南北通透', '学区房', '地铁口'],
      area: 120,
      rooms: '3室',
      halls: '2厅',
      bathrooms: '2卫',
      floor: '15层',
      direction: '南北',
      buildYear: 2018,
      decoration: '精装',
      description: '该房源位于望京核心地段，交通便利，紧邻地铁14号线望京南站。小区环境优美，绿化率高，配套设施完善。房屋为精装修，家具家电齐全，可拎包入住。学区划片重点小学，适合有孩子的家庭。南北通透户型，采光极佳，视野开阔。业主诚心出售，价格可谈。',
      agent: {
        name: '张经理',
        phone: '138****5678'
      }
    }
  },
  onLoad: function(options) {
    if (options.id) {
      console.log('房源ID:', options.id);
    }
  },
  onReady: function() {},
  onShow: function() {},
  onHide: function() {},
  onUnload: function() {},

  goBack: function() {
    wx.navigateBack();
  },

  shareProperty: function() {
    wx.showToast({ title: '分享功能', icon: 'none' });
  },

  collectProperty: function() {
    wx.showToast({ title: '已收藏', icon: 'success' });
  },

  callAgent: function() {
    wx.makePhoneCall({
      phoneNumber: '13800138000',
      success: function() {
        console.log('拨打电话成功');
      },
      fail: function() {
        wx.showToast({ title: '拨打电话失败', icon: 'none' });
      }
    });
  },

  chatAgent: function() {
    wx.showToast({ title: '咨询经纪人', icon: 'none' });
  },

  viewProperty: function() {
    wx.showToast({ title: '预约看房成功', icon: 'success' });
  }
});