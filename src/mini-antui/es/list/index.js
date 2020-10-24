Component({
  props: {
    className: '',
    loadMore: false,
    loadContent: ['', '']
  },
  data: {
    loadContent: ['加载更多...', '-- 数据加载完了 --']
  },
  didMount: function didMount() {
    var loadTxt = this.props.loadContent[0] ? this.props.loadContent[0] : this.data.loadContent[0];
    var overTxt = this.props.loadContent[1] ? this.props.loadContent[1] : this.data.loadContent[1];
    this.setData({
      loadContent: [loadTxt, overTxt]
    });
  },
  didUpdate: function didUpdate() {
    var loadTxt = this.props.loadContent[0] ? this.props.loadContent[0] : this.data.loadContent[0];
    var overTxt = this.props.loadContent[1] ? this.props.loadContent[1] : this.data.loadContent[1];

    if (loadTxt !== this.data.loadContent[0] || overTxt !== this.data.loadContent[1]) {
      this.setData({
        loadContent: [loadTxt, overTxt]
      });
    }
  }
});