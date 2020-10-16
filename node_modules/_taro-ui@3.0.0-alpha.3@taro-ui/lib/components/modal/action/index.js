import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { View } from '@tarojs/components';
export default class AtModalAction extends React.Component {
    render() {
        const rootClass = classNames('at-modal__footer', {
            'at-modal__footer--simple': this.props.isSimple
        }, this.props.className);
        return (React.createElement(View, { className: rootClass },
            React.createElement(View, { className: 'at-modal__action' }, this.props.children)));
    }
}
AtModalAction.defaultProps = {
    isSimple: false
};
AtModalAction.propTypes = {
    isSimple: PropTypes.bool
};
//# sourceMappingURL=index.js.map