import styled from 'styled-components';

export const HeaderWrap = styled.header`
    background: lightseagreen;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
`;

export const NavWrap = styled.nav`
    box-shadow: 0px 2px 2px ${props => props.theme.background.secondary};
`;

export const NavTitle = styled.div`
    text-align: center;
    padding: 10px 0;
`;

export const Heading1 = styled.h1`
    color: ${props => props.theme.color.text};
    font-size: 1.8rem;
`;

export const LightButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 50px;
    background: none;
    border: 0;
    color: #323232;
    font-size: 1.6rem;
`;