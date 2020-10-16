import classNames from 'classnames';
import React from 'react';
import { View } from '@tarojs/components';
export default class AtModalHeader extends React.Component {
    render() {
        const rootClass = classNames('at-modal__header', this.props.className);
        return React.createElement(View, { className: rootClass }, this.props.children);
    }
}
//# sourceMappingURL=index.js.map