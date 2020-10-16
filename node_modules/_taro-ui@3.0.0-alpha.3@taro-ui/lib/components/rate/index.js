import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from '@tarojs/components';
import { pxTransform } from '../../common/utils';
export default class AtRate extends React.Component {
    handleClick(event) {
        this.props.onChange && this.props.onChange(event);
    }
    render() {
        const { customStyle, className, value = 0, max = 5, size, margin = 5 } = this.props;
        const iconStyle = {
            marginRight: pxTransform(margin)
        };
        const starIconStyle = {
            fontSize: size ? `${size}px` : ''
        };
        // 生成星星颜色 className 数组，方便在jsx中直接map
        const classNameArr = [];
        const floorValue = Math.floor(value);
        const ceilValue = Math.ceil(value);
        for (let i = 0; i < max; i++) {
            if (floorValue > i) {
                classNameArr.push('at-rate__icon at-rate__icon--on');
            }
            else if (ceilValue - 1 === i) {
                classNameArr.push('at-rate__icon at-rate__icon--half');
            }
            else {
                classNameArr.push('at-rate__icon at-rate__icon--off');
            }
        }
        return (React.createElement(View, { className: classNames('at-rate', className), style: customStyle }, classNameArr.map((cls, i) => (React.createElement(View, { className: cls, key: `at-rate-star-${i}`, style: iconStyle, onClick: this.handleClick.bind(this, i + 1) },
            React.createElement(Text, { className: 'at-icon at-icon-star-2', style: starIconStyle }),
            React.createElement(View, { className: 'at-rate__left' },
                React.createElement(Text, { className: 'at-icon at-icon-star-2', style: starIconStyle })))))));
    }
}
AtRate.defaultProps = {
    customStyle: '',
    className: '',
    size: 0,
    value: 0,
    max: 5,
    margin: 5
};
AtRate.propTypes = {
    customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    value: PropTypes.number,
    max: PropTypes.number,
    margin: PropTypes.number,
    onChange: PropTypes.func
};
//# sourceMappingURL=index.js.map