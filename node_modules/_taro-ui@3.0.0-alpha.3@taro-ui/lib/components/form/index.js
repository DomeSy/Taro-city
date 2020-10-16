import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Form } from '@tarojs/components';
export default class AtForm extends React.Component {
    onSubmit() {
        this.props.onSubmit && this.props.onSubmit(arguments);
    }
    onReset() {
        this.props.onReset && this.props.onReset(arguments);
    }
    render() {
        const { customStyle, className, reportSubmit } = this.props;
        const rootCls = classNames('at-form', className);
        return (React.createElement(Form, { className: rootCls, style: customStyle, onSubmit: this.onSubmit.bind(this), reportSubmit: reportSubmit, onReset: this.onReset.bind(this) }, this.props.children));
    }
}
AtForm.defaultProps = {
    customStyle: '',
    className: '',
    reportSubmit: false
};
AtForm.propTypes = {
    customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
    reportSubmit: PropTypes.bool,
    onSubmit: PropTypes.func,
    onReset: PropTypes.func
};
//# sourceMappingURL=index.js.map