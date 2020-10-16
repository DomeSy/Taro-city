import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from '@tarojs/components';
export default class AtCountdownItem extends React.Component {
    formatNum(num) {
        return num <= 9 ? `0${num}` : `${num}`;
    }
    render() {
        const { num, separator } = this.props;
        return (React.createElement(View, { className: 'at-countdown__item' },
            React.createElement(View, { className: 'at-countdown__time-box' },
                React.createElement(Text, { className: 'at-countdown__time' }, this.formatNum(num))),
            React.createElement(Text, { className: 'at-countdown__separator' }, separator)));
    }
}
AtCountdownItem.defaultProps = {
    num: 0,
    separator: ':'
};
AtCountdownItem.propTypes = {
    num: PropTypes.number.isRequired,
    separator: PropTypes.string
};
//# sourceMappingURL=index.js.map