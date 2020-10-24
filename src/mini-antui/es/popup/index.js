Component({
  props: {
    className: '',
    show: false,
    position: 'bottom',
    mask: true,
    animation: true,
    disableScroll: true
  },
  methods: {
    onMaskTap: function onMaskTap() {
      var _this$props = this.props,
          onClose = _this$props.onClose,
          animation = _this$props.animation;

      if (onClose) {
        if (animation) {
          onClose();
        } else {
          setTimeout(function () {
            onClose();
          }, 200);
        }
      }
    }
  }
});