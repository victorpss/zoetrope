import styled from 'styled-components';

export const Container = styled.div`
    background-color: #007C82;
    width: 100%;
    min-height: 91px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 2;
`;

export const LogoContainer = styled.div`
    margin-left: 60px;
`;

export const Logo = styled.img``;

export const PagesContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 60px;
    gap: 16px;
`;

export const PageName = styled.h1`
    font-size: 24px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    color: white;
    transition: all 0.1s ease-in-out;

    &:hover {
        opacity: 0.7;
    }
`;

export const DownloadButton = styled.button`
    width: 209px;
    height: 38px;
    background-color: #FFF;
    border: 0;
    border-radius: 4px;
    color: #000;
    font-size: 24px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.1s ease-in-out;

    &:hover {
        background-color: #ddd;
    }
`;