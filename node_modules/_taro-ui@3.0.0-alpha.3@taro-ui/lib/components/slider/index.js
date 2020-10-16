import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Slider, View } from '@tarojs/components';
export default class AtSlider extends React.Component {
    constructor(props) {
        super(props);
        const { value = 0, min = 0, max = 100 } = props;
        this.state = {
            _value: AtSlider.clampNumber(value, min, max)
        };
    }
    static clampNumber(value, lower, upper) {
        return Math.max(lower, Math.min(upper, value));
    }
    handleChanging(e) {
        const { _value } = this.state;
        const { value } = e.detail;
        if (value !== _value) {
            this.setState({ _value: value });
        }
        this.props.onChanging && this.props.onChanging(value);
    }
    handleChange(e) {
        const { value } = e.detail;
        this.setState({ _value: value });
        this.props.onChange && this.props.onChange(value);
    }
    UNSAFE_componentWillReceiveProps(props) {
        const { value = 0, min = 0, max = 100 } = props;
        this.setState({
            _value: AtSlider.clampNumber(value, min, max)
        });
    }
    render() {
        const { _value } = this.state;
        const { customStyle, className, min, max, step, disabled, activeColor, backgroundColor, blockSize, blockColor, showValue } = this.props;
        return (React.createElement(View, { className: classNames({
                'at-slider': true,
                'at-slider--disabled': disabled
            }, className), style: customStyle },
            React.createElement(View, { className: 'at-slider__inner' },
                React.createElement(Slider, { min: min, max: max, step: step, value: _value, disabled: disabled, activeColor: activeColor, backgroundColor: backgroundColor, blockSize: blockSize, blockColor: blockColor, onChanging: this.handleChanging.bind(this), onChange: this.handleChange.bind(this) })),
            showValue && React.createElement(View, { className: 'at-slider__text' }, `${_value}`)));
    }
}
AtSlider.defaultProps = {
    customStyle: '',
    className: '',
    min: 0,
    max: 100,
    step: 1,
    value: 0,
    disabled: false,
    activeColor: '#6190e8',
    backgroundColor: '#e9e9e9',
    blockSize: 28,
    blockColor: '#ffffff',
    showValue: false
};
AtSlider.propTypes = {
    customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    value: PropTypes.number,
    disabled: PropTypes.bool,
    activeColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    blockSize: PropTypes.number,
    blockColor: PropTypes.string,
    showValue: PropTypes.bool,
    onChange: PropTypes.func,
    onChanging: PropTypes.func
};
//# sourceMappingURL=index.js.map