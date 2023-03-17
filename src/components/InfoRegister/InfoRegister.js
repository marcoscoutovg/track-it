import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import BASE_URL from "../../constants/baseUrl";
import { useContext, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { LevelContext } from "../../LevelContext";


function InfoRegister() {

    const navigate = useNavigate();
    const [enabled, setEnabled] = useState(false);
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const {image, setImage} = useContext(LevelContext)
    const [password, setPassword] = useState("")

    function register(e) {
        e.preventDefault();

        const body = { email, name, image, password };

        axios.post(`${BASE_URL}/auth/sign-up`, body)
            .then(res => {
                if (res.data === undefined || res.data === null) {
                    setEnabled(true);
                } else {
                    setEnabled(false);
                }
                navigate("/")
                console.log("enviou")
            })
            .catch(err => alert(err.response.data.details[0]))

    }

    return (
        <Form onSubmit={register}>
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
            <label htmlFor="name"></label>
            <input
                data-test="user-name-input"
                id="name"
                type="text"
                placeholder="nome"
                name="name"
                value={name}
                onChange={e => setName(e.target.value)}
                required
            />
            <label htmlFor="image"></label>
            <input
                data-test="user-image-input"
                id="image"
                type="url"
                placeholder="foto"
                name="image"
                value={image}
                onChange={e => setImage(e.target.value)}
                required
            />
            <Button
                data-test="sigup-btn"
                disabled={enabled}
                type="submit">{!enabled ? "Cadastrar"
                    : <ThreeDots
                        height="27"
                        width="60"
                        radius="9"
                        color="#ffffff"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true} />}</Button>
        </Form >
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

export default InfoRegister;