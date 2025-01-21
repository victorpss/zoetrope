import React from "react";
import { Container, DownloadButton, Logo, LogoContainer, PageName, PagesContainer } from "./style.tsx";
import logoImage from "../../assets/logo.png";
import { Link } from "react-router-dom";

function Header() {

    return (
        <Container>
            <LogoContainer>
                <Link to='/'>
                    <Logo src={logoImage}></Logo>
                </Link>
            </LogoContainer>
            <PagesContainer>
                <Link to='/recursos' style={{ textDecoration: "none" }}>
                    <PageName>Recursos</PageName>
                </Link>
                <Link to='/sobre' style={{ textDecoration: "none" }}>
                    <PageName>Sobre</PageName>
                </Link>
                <Link to='/contato' style={{ textDecoration: "none" }}>
                    <PageName>Contato</PageName>
                </Link>
                <DownloadButton>Baixar Aplicativo</DownloadButton>
            </PagesContainer>
        </Container>
    );
}

export default Header;