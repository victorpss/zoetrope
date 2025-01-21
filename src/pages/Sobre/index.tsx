import React from "react";
import { Container, Title } from "./style.tsx";
import Header from "../../components/Header/index.tsx";
import Footer from "../../components/Footer/index.tsx";

function Sobre() {

    return (
        <Container>
            <Header />
            <Title>Página de sobre</Title>
            <Footer />
        </Container>
    );
}

export default Sobre;