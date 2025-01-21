import React from "react";
import { Container, Title } from "./style.tsx";
import Header from "../../components/Header/index.tsx";
import Footer from "../../components/Footer/index.tsx";

function Contato() {

    return (
        <Container>
            <Header />
            <Title>Página de contatos</Title>
            <Footer />
        </Container>
    );
}

export default Contato;