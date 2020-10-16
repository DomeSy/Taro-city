import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { View } from '@tarojs/components';
import AtActionSheetBody from './body/index';
import AtActionSheetFooter from './footer/index';
import AtActionSheetHeader from './header/index';
export default class AtActionSheet extends React.Component {
    constructor(props) {
        super(props);
        this.handleClose = () => {
            if (typeof this.props.onClose === 'function') {
                this.props.onClose();
            }
        };
        this.handleCancel = () => {
            if (typeof this.props.onCancel === 'function') {
                return this.props.onCancel();
            }
            this.close();
        };
        this.close = () => {
            this.setState({
                _isOpened: false
            }, this.handleClose);
        };
        this.handleTouchMove = (e) => {
            e.stopPropagation();
            e.preventDefault();
        };
        const { isOpened } = props;
        this.state = {
            _isOpened: isOpened
        };
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        const { isOpened } = nextProps;
        if (isOpened !== this.state._isOpened) {
            this.setState({
                _isOpened: isOpened
            });
            !isOpened && this.handleClose();
        }
    }
    render() {
        const { title, cancelText, className } = this.props;
        const { _isOpened } = this.state;
        const rootClass = classNames('at-action-sheet', {
            'at-action-sheet--active': _isOpened
        }, className);
        return (React.createElement(View, { className: rootClass, onTouchMove: this.handleTouchMove },
            React.createElement(View, { onClick: this.close, className: 'at-action-sheet__overlay' }),
            React.createElement(View, { className: 'at-action-sheet__container' },
                title && React.createElement(AtActionSheetHeader, null, title),
                React.createElement(AtActionSheetBody, null, this.props.children),
                cancelText && (React.createElement(AtActionSheetFooter, { onClick: this.handleCancel }, cancelText)))));
    }
}
AtActionSheet.defaultProps = {
    title: '',
    cancelText: '',
    isOpened: false
};
AtActionSheet.propTypes = {
    title: PropTypes.string,
    onClose: PropTypes.func,
    onCancel: PropTypes.func,
    isOpened: PropTypes.bool.isRequired,
    cancelText: PropTypes.string
};
//# sourceMappingURL=index.js.map