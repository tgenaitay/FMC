// pages/stories/stories.js

const app = getApp();

Page({

  /**
   * Page initial data
   */
  data: {
    
    tagline: app.globalData.tagline,

    fmc: { content: "OMG!", name:'Luke'},

    stories:
      [
        
      ]

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

    let stories = wx.getStorageSync("stories") || []

    console.log(stories)

    this.setData({
      stories: stories
    })

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})