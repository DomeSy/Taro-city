import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { View } from '@tarojs/components';
export default class AtFab extends React.Component {
    onClick(e) {
        if (typeof this.props.onClick === 'function') {
            this.props.onClick(e);
        }
    }
    render() {
        const { size, className, children } = this.props;
        const rootClass = classNames('at-fab', className, {
            [`at-fab--${size}`]: size
        });
        return (React.createElement(View, { className: rootClass, onClick: this.onClick.bind(this) }, children));
    }
}
AtFab.propTypes = {
    size: PropTypes.oneOf(['normal', 'small']),
    onClick: PropTypes.func
};
AtFab.defaultProps = {
    size: 'normal'
};
//# sourceMappingURL=index.js.map