import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from '@tarojs/components';
export default class AtRadio extends React.Component {
    handleClick(option, event) {
        if (option.disabled)
            return;
        this.props.onClick(option.value, event);
    }
    render() {
        const { customStyle, className, options, value } = this.props;
        return (React.createElement(View, { className: classNames('at-radio', className), style: customStyle }, options.map(option => (React.createElement(View, { key: option.value, onClick: this.handleClick.bind(this, option), className: classNames({
                'at-radio__option': true,
                'at-radio__option--disabled': option.disabled
            }) },
            React.createElement(View, { className: 'at-radio__option-wrap' },
                React.createElement(View, { className: 'at-radio__option-container' },
                    React.createElement(View, { className: 'at-radio__title' }, option.label),
                    React.createElement(View, { className: classNames({
                            'at-radio__icon': true,
                            'at-radio__icon--checked': value === option.value
                        }) },
                        React.createElement(Text, { className: 'at-icon at-icon-check' }))),
                option.desc && (React.createElement(View, { className: 'at-radio__desc' }, option.desc))))))));
    }
}
AtRadio.defaultProps = {
    customStyle: '',
    className: '',
    value: '',
    options: [],
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onClick: () => { }
};
AtRadio.propTypes = {
    customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
    value: PropTypes.string,
    options: PropTypes.array,
    onClick: PropTypes.func
};
//# sourceMappingURL=index.js.map