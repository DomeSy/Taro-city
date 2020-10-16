import classNames from 'classnames';
import _forEach from 'lodash/forEach';
import PropTypes from 'prop-types';
import React from 'react';
import { View } from '@tarojs/components';
export default class AtFlex extends React.Component {
    render() {
        const rootClass = ['at-row'];
        _forEach(this.props, (value, key) => {
            if (key === 'children') {
                return;
            }
            if (key === 'alignContent') {
                return rootClass.push(`at-row--${value}`);
            }
            if (key === 'alignContent') {
                return rootClass.push(`at-row__align-content--${value}`);
            }
            rootClass.push(`at-row__${key}--${value}`);
        });
        return React.createElement(View, { className: classNames(rootClass) }, this.props.children);
    }
}
AtFlex.propTypes = {
    wrap: PropTypes.oneOf(['no-wrap', 'wrap', 'wrap-reverse']),
    align: PropTypes.oneOf(['start', 'end', 'center', 'stretch', 'baseline']),
    justify: PropTypes.oneOf(['start', 'end', 'center', 'between', 'around']),
    dirction: PropTypes.oneOf(['row', 'column', 'row-reverse', 'column-reverse']),
    alignContent: PropTypes.oneOf([
        'start',
        'end',
        'center',
        'stretch',
        'between',
        'around'
    ])
};
//# sourceMappingURL=index.js.map