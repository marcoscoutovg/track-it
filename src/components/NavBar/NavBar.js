import { useContext } from "react";
import styled from "styled-components";
import { LevelContext } from "../../LevelContext";
import { ContainerNavBar } from "./styled";

function NavBar() {
    const { image } = useContext(LevelContext)

    return (
        <ContainerNavBar data-test="header">
            <h1>Trackit</h1>
            <img src={image} alt="imagem perfil"></img>
        </ContainerNavBar>
    );
}

export default NavBar;