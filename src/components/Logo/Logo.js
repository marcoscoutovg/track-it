import logo from "../../assets/logo.png";
import { ContainerLogo, ImgLogo, Title } from "./styled";

function Logo() {
    return (
        <ContainerLogo>
            <ImgLogo src={logo} alt="logo"></ImgLogo>
            <Title>Trackit</Title>
        </ContainerLogo>
    );
}

export default Logo;