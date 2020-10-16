import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { View } from '@tarojs/components';
import AtList from '../list/index';
import AtListItem from '../list/item/index';
export default class AtDrawer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animShow: false,
            _show: props.show
        };
    }
    componentDidMount() {
        const { _show } = this.state;
        if (_show)
            this.animShow();
    }
    onItemClick(index) {
        this.props.onItemClick && this.props.onItemClick(index);
        this.animHide();
    }
    onHide() {
        this.setState({ _show: false }, () => {
            this.props.onClose && this.props.onClose();
        });
    }
    animHide() {
        this.setState({
            animShow: false
        });
        setTimeout(() => {
            this.onHide();
        }, 300);
    }
    animShow() {
        this.setState({ _show: true });
        setTimeout(() => {
            this.setState({
                animShow: true
            });
        }, 200);
    }
    onMaskClick() {
        this.animHide();
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        const { show } = nextProps;
        if (show !== this.state._show) {
            show ? this.animShow() : this.animHide();
        }
    }
    render() {
        const { mask, width, right, items } = this.props;
        const { animShow, _show } = this.state;
        const rootClassName = ['at-drawer'];
        const maskStyle = {
            display: mask ? 'block' : 'none',
            opacity: animShow ? 1 : 0
        };
        const listStyle = {
            width,
            transition: animShow
                ? 'all 225ms cubic-bezier(0, 0, 0.2, 1)'
                : 'all 195ms cubic-bezier(0.4, 0, 0.6, 1)'
        };
        const classObject = {
            'at-drawer--show': animShow,
            'at-drawer--right': right,
            'at-drawer--left': !right
        };
        return _show ? (React.createElement(View, { className: classNames(rootClassName, classObject, this.props.className) },
            React.createElement(View, { className: 'at-drawer__mask', style: maskStyle, onClick: this.onMaskClick.bind(this) }),
            React.createElement(View, { className: 'at-drawer__content', style: listStyle }, !!items && items.length ? (React.createElement(AtList, null, items.map((name, index) => (React.createElement(AtListItem, { key: `${name}-${index}`, "data-index": index, onClick: this.onItemClick.bind(this, index), title: name, arrow: 'right' }))))) : (this.props.children)))) : (React.createElement(View, null));
    }
}
AtDrawer.defaultProps = {
    show: false,
    mask: true,
    width: '',
    right: false,
    items: []
};
AtDrawer.propTypes = {
    show: PropTypes.bool,
    mask: PropTypes.bool,
    width: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.string),
    onItemClick: PropTypes.func,
    onClose: PropTypes.func
};
//# sourceMappingURL=index.js.map