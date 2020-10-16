import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { View } from '@tarojs/components';
export default class AtTabsPane extends React.Component {
    render() {
        const { customStyle, className, tabDirection, index, current } = this.props;
        return (React.createElement(View, { className: classNames({
                'at-tabs-pane': true,
                'at-tabs-pane--vertical': tabDirection === 'vertical',
                'at-tabs-pane--active': index === current,
                'at-tabs-pane--inactive': index !== current
            }, className), style: customStyle }, this.props.children));
    }
}
AtTabsPane.defaultProps = {
    customStyle: '',
    className: '',
    tabDirection: 'horizontal',
    index: 0,
    current: 0
};
AtTabsPane.propTypes = {
    customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
    tabDirection: PropTypes.oneOf(['horizontal', 'vertical']),
    index: PropTypes.number,
    current: PropTypes.number
};
//# sourceMappingURL=index.js.map