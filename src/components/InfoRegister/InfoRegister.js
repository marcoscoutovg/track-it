import styled from "styled-components";
import { Link } from "react-router-dom";


function InfoRegister() {

    function sendInfoRegister() {

    }

    return (
        <Form onSubmit={sendInfoRegister}>
            <label htmlFor="email"></label>
            <input
                id="email"
                type="email"
                placeholder="email"
                name="email"
                required
            />
            <label htmlFor="password"></label>
            <input
                id="password"
                type="password"
                placeholder="senha"
                name="password"
                required
            />
            <label htmlFor="name"></label>
            <input
                id="name"
                type="text"
                placeholder="nome"
                name="name"
                required
            />
            <label htmlFor="image"></label>
            <input
                id="image"
                type="url"
                placeholder="foto"
                name="image"
                required
            />
                <Link to="/">
                    <Button type="submit"><p>Cadastrar</p></Button>
                </Link>
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


    p {
        width: 164px;
        height: 26px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20.976px;
        line-height: 26px;
        text-align: center;
        color: #FFFFFF;
        text-decoration: none;
    }
`

export default InfoRegister;