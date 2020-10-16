import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Switch, View } from '@tarojs/components';
export default class AtSwitch extends React.Component {
    constructor() {
        super(...arguments);
        this.handleChange = (event) => {
            const { value, checked } = event.detail;
            const state = typeof value === 'undefined' ? checked : value;
            this.props.onChange && this.props.onChange(state);
        };
    }
    render() {
        const { customStyle, className, disabled, border, title, checked, color } = this.props;
        const rootCls = classNames('at-switch', {
            'at-switch--without-border': !border
        }, className);
        const containerCls = classNames('at-switch__container', {
            'at-switch--disabled': disabled
        });
        return (React.createElement(View, { className: rootCls, style: customStyle },
            React.createElement(View, { className: 'at-switch__title' }, title),
            React.createElement(View, { className: containerCls },
                React.createElement(View, { className: 'at-switch__mask' }),
                React.createElement(Switch, { className: 'at-switch__switch', checked: checked, color: color, onChange: this.handleChange }))));
    }
}
AtSwitch.defaultProps = {
    customStyle: '',
    className: '',
    title: '',
    color: '#6190e8',
    border: true,
    disabled: false,
    checked: false
};
AtSwitch.propTypes = {
    customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
    title: PropTypes.string,
    color: PropTypes.string,
    checked: PropTypes.bool,
    border: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func
};
//# sourceMappingURL=index.js.map