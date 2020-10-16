import PropTypes from 'prop-types';
import React from 'react';
import { View } from '@tarojs/components';
import { pxTransform } from '../../common/utils';
export default class AtLoading extends React.Component {
    render() {
        const { color, size } = this.props;
        const loadingSize = typeof size === 'string' ? size : String(size);
        const sizeStyle = {
            width: size ? `${pxTransform(parseInt(loadingSize))}` : '',
            height: size ? `${pxTransform(parseInt(loadingSize))}` : ''
        };
        const colorStyle = {
            border: color ? `1px solid ${color}` : '',
            borderColor: color ? `${color} transparent transparent transparent` : ''
        };
        const ringStyle = Object.assign({}, colorStyle, sizeStyle);
        return (React.createElement(View, { className: 'at-loading', style: sizeStyle },
            React.createElement(View, { className: 'at-loading__ring', style: ringStyle }),
            React.createElement(View, { className: 'at-loading__ring', style: ringStyle }),
            React.createElement(View, { className: 'at-loading__ring', style: ringStyle })));
    }
}
AtLoading.defaultProps = {
    size: 0,
    color: ''
};
AtLoading.propTypes = {
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
//# sourceMappingURL=index.js.map