Component({
  props: {
    title: '',
    onClick: function onClick() {},
    info: ''
  },
  methods: {
    onCardClick: function onCardClick() {
      var _this$props = this.props,
          info = _this$props.info,
          onClick = _this$props.onClick;
      onClick({
        info: info
      });
    }
  }
});