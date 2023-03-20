import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import BASE_URL from "../../constants/baseUrl";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { LevelContext } from "../../LevelContext";
import { Button, Form } from "./styled";

function InfoLogin() {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setToken, setImage, enabled, setEnabled } = useContext(LevelContext)

    function login(e) {
        e.preventDefault();

        setEnabled(true);

        const body = { email, password }
        const url = `${BASE_URL}/auth/login`;


        axios.post(url, body)
            .then(res => {
                setImage(res.data.image)
                setToken(res.data.token)
                navigate("/hoje")
                setEnabled(false)
            })
            .catch(err => {
                setEnabled(false)
                alert(err.response.data.message)
            });
    }

    return (
        <Form onSubmit={login}>
            <label htmlFor="email"></label>
            <input
                disabled={enabled}
                data-test="email-input"
                id="email"
                type="email"
                placeholder="email"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
            />
            <label htmlFor="password"></label>
            <input
                disabled={enabled}
                data-test="password-input"
                id="password"
                type="password"
                placeholder="senha"
                name="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
            />
            <Button
                data-test="login-btn"
                disabled={enabled}
                type="submit">{enabled ?
                    <ThreeDots
                        height="27"
                        width="60"
                        radius="9"
                        color="#ffffff"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true} /> : "Entrar"}</Button>

        </Form>
    );
}

export default InfoLogin;