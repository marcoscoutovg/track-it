import styled from "styled-components";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

function Footer() {
    return (
        <ContainerFooter data-test="menu">
            <Link
                data-test="habit-link"
                to="/habitos">Hábitos</Link>
            
                <Link
                    data-test="today-link"
                    to="/hoje">
                    <ButtonToday><CircularProgressbar
                value={66}
                background={true}
                text={"Hoje"}
                backgroundPadding={6}
                strokeWidth={8}
                styles={buildStyles({
                rotation: 0,
                textSize: '20px',
                pathTransitionDuration: 0.5,
                pathColor: 'white',
                textColor: 'white',
                trailColor: `transparent`,
                backgroundColor: '#52b6ff',
                })}></CircularProgressbar></ButtonToday>
                </Link>
            
            <Link
                data-test="historic-link"
                to="/historico">Histórico</Link>
        </ContainerFooter>
    );
}

const ContainerFooter = styled.div`
    width: 100vw;
    height: 70px;
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    padding: 15px;
    align-items: center;

    >a {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;
        color: #52B6FF;
        padding: 15px;
        text-decoration: none;
    }
`

const ButtonToday = styled.div`
    width: 91px;
    height: 91px;
    background: #52B6FF;
    margin-bottom: 45px;
    border-radius: 56px;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    color: #FFFFFF

`

export default Footer;