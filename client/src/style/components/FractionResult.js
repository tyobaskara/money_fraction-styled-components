import styled from 'styled-components';

export const ListResult = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 15px;
    min-height: 100vh;
    background-color: ${props => props.theme.background.primary};
    transition: all .2s ease-in;
`;

export const List = styled.li`
    background-color: ${props => props.theme.background.secondary};
    display: inline-block;
    margin: 5px;
    border: 2px solid lightseagreen;
    padding: 5px 15px;
    font-size: 1.8rem;
    border-radius: 7px;
    color: ${props => props.theme.color.primary};
    transition: all .2s ease-in;
`;