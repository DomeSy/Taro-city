import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Image, Text, View } from '@tarojs/components';
import statusImg from './img.json';
export default class AtToast extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = (event) => {
            const { onClick, status } = this.props;
            if (status === 'loading') {
                return;
            }
            if (onClick) {
                return onClick(event);
            }
            this.close();
        };
        const { isOpened, duration } = props;
        if (isOpened) {
            this.makeTimer(duration || 0);
        }
        this._timer = null;
        this.state = {
            _isOpened: isOpened
        };
    }
    clearTimmer() {
        if (this._timer) {
            clearTimeout(this._timer);
            this._timer = null;
        }
    }
    makeTimer(duration) {
        if (duration === 0) {
            return;
        }
        this._timer = setTimeout(() => {
            this.close();
        }, +duration);
    }
    close() {
        const { _isOpened } = this.state;
        if (_isOpened) {
            this.setState({
                _isOpened: false
            }, this.handleClose // TODO: Fix dirty hack
            );
            this.clearTimmer();
        }
    }
    handleClose(event) {
        // TODO: Fix dirty hack
        if (typeof this.props.onClose === 'function') {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            this.props.onClose(event);
        }
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        const { isOpened, duration } = nextProps;
        if (!isOpened) {
            this.close();
            return;
        }
        if (!this.state._isOpened) {
            this.setState({
                _isOpened: true
            });
        }
        else {
            this.clearTimmer();
        }
        this.makeTimer(duration || 0);
    }
    render() {
        const { _isOpened } = this.state;
        const { customStyle, text, icon, status, image, hasMask } = this.props;
        /* eslint-disable @typescript-eslint/no-non-null-assertion */
        const realImg = image || statusImg[status] || null;
        const isRenderIcon = !!(icon && !(image || statusImg[status]));
        /* eslint-enable @typescript-eslint/no-non-null-assertion */
        const bodyClass = classNames('toast-body', {
            'at-toast__body--custom-image': image,
            'toast-body--text': !realImg && !icon,
            [`at-toast__body--${status}`]: !!status
        });
        const iconClass = classNames('at-icon', {
            [`at-icon-${icon}`]: icon
        });
        return _isOpened ? (React.createElement(View, { className: classNames('at-toast', this.props.className) },
            hasMask && React.createElement(View, { className: 'at-toast__overlay' }),
            React.createElement(View, { className: bodyClass, style: customStyle, onClick: this.handleClick },
                React.createElement(View, { className: 'toast-body-content' },
                    realImg ? (React.createElement(View, { className: 'toast-body-content__img' },
                        React.createElement(Image, { className: 'toast-body-content__img-item', src: realImg, mode: 'scaleToFill' }))) : null,
                    isRenderIcon && (React.createElement(View, { className: 'toast-body-content__icon' },
                        React.createElement(Text, { className: iconClass }))),
                    text && (React.createElement(View, { className: 'toast-body-content__info' },
                        React.createElement(Text, null, text))))))) : null;
    }
}
AtToast.defaultProps = {
    duration: 3000,
    isOpened: false
};
AtToast.propTypes = {
    text: PropTypes.string,
    icon: PropTypes.string,
    hasMask: PropTypes.bool,
    image: PropTypes.string,
    isOpened: PropTypes.bool,
    duration: PropTypes.number,
    status: PropTypes.oneOf(['', 'error', 'loading', 'success']),
    onClick: PropTypes.func,
    onClose: PropTypes.func
};
//# sourceMappingURL=index.js.map