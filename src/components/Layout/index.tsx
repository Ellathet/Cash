import React from "react";
import AsideMenu from "../AsideMenu";
import Header from "../Header"
import { Container, ContentContainer } from "./styles";


function Layout({children}) {
    return (
        <>
        <AsideMenu> Side Bar </AsideMenu>
        <Container>
            <Header> Menu Top </Header>
            <ContentContainer>
                {children}
            </ContentContainer>
        </Container>
        </>
    )
}

export default Layout;