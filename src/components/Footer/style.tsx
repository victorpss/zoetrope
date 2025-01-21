import styled from 'styled-components';

export const Container = styled.div`
    background-color: #007C82;
    width: 100%;
    min-height: 235px;
    display: flex;
    justify-content: space-between;
    align-items: start;
`;

export const LinksContainer = styled.div`
    margin: 26px 0px 50px 60px;
    gap: 8px;
`;

export const ImagesContainer = styled.div`
    display: flex;
    gap: 20px;
    margin: 151px 60px 0px 0px;
`;

export const Logo = styled.img`
    height: 39px;
    margin-bottom: 20px;
`;

export const PageName = styled.h1`
    margin: 0;
    height: 28px;
    font-size: 18px;
    font-weight: 600;
    color: white;
    transition: all 0.1s ease-in-out;

    &:hover {
        opacity: 0.7;
    }
`;

export const GetAppImage = styled.img`
    width: 160px;
    height: 48px;
    cursor: pointer;
`;