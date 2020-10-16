import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { View } from '@tarojs/components';
export default class AtList extends React.Component {
    render() {
        const rootClass = classNames('at-list', {
            'at-list--no-border': !this.props.hasBorder
        }, this.props.className);
        return React.createElement(View, { className: rootClass }, this.props.children);
    }
}
AtList.defaultProps = {
    hasBorder: true
};
AtList.propTypes = {
    hasBorder: PropTypes.bool
};
//# sourceMappingURL=index.js.map