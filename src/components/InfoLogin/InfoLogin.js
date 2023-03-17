import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import BASE_URL from "../../constants/baseUrl";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { LevelContext } from "../../LevelContext";

function InfoLogin() {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [enabled, setEnabled] = useState(false);
    const {setToken} = useContext(LevelContext)

    function login(e) {
        e.preventDefault();

        const body = { email, password }
        const url = `${BASE_URL}/auth/login`;


        axios.post(url, body)
            .then(res => {
                if (res.data === undefined || res.data === null) {
                    setEnabled(true);
                } else {
                    setEnabled(false);
                }
                setToken(res.data.token)
                navigate("/hoje")
            })
            .catch(err => alert(err.response.data.message));
    }

    return (
        <Form onSubmit={login}>
            <label htmlFor="email"></label>
            <input
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
                type="submit">{!enabled ? "Entrar"
                    : <ThreeDots
                        height="27"
                        width="60"
                        radius="9"
                        color="#ffffff"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true} />}</Button>
        </Form>
    );
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Button = styled.button`
    width: 303px;
    height: 45px;
    background: #52B6FF;
    border-radius: 4.63636px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 6px;
    margin-bottom: 25px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;
    color: #FFFFFF;
    text-decoration: none;
`

export default InfoLogin;