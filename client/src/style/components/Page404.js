import styled from 'styled-components';

export const Wrapper = styled.div`
    align-items: center;
    background-color: limegreen;
    animation: background 4s infinite;
    color: white;
    display: flex;
    justify-content: center;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
`;

export const Content = styled.div`
    background: lightseagreen;
    border-radius: 50%;
    height: 200px;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const ContentH1 = styled.h1`
    display: block;
    font-size: 3.2rem;
    line-height: 1;
    text-align: center;
    margin-bottom: 15px;
`;

export const ContentLink = styled.a`
    color: greenyellow;
    display: block;
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 1;
    text-align: center;
    text-decoration: underline;
    
    @keyframes background {
        0%   {background-color: limegreen}
        50%  {background-color: lightseagreen}
        100% {background-color: limegreen}
    }
`;