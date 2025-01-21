import React from "react";
import { Container, GetAppImage, ImagesContainer, LinksContainer, Logo, PageName } from "./style.tsx";
import { Link } from "react-router";
import logo from "../../assets/logo.png";
import appStoreImage from "../../assets/appstore.png";
import googlePlayImage from "../../assets/googleplay.png";

function Footer() {

    return (
        <Container>
            <LinksContainer>
                <Link to='/'>
                    <Logo src={logo}></Logo>
                </Link>
                <Link to='/contato' style={{ textDecoration: "none" }}>
                    <PageName>Contato</PageName>
                </Link>
                <Link to='/sobre' style={{ textDecoration: "none" }}>
                    <PageName>Sobre Nós</PageName>
                </Link>
                <Link to='/recursos' style={{ textDecoration: "none" }}>
                    <PageName>Política de Privacidade</PageName>
                </Link>
            </LinksContainer>
            <ImagesContainer>
                <GetAppImage src={appStoreImage}></GetAppImage>
                <GetAppImage src={googlePlayImage}></GetAppImage>
            </ImagesContainer>
        </Container>
    );
}

export default Footer;