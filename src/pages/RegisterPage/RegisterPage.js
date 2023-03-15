import { Link } from "react-router-dom";
import styled from "styled-components";
import InfoRegister from "../../components/InfoRegister/InfoRegister";
import Logo from "../../components/Logo/Logo";


function RegisterPage() {
    return (
        <LoginContainer>
            <Logo />
            <InfoRegister />

            <Link to="/">
                <h2>
                    Já tem uma conta? Faça o login!
                </h2>
            </Link>
        </LoginContainer>
    );
}

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
        width: 262px;
        height: 17px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 13.976px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;
        color: #52B6FF;
    }
`

export default RegisterPage;