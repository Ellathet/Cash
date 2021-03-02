import { Container, Content, Logo, OptionsContainer } from "./styles";

function AsideMenu() {
    return(
    <Container>
        <Content>
                <Logo>
                    <img src="/logo.svg" alt="Logo"/>
                </Logo>
            <OptionsContainer>
                <img src="/home.svg" alt="Inicio"/>
                <img src="/auto.svg" alt="Automacao"/>
                <img src="/goals.svg" alt="Metas"/>
            </OptionsContainer>
        </Content>
    </Container>
    )
}

export default AsideMenu;