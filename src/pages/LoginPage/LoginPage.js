import { Link } from "react-router-dom";
import InfoLogin from "../../components/InfoLogin/InfoLogin";
import Logo from "../../components/Logo/Logo";
import { LoginContainer } from "./styled";

function LoginPage() {

    return (
        <LoginContainer>
            <Logo />
            <InfoLogin />

            <Link
                data-test="signup-link"
                to="/cadastro">
                Não tem uma conta? Cadastre-se!
            </Link>
        </LoginContainer>
    );
}

export default LoginPage;