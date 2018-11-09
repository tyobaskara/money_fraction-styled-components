import React from 'react';
import { NavWrap, NavTitle, Heading1 } from '../../style/components/Header';

const Nav = ({ title }) => (
    <NavWrap>
        <NavTitle>
            <Heading1>{title}</Heading1>
        </NavTitle>
    </NavWrap>
)

export default Nav;