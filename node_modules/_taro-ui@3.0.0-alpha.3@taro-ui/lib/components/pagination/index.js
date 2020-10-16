import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from '@tarojs/components';
import AtButton from '../button/index';
const MIN_MAXPAGE = 1;
const getMaxPage = (maxPage = 0) => {
    if (maxPage <= 0)
        return MIN_MAXPAGE;
    return maxPage;
};
const createPickerRange = (max) => {
    const range = new Array(max).fill(0).map((_val, index) => index + 1);
    return range;
};
export default class AtPagination extends React.Component {
    constructor(props) {
        super(props);
        const { current, pageSize = 20, total } = this.props;
        const maxPage = getMaxPage(Math.ceil(total / pageSize));
        this.state = {
            currentPage: current || 1,
            maxPage,
            pickerRange: createPickerRange(maxPage)
        };
    }
    onPrev() {
        let { currentPage } = this.state;
        const originCur = currentPage;
        currentPage -= 1;
        currentPage = Math.max(1, currentPage);
        if (originCur === currentPage)
            return;
        this.props.onPageChange &&
            this.props.onPageChange({ type: 'prev', current: currentPage });
        this.setState({ currentPage });
    }
    onNext() {
        let { currentPage } = this.state;
        const originCur = currentPage;
        const { maxPage } = this.state;
        currentPage += 1;
        currentPage = Math.min(maxPage, currentPage);
        if (originCur === currentPage)
            return;
        this.props.onPageChange &&
            this.props.onPageChange({ type: 'next', current: currentPage });
        this.setState({ currentPage });
    }
    UNSAFE_componentWillReceiveProps(props) {
        const { total, pageSize = 20, current } = props;
        const maxPage = getMaxPage(Math.ceil(total / pageSize));
        if (maxPage !== this.state.maxPage) {
            this.setState({
                maxPage,
                pickerRange: createPickerRange(maxPage)
            });
        }
        if (typeof current === 'number' && current !== this.state.currentPage) {
            this.setState({ currentPage: current });
        }
    }
    // onPickerChange (evt) {
    //   const { value } = evt.detail
    //   const current = +value + 1
    //   if (current === this.state.currentPage) return
    //   this.props.onPageChange && this.props.onPageChange({ type: 'pick', current })
    //   this.setState({
    //     currentPage: current,
    //   })
    // }
    render() {
        const { icon, 
        // pickerSelect,
        customStyle } = this.props;
        const { currentPage, maxPage
        // pickerRange,
         } = this.state;
        const rootClassName = ['at-pagination'];
        const prevDisabled = maxPage === MIN_MAXPAGE || currentPage === 1;
        const nextDisabled = maxPage === MIN_MAXPAGE || currentPage === maxPage;
        const classObject = {
            'at-pagination--icon': icon
        };
        return (React.createElement(View, { className: classNames(rootClassName, classObject, this.props.className), style: customStyle },
            React.createElement(View, { className: 'at-pagination__btn-prev' },
                icon && (React.createElement(AtButton, { onClick: this.onPrev.bind(this), size: 'small', disabled: prevDisabled },
                    React.createElement(Text, { className: 'at-icon at-icon-chevron-left' }))),
                !icon && (React.createElement(AtButton, { onClick: this.onPrev.bind(this), size: 'small', disabled: prevDisabled }, "\u4E0A\u4E00\u9875"))),
            React.createElement(View, { className: 'at-pagination__number' },
                React.createElement(Text, { className: 'at-pagination__number-current' }, currentPage),
                "/",
                maxPage),
            React.createElement(View, { className: 'at-pagination__btn-next' },
                icon && (React.createElement(AtButton, { onClick: this.onNext.bind(this), size: 'small', disabled: nextDisabled },
                    React.createElement(Text, { className: 'at-icon at-icon-chevron-right' }))),
                !icon && (React.createElement(AtButton, { onClick: this.onNext.bind(this), size: 'small', disabled: nextDisabled }, "\u4E0B\u4E00\u9875")))));
    }
}
AtPagination.defaultProps = {
    current: 1,
    total: 0,
    pageSize: 20,
    icon: false,
    customStyle: {}
};
AtPagination.propTypes = {
    current: PropTypes.number,
    total: PropTypes.number,
    pageSize: PropTypes.number,
    icon: PropTypes.bool,
    customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    onPageChange: PropTypes.func
};
//# sourceMappingURL=index.js.map