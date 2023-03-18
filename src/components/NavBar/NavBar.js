import { useContext } from "react";
import styled from "styled-components";
import { LevelContext } from "../../LevelContext";

function NavBar() {
    const {image} = useContext(LevelContext)

    return (
        <ContainerNavBar data-test="header">
            <h1>Trackit</h1>
            <img src={image} alt="imagem perfil"></img>
        </ContainerNavBar>
    );
}

const ContainerNavBar = styled.header`
    width: 100vw;
    height: 70px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;

    h1 {
        width: 97px;
        height: 49px;
        font-family: 'Playball';
        font-style: normal;
        font-weight: 400;
        font-size: 38.982px;
        line-height: 49px;
        color: #FFFFFF;
    }

    img {
        width: 51px;
        height: 51px;
        background: url(image.png);
        border-radius: 98.5px;
    }
`

export default NavBar;