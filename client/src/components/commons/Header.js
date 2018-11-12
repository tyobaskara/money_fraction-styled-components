import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { HeaderWrap } from '../../style/components/Header';
import Nav from './Nav';

class Header extends React.Component {
    render() {
        const { title, theme } = this.props.header;

        return (
            <HeaderWrap>
                { title && <Nav title={ title } theme={theme}/> }
            </HeaderWrap>
        )
    }
}

Header.propTypes = {
    header: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    header: state.header
});

export default connect(mapStateToProps)(Header);