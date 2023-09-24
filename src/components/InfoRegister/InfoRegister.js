import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { LevelContext } from "../../LevelContext";
import { Button, Form } from "./styled";

function InfoRegister() {

    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const { image, setImage, enabled, setEnabled } = useContext(LevelContext)
    const [password, setPassword] = useState("")

    function register(e) {
        e.preventDefault();

        setEnabled(true)

        const body = { email, name, image, password };

        axios.post(`${process.env.REACT_APP_API_URL}/auth/sign-up`, body)
            .then(res => {
                navigate("/")
                console.log("enviou")
            })
            .catch(err => {
                console.log("não enviou")
                alert(err.response.data.message)
                setEnabled(false)
            })
    }

    return (
        <Form onSubmit={register}>
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
            <label htmlFor="name"></label>
            <input
                disabled={enabled}
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
                disabled={enabled}
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
                type="submit">{enabled ? <ThreeDots
                    height="27"
                    width="60"
                    radius="9"
                    color="#ffffff"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true} /> : "Cadastrar"}
            </Button>
        </Form >
    );
}

export default InfoRegister;