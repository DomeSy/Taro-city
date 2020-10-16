import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { View } from '@tarojs/components';
export default class AtCurtain extends React.Component {
    onClose(e) {
        e.stopPropagation();
        this.props.onClose(e);
    }
    _stopPropagation(e) {
        e.stopPropagation();
    }
    render() {
        const { className, customStyle, isOpened, closeBtnPosition } = this.props;
        const curtainClass = classNames({
            'at-curtain': true,
            'at-curtain--closed': !isOpened
        }, className);
        const btnCloseClass = classNames({
            'at-curtain__btn-close': true,
            [`at-curtain__btn-close--${closeBtnPosition}`]: closeBtnPosition
        });
        return (React.createElement(View, { className: curtainClass, style: customStyle, onClick: this._stopPropagation },
            React.createElement(View, { className: 'at-curtain__container' },
                React.createElement(View, { className: 'at-curtain__body' },
                    this.props.children,
                    React.createElement(View, { className: btnCloseClass, onClick: this.onClose.bind(this) })))));
    }
}
AtCurtain.defaultProps = {
    customStyle: '',
    className: '',
    isOpened: false,
    closeBtnPosition: 'bottom',
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onClose: () => { }
};
AtCurtain.propTypes = {
    customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
    isOpened: PropTypes.bool,
    closeBtnPosition: PropTypes.string,
    onClose: PropTypes.func
};
//# sourceMappingURL=index.js.map