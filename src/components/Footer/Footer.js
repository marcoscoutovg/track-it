import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { ButtonToday, ContainerFooter } from "./styled";


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
                    value={50}
                    background
                    text={"Hoje"}
                    backgroundPadding={6}
                    strokeWidth={8}
                    styles={buildStyles({
                        pathColor: 'white',
                        textColor: 'white',
                        trailColor: `transparent`,
                        backgroundColor: '#52b6ff',
                    })} /></ButtonToday>
            </Link>

            <Link
                data-test="historic-link"
                to="/historico">Histórico</Link>
        </ContainerFooter>
    );
}

export default Footer;