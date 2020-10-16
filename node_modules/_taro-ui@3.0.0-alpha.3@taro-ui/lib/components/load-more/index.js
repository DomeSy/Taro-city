import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from '@tarojs/components';
import AtActivityIndicator from '../activity-indicator/index';
import AtButton from '../button/index';
export default class AtLoadMore extends React.Component {
    onClick() {
        this.props.onClick && this.props.onClick(arguments);
    }
    render() {
        const { className, customStyle, loadingText, moreText, status, moreBtnStyle, noMoreTextStyle, noMoreText } = this.props;
        let component = null;
        if (status === 'loading') {
            component = React.createElement(AtActivityIndicator, { mode: 'center', content: loadingText });
        }
        else if (status === 'more') {
            component = (React.createElement(View, { className: 'at-load-more__cnt' },
                React.createElement(AtButton, { full: true, onClick: this.onClick.bind(this), customStyle: moreBtnStyle }, moreText)));
        }
        else {
            component = (React.createElement(Text, { className: 'at-load-more__tip', style: noMoreTextStyle }, noMoreText));
        }
        return (React.createElement(View, { className: classNames('at-load-more', className), style: customStyle }, component));
    }
}
AtLoadMore.defaultProps = {
    customStyle: '',
    className: '',
    noMoreTextStyle: '',
    moreBtnStyle: '',
    status: 'more',
    loadingText: '加载中',
    moreText: '查看更多',
    noMoreText: '没有更多'
};
AtLoadMore.propTypes = {
    customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
    noMoreTextStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    moreBtnStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    status: PropTypes.oneOf(['more', 'loading', 'noMore']),
    loadingText: PropTypes.string,
    moreText: PropTypes.string,
    noMoreText: PropTypes.string,
    onClick: PropTypes.func
};
//# sourceMappingURL=index.js.map