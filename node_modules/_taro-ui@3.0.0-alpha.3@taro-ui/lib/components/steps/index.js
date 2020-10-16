import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from '@tarojs/components';
export default class AtSteps extends React.Component {
    handleClick(current, event) {
        this.props.onChange(current, event);
    }
    render() {
        const { customStyle, className, items, current } = this.props;
        return (React.createElement(View, { className: classNames('at-steps', className), style: customStyle }, !!items &&
            items.map((item, i) => (React.createElement(View, { key: item.title, className: classNames({
                    'at-steps__item': true,
                    'at-steps__item--active': i === current,
                    'at-steps__item--inactive': i !== current
                }), onClick: this.handleClick.bind(this, i) },
                React.createElement(View, { className: 'at-steps__circular-wrap' },
                    i !== 0 && React.createElement(View, { className: 'at-steps__left-line' }),
                    item.status ? (React.createElement(View, { className: classNames({
                            'at-icon': true,
                            'at-icon-check-circle': item.status === 'success',
                            'at-icon-close-circle': item.status === 'error',
                            'at-steps__single-icon': true,
                            'at-steps__single-icon--success': item.status === 'success',
                            'at-steps__single-icon--error': item.status === 'error'
                        }) })) : (React.createElement(View, { className: 'at-steps__circular' }, item.icon ? (React.createElement(Text, { className: classNames('at-icon', {
                            [`at-icon-${item.icon.value}`]: item.icon.value,
                            'at-steps__circle-icon': true
                        }) })) : (React.createElement(Text, { className: 'at-steps__num' }, i + 1)))),
                    i !== items.length - 1 && (React.createElement(View, { className: 'at-steps__right-line' }))),
                React.createElement(View, { className: 'at-steps__title' }, item.title),
                React.createElement(View, { className: 'at-steps__desc' }, item.desc))))));
    }
}
AtSteps.defaultProps = {
    customStyle: '',
    className: '',
    current: 0,
    items: [],
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onChange: () => { }
};
AtSteps.propTypes = {
    customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
    current: PropTypes.number,
    items: PropTypes.array,
    onChange: PropTypes.func
};
//# sourceMappingURL=index.js.map