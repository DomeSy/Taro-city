export default {
  data: {
    results: [],
    items: [],
    commonProps: {
      max: 10000
    }
  },
  didUnmount: function didUnmount() {
    var _this$data = this.data,
        items = _this$data.items,
        results = _this$data.results;
    results.splice(0, results.length);
    items.splice(0, items.length);
  }
};