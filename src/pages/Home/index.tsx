import React from "react";
import { 
    Container, Title, Image,
    ZoetropeContainer, ZoetropeTextos, ZoetropeParagrafo, ZoetropeSubtitulo, ZoetropeApps, GetAppImage,
    BeneficiosContainer, BeneficiosLine, DescobertaTopico, ResenhasTopico,  SectionText, SectionContainer, SectionParagrafo,
    ComunidadeContainer, ComunidadeLine, InfoContainer, InfoText, InfoImage, InfoNumero, InfoLine,
} from "./style.tsx";

import Header from "../../components/Header/index.tsx";
import Footer from "../../components/Footer/index.tsx";
import { ThemeProvider } from "styled-components";

import appStoreImage from "../../assets/appstore.png";
import googlePlayImage from "../../assets/googleplay.png";
import zoetropeImage from "../../assets/1pessoas.png";
import Beneficios1Image from "../../assets/2pessoas.png";
import Beneficios2Image from "../../assets/3pessoas.png";
import downloadIcon from "../../assets/downloadIcon.png";
import membrosIcon from "../../assets/membrosIcon.png";
import comunidadesIcon from "../../assets/comunidadesIcon.png";

import bk from "../../assets/background1.png";
import bk2 from "../../assets/background2.png";

function Home() {
    const theme = {
        fonte: {
            titulo: '48px',
            subtitulo: '40px',
            topico: '32px',
            paragrafo: '24px',
        },
        familia: {
            titulo: 'Open Sans',
            subtitulo: 'Poppins',
            topico: 'Poppins',
            paragrafo: 'Open Sans',
        }
    }

    const infos = [
        {numero: '+200M', icone: downloadIcon, texto: 'Download' },
        {numero: '+480M', icone: membrosIcon, texto: 'Membros' },
        {numero: '+18K', icone: comunidadesIcon, texto: 'Comunidades' }
    ]
    
    return (
        <Container>
            <Header />
                <img src={bk} style={{ position: "absolute", right: 0, zIndex: 1}}></img>
                <ThemeProvider theme={theme}>
                    <ZoetropeContainer style={{ zIndex: 2 }}>
                        <ZoetropeTextos>
                            <Title style={{ margin: '0px' }}>Zoetrope</Title>
                            <ZoetropeSubtitulo>Sua Nova Rede Social</ZoetropeSubtitulo>
                            <ZoetropeParagrafo style={{ fontWeight: 'bold' }}>Descubra, compartilhe e conecte-se com outros apaixonados por entretenimento.</ZoetropeParagrafo>
                            <ZoetropeApps>
                                <GetAppImage src={appStoreImage}></GetAppImage>
                                <GetAppImage src={googlePlayImage}></GetAppImage>
                            </ZoetropeApps>
                        </ZoetropeTextos>
                        <Image src={zoetropeImage} />
                    </ZoetropeContainer>
                    <BeneficiosContainer>
                        <Title>Benefícios</Title>
                        <BeneficiosLine />
                        <SectionContainer>
                            <Image src={Beneficios1Image}/>
                            <SectionText>
                                <DescobertaTopico>Descoberta Personalizada</DescobertaTopico>
                                <SectionParagrafo>O recurso de Descoberta Personalizada da Zoetrope utiliza algoritmos inteligentes para analisar seus hábitos de consumo de filmes, livros e séries. Com base nas obras que você visualiza, avalia e comenta, o aplicativo gera recomendações personalizadas.</SectionParagrafo>
                            </SectionText>
                        </SectionContainer>
                        <SectionContainer>
                            <SectionText>
                                <ResenhasTopico>Leia e escreva resenhas detalhadas</ResenhasTopico>
                                <SectionParagrafo style={{ textAlign: 'right' }}>O recurso de Avaliações e Comentários permite aos usuários da Zoetrope expressarem suas opiniões de maneira detalhada sobre filmes, livros e séries. Os usuários podem escrever resenhas completas, incluindo análises críticas, aspectos técnicos, pontos fortes e fracos, além de compartilhar suas experiências pessoais com a comunidade.</SectionParagrafo>
                            </SectionText>
                            <Image src={Beneficios2Image}/>
                        </SectionContainer>
                    </BeneficiosContainer>
                    <ComunidadeContainer>
                        <Title>Comunidade Zoetrope</Title>
                        <ComunidadeLine />
                        <InfoContainer>
                            {infos.map((info, index) => (
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '50px' }}>
                                    <div>
                                        <InfoNumero>{info.numero}</InfoNumero>
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
                                            <InfoImage src={info.icone}></InfoImage>
                                            <InfoText>{info.texto}</InfoText>
                                        </div>
                                    </div>
                                    {index < infos.length - 1 && <InfoLine />}
                                </div>
                            ))}
                        </InfoContainer>
                    </ComunidadeContainer>
                <img src={bk2} style={{ position: "absolute", bottom: '-1163px', width: '100%', zIndex: '-1' }}></img>
                </ThemeProvider>
            <Footer />
        </Container>
    );
}

export default Home;