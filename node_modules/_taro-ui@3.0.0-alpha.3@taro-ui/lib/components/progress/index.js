import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from '@tarojs/components';
export default class AtProgress extends React.Component {
    render() {
        const { color } = this.props;
        let { percent } = this.props;
        const { strokeWidth, status, isHidePercent } = this.props;
        if (typeof percent !== 'number') {
            percent = 0;
        }
        if (percent < 0) {
            percent = 0;
        }
        else if (percent > 100) {
            percent = 100;
        }
        const rootClass = classNames('at-progress', {
            [`at-progress--${status}`]: !!status
        }, this.props.className);
        const iconClass = classNames('at-icon', {
            'at-icon-close-circle': status === 'error',
            'at-icon-check-circle': status === 'success'
        });
        const progressStyle = {
            width: percent && `${+percent}%`,
            height: strokeWidth && `${+strokeWidth}px`,
            backgroundColor: color
        };
        return (React.createElement(View, { className: rootClass },
            React.createElement(View, { className: 'at-progress__outer' },
                React.createElement(View, { className: 'at-progress__outer-inner' },
                    React.createElement(View, { className: 'at-progress__outer-inner-background', style: progressStyle }))),
            !isHidePercent && (React.createElement(View, { className: 'at-progress__content' }, !status || status === 'progress' ? (`${percent}%`) : (React.createElement(Text, { className: iconClass }))))));
    }
}
AtProgress.propTypes = {
    color: PropTypes.string,
    status: PropTypes.string,
    percent: PropTypes.number,
    strokeWidth: PropTypes.number,
    isHidePercent: PropTypes.bool
};
//# sourceMappingURL=index.js.map