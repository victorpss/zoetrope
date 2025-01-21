import styled from 'styled-components';

export const Container = styled.div`
    background-color: #FFFFFF;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.h1`
    font-size: ${(props) => (props.theme.fonte.titulo)};
    font-family: ${(props) => (props.theme.familia.titulo)}, sans-serif;
`;

export const Image = styled.img``;

export const ZoetropeContainer = styled.div`
    margin-top: 100px;
    width: 100%;
    display: flex;
    justify-content: space-around;
`;

export const ZoetropeTextos = styled.div`
    width: 596px;
    height: 435px;
    gap: 16px;
    display: flex;
    flex-direction: column;
`;

export const ZoetropeSubtitulo = styled.h2`
    font-size: ${(props) => (props.theme.fonte.subtitulo)};
    font-family: ${(props) => (props.theme.familia.subtitulo)}, sans-serif;
    margin: 0px;
`;

export const ZoetropeParagrafo = styled.p`
    font-size: ${(props) => (props.theme.fonte.paragrafo)};
    font-family: ${(props) => (props.theme.familia.paragrafo)}, sans-serif;
    margin: 0px;
`;

export const ZoetropeApps = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 40px;
`;

export const GetAppImage = styled.img`
    width: 160px;
    height: 48px;
    cursor: pointer;
`;

export const BeneficiosContainer = styled.div`
    width: 77%;
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
`;

export const BeneficiosLine = styled.div`
    width: 71.5px;
    height: 12px;
    border-radius: 17px;
    background-color: #007CB2;
`;

export const SectionContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 100px;
`;

export const SectionText = styled.div``;

export const SectionParagrafo = styled.p`
    font-size: ${(props) => (props.theme.fonte.paragrafo)};
    font-family: ${(props) => (props.theme.familia.paragrafo)}, sans-serif;
    text-align: left;
`;

export const DescobertaTopico = styled.li`
    font-size: ${(props) => (props.theme.fonte.topico)};
    font-family: ${(props) => (props.theme.familia.topico)}, sans-serif;
    font-weight: 600;
    margin-left: 30px;
    
    // Mudando a cor do ponto
    &::marker{
        color: #007cb2;
    }
`;

export const ResenhasTopico = styled.li`
    font-size: ${(props) => props.theme.fonte.topico};
    font-family: ${(props) => props.theme.familia.topico}, sans-serif;
    font-weight: 600;
    display: flex; 
    justify-content: right; 
    align-items: center; 
    gap: 14px;

    // Botando o ponto na direita
    &::after {
        content: ""; 
        display: block; 
        width: 12px; 
        height: 12px; 
        background-color: #007cb2; 
        border-radius: 50%; 
    }
`;


export const ResenhasParagrafo = styled.p`
    font-size: ${(props) => (props.theme.fonte.paragrafo)};
    font-family: ${(props) => (props.theme.familia.paragrafo)}, sans-serif;
    text-align: right;
`;

export const ComunidadeContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
`;


export const ComunidadeLine = styled.div`
    width: 111.69px;
    height: 10.5px;
    border-radius: 17px;
    background-color: #007CB2;
`;

export const InfoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 86px;
`;

export const InfoNumero = styled.h1`
    font-size: 48px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
    color: #006064;
    text-align: center;
`;

export const InfoImage = styled.img``;

export const InfoText = styled.p`
    margin: 0;
    font-size: 32px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400px;
`;

export const InfoLine = styled.div`
    width: 1px;
    height: 74.25px;
    background-color: #D1C4E9;
    margin-right: 50px;
`;