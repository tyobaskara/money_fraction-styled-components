import styled from 'styled-components';

export const Form = styled.form`
    background: #f5f5f5;
    border-top: 1px solid #ccc;
    padding: 5px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
`;

export const Input = styled.input`
    background: #bdbdbd;
    border: 0;
    border-radius: 3px;
    display: block;
    width: 100%;
    font-size: 2rem;
    padding: 5px;
`;

export const Button = styled.button`
    border: 0;
    border-radius: 3px;
    background: lightseagreen;
    box-shadow: inset 0 0px 2px #f5f5f5;
    color: white;
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