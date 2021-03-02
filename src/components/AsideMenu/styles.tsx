import theme from "../../styles/theme"
import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    width: 5rem;
    background:  #fff;
    border-bottom: 1.5rem solid ${theme.colors.orange};
    z-index: 1000;
`

export const Content = styled.div`
    display: flex;
    height: 100%;
    justify-content: space-around;
    align-items: center;
    padding: 0 20px;
`;

export const Logo = styled.img`
    width: 30px;
    cursor: pointer;
`;

export const OptionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > img {
        width: 25px;
        cursor: pointer;
    }

`;

