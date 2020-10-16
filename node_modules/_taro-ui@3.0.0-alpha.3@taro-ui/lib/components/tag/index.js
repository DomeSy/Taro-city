import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { View } from '@tarojs/components';
const SIZE_CLASS = {
    normal: 'normal',
    small: 'small'
};
const TYPE_CLASS = {
    primary: 'primary'
};
export default class AtTag extends React.Component {
    onClick(event) {
        const { name = '', active = false, disabled, onClick } = this.props;
        if (!disabled) {
            typeof onClick === 'function' &&
                onClick({
                    name,
                    active
                }, event);
        }
    }
    render() {
        const { size = 'normal', type = '', circle = false, disabled = false, active = false, customStyle } = this.props;
        const rootClassName = ['at-tag'];
        const classObject = {
            [`at-tag--${SIZE_CLASS[size]}`]: SIZE_CLASS[size],
            [`at-tag--${type}`]: TYPE_CLASS[type],
            'at-tag--disabled': disabled,
            'at-tag--active': active,
            'at-tag--circle': circle
        };
        return (React.createElement(View, { className: classNames(rootClassName, classObject, this.props.className), style: customStyle, onClick: this.onClick.bind(this) }, this.props.children));
    }
}
AtTag.defaultProps = {
    size: 'normal',
    type: '',
    name: '',
    circle: false,
    active: false,
    disabled: false,
    customStyle: {}
};
AtTag.propTypes = {
    size: PropTypes.oneOf(['normal', 'small']),
    type: PropTypes.oneOf(['', 'primary']),
    name: PropTypes.string,
    circle: PropTypes.bool,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    onClick: PropTypes.func
};
//# sourceMappingURL=index.js.map