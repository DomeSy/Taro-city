import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from '@tarojs/components';
import AtLoading from '../loading/index';
export default class AtActivityIndicator extends React.Component {
    render() {
        const { color, size, mode, content, isOpened } = this.props;
        const rootClass = classNames('at-activity-indicator', {
            'at-activity-indicator--center': mode === 'center',
            'at-activity-indicator--isopened': isOpened
        }, this.props.className);
        return (React.createElement(View, { className: rootClass },
            React.createElement(View, { className: 'at-activity-indicator__body' },
                React.createElement(AtLoading, { size: size, color: color })),
            content && (React.createElement(Text, { className: 'at-activity-indicator__content' }, content))));
    }
}
AtActivityIndicator.defaultProps = {
    size: 0,
    mode: 'normal',
    color: '',
    content: '',
    className: '',
    isOpened: true
};
AtActivityIndicator.propTypes = {
    size: PropTypes.number,
    mode: PropTypes.string,
    color: PropTypes.string,
    content: PropTypes.string,
    className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
    isOpened: PropTypes.bool
};
//# sourceMappingURL=index.js.map