import fmtEvent from '../_util/fmtEvent';
Component({
  props: {
    className: '',
    value: '',
    placeholder: '',
    onSelect: function onSelect() {},
    labelCls: '',
    pickerCls: ''
  },
  methods: {
    onPickerTap: function onPickerTap(e) {
      var event = fmtEvent(this.props, e);
      this.props.onPickerTap(event);
    }
  }
});