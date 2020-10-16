import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
export default class AtMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            _isOpened: false,
            _message: '',
            _type: 'info',
            _duration: 3000
        };
        this._timer = null;
    }
    bindMessageListener() {
        Taro.eventCenter.on('atMessage', (options = {}) => {
            const { message, type, duration } = options;
            const newState = {
                _isOpened: true,
                _message: message,
                _type: type,
                _duration: duration || this.state._duration
            };
            this.setState(newState, () => {
                clearTimeout(this._timer);
                this._timer = setTimeout(() => {
                    this.setState({
                        _isOpened: false
                    });
                }, this.state._duration);
            });
        });
        // 绑定函数
        Taro.atMessage = Taro.eventCenter.trigger.bind(Taro.eventCenter, 'atMessage');
    }
    componentDidShow() {
        this.bindMessageListener();
    }
    componentDidMount() {
        this.bindMessageListener();
    }
    componentDidHide() {
        Taro.eventCenter.off('atMessage');
    }
    componentWillUnmount() {
        Taro.eventCenter.off('atMessage');
    }
    render() {
        const { className, customStyle } = this.props;
        const { _message, _isOpened, _type } = this.state;
        const rootCls = classNames({
            'at-message': true,
            'at-message--show': _isOpened,
            'at-message--hidden': !_isOpened
        }, `at-message--${_type}`, className);
        return (React.createElement(View, { className: rootCls, style: customStyle }, _message));
    }
}
AtMessage.defaultProps = {
    customStyle: '',
    className: ''
};
AtMessage.propTypes = {
    customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    className: PropTypes.oneOfType([PropTypes.array, PropTypes.string])
};
//# sourceMappingURL=index.js.map