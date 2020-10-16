import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { View } from '@tarojs/components';
export default class AtBadge extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    formatValue(value, maxValue) {
        if (value === '' || value === null || typeof value === 'undefined')
            return '';
        const numValue = +value;
        if (Number.isNaN(numValue)) {
            return value;
        }
        return numValue > maxValue ? `${maxValue}+` : numValue;
    }
    render() {
        const { dot, value, maxValue = 99, customStyle } = this.props;
        const rootClassName = ['at-badge'];
        const val = this.formatValue(value, maxValue);
        return (React.createElement(View, { className: classNames(rootClassName, this.props.className), style: customStyle },
            this.props.children,
            dot ? (React.createElement(View, { className: 'at-badge__dot' })) : (val !== '' && React.createElement(View, { className: 'at-badge__num' }, val))));
    }
}
AtBadge.defaultProps = {
    dot: false,
    value: '',
    maxValue: 99,
    customStyle: {},
    className: ''
};
AtBadge.propTypes = {
    dot: PropTypes.bool,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    maxValue: PropTypes.number,
    customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    className: PropTypes.oneOfType([PropTypes.array, PropTypes.string])
};
//# sourceMappingURL=index.js.map