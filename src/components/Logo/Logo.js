import styled from "styled-components";
import logo from "../../assets/logo.png";

function Logo() {
    return (
        <ContainerLogo>
            <ImgLogo src={logo} alt="logo"></ImgLogo>
            <Title>Trackit</Title>
        </ContainerLogo>
    );
}

const ContainerLogo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ImgLogo = styled.img`
    width: 200px;
    height: 200px;
`

const Title = styled.h1`
    width: 250px;
    height: 86.23px;
    font-family: 'Playball';
    font-style: normal;
    font-weight: 400;
    font-size: 68.982px;
    line-height: 86px;
    text-align: center;
    color: #126BA5;
`

export default Logo;