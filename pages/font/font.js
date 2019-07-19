// pages/font/font.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '/imgicon/banner-1.png',
      '/imgicon/banner-2.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    moviePrimyImg: '/imgicon/movie-1.png',
    moviePrimyMes: '请回答1988,是韩国tvN有线台于2015年11月6日起在金土档播出的青春怀旧剧，由申源浩执导，李有贞 编剧，李惠利、朴宝剑、柳俊烈、高庚杓等主演,该剧主要讲述了1988年在首尔市道峰区双门洞居住的五家人的故事，描绘温暖的亲情、邻里街坊小市民传统的爱情与友情的故事',
    moviePrimyMesT: '',
    movieName: '请回答1988',
    mesShow: '更多'


  },
  showMovieMes: function() {
    let movieMes = this.data.moviePrimyMes.slice(0, 105);
    this.setData({
      moviePrimyMesT: movieMes,
      mesShow: '更多'
    })
  },

  showMovieMesAll: function() {
    if (this.data.moviePrimyMesT.length !== 105) {
      this.showMovieMes()
    } else {
      this.setData({
        moviePrimyMesT: this.data.moviePrimyMes,
        mesShow: '收起'
      })
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.showMovieMes()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})