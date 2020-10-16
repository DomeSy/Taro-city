import classnames from 'classnames';
import React from 'react';
import { Text, View } from '@tarojs/components';
import * as constant from '../../common/constant';
const MAP = {
    [constant.TYPE_PRE_MONTH]: 'pre',
    [constant.TYPE_NOW_MONTH]: 'now',
    [constant.TYPE_NEXT_MONTH]: 'next'
};
export default class AtCalendarList extends React.Component {
    constructor() {
        super(...arguments);
        this.handleClick = (item) => {
            if (typeof this.props.onClick === 'function') {
                this.props.onClick(item);
            }
        };
        this.handleLongClick = (item) => {
            if (typeof this.props.onLongClick === 'function') {
                this.props.onLongClick(item);
            }
        };
    }
    render() {
        const { list } = this.props;
        if (!list || list.length === 0)
            return null;
        return (React.createElement(View, { className: 'at-calendar__list flex' }, list.map((item) => (React.createElement(View, { key: `list-item-${item.value}`, onClick: this.handleClick.bind(this, item), onLongPress: this.handleLongClick.bind(this, item), className: classnames('flex__item', `flex__item--${MAP[item.type]}`, {
                'flex__item--today': item.isToday,
                'flex__item--active': item.isActive,
                'flex__item--selected': item.isSelected,
                'flex__item--selected-head': item.isSelectedHead,
                'flex__item--selected-tail': item.isSelectedTail,
                'flex__item--blur': item.isDisabled ||
                    item.type === constant.TYPE_PRE_MONTH ||
                    item.type === constant.TYPE_NEXT_MONTH
            }) },
            React.createElement(View, { className: 'flex__item-container' },
                React.createElement(View, { className: 'container-text' }, item.text)),
            React.createElement(View, { className: 'flex__item-extra extra' }, item.marks && item.marks.length > 0 ? (React.createElement(View, { className: 'extra-marks' }, item.marks.map((mark, key) => (React.createElement(Text, { key: key, className: 'mark' }, mark))))) : null))))));
    }
}
//# sourceMappingURL=index.js.map