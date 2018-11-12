import styled from 'styled-components';

export const Form = styled.form`
    background: ${props => props.theme.background.primary};
    border-top: 1px solid ${props => props.theme.background.border};
    padding: 5px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    transition: background .2s ease-in;
`;

export const Input = styled.input`
    background: ${props => props.theme.background.secondary};
    border: 0;
    border-radius: 3px;
    color: ${props => props.theme.color.primary};
    display: block;
    width: 100%;
    font-size: 2rem;
    padding: 5px;
    transition: background .2s ease-in;
`;

export const Button = styled.button`
    border: 0;
    border-radius: 3px;
    background: lightseagreen;
    box-shadow: inset 0 0px 2px #f5f5f5;
    color: ${props => props.theme.color.text};
    margin-top: 5px;
    width: 100%;
    padding: 10px;
    font-size: 1.6rem;
    font-weight: 600;
    transition: box-shadow .1s ease;
    &:active {
        box-shadow: inset 0 0px 7px #f5f5f5;
    }
`;

export const Error = styled.p`
    color: red;
    font-size: 1.4rem;
    line-height: 1;
    text-align: center;
    padding-top: 5px;
`;