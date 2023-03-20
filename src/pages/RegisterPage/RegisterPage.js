import { Link } from "react-router-dom";
import InfoRegister from "../../components/InfoRegister/InfoRegister";
import Logo from "../../components/Logo/Logo";
import { LoginContainer } from "./styled";

function RegisterPage() {
    return (
        <LoginContainer>
            <Logo />
            <InfoRegister />

            <Link
                data-test="login-link"
                to="/">
                Já tem uma conta? Faça o login!
            </Link>
        </LoginContainer>
    );
}

export default RegisterPage;