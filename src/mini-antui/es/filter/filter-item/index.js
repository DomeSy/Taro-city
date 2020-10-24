import lifecycle from '../mixins/lifecycle';
Component({
  mixins: [lifecycle],
  data: {
    confirmStyle: ''
  },
  props: {
    className: '',
    item: '',
    id: '',
    value: '',
    selected: false,
    onChange: function onChange() {}
  },
  didMount: function didMount() {
    var _this$data = this.data,
        results = _this$data.results,
        items = _this$data.items;
    var _this$props = this.props,
        selected = _this$props.selected,
        id = _this$props.id,
        value = _this$props.value;

    if (selected) {
      results.push({
        id: id,
        value: value
      });
      items.push({
        id: id,
        value: value,
        setData: this.setData
      });
      this.setData({
        confirmStyle: true
      });
    }
  },
  methods: {
    handleClick: function handleClick() {
      var _this$props2 = this.props,
          id = _this$props2.id,
          value = _this$props2.value,
          onChange = _this$props2.onChange;
      var confirmStyle = this.data.confirmStyle;
      var _this$data2 = this.data,
          results = _this$data2.results,
          items = _this$data2.items,
          commonProps = _this$data2.commonProps;

      if (commonProps.max === 1) {
        if (confirmStyle === '') {
          items.forEach(function (element) {
            element.setData({
              confirmStyle: ''
            });
          });
          results.splice(0, results.length);
          confirmStyle = true;
          results.push({
            id: id,
            value: value
          });
          items.push({
            id: id,
            value: value,
            setData: this.setData
          });
          onChange(results);
        }

        this.setData({
          confirmStyle: confirmStyle
        });
        return;
      }

      if (confirmStyle === '' && results.length < commonProps.max) {
        confirmStyle = true;
        results.push({
          id: id,
          value: value
        });
        items.push({
          id: id,
          value: value,
          setData: this.setData
        });
      } else {
        confirmStyle = '';
        results.some(function (key, index) {
          if (JSON.stringify(key) === JSON.stringify({
            id: id,
            value: value
          })) {
            results.splice(index, 1);
            return true;
          } else {
            return false;
          }
        });
      }

      this.setData({
        confirmStyle: confirmStyle
      });
    }
  }
});