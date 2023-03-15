import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import styled from "styled-components";
import { Checkbox } from "react-ionicons";


function TodayPage() {
    return (
        <ContainerToday>

            <NavBar />

            <MainToday>
                <h2>Segunda, 17/05</h2>
                <h3>Nenhum hábito concluído ainda</h3>

                <BoxHabits>
                    <Task>
                        <h2>Ler 1 capítulo de livro</h2>
                        <p>Sequência atual: 3 dias</p>
                        <p>Seu recorde: 3 dias</p>
                    </Task>
                    <Checkbox></Checkbox>

                </BoxHabits>

                <BoxHabits>
                    <Task>
                        <h2>Ler 1 capítulo de livro</h2>
                        <p>Sequência atual: 3 dias</p>
                        <p>Seu recorde: 3 dias</p>
                    </Task>
                    <Checkbox></Checkbox>

                </BoxHabits>

                <BoxHabits>
                    <Task>
                        <h2>Ler 1 capítulo de livro</h2>
                        <p>Sequência atual: 3 dias</p>
                        <p>Seu recorde: 3 dias</p>
                    </Task>
                    <Checkbox></Checkbox>

                </BoxHabits>
            </MainToday>
            <Footer />

        </ContainerToday>

    );
}

const ContainerToday = styled.div`
    width: 100vw;
    height: 100vh;
    background: #E5E5E5;
    margin-top: 70px;
`

const MainToday = styled.main`
    width: 100vw;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    >h2 {
        width: 372px;
        height: 29px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
        margin-top: 28px;
    }

    h3 {
        width: 378px;
        height: 22px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #BABABA;
        margin-bottom: 15px;
    }
`

const BoxHabits = styled.div`
    width: 95vw;
    height: 94px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 10px;
    display: flex;

    h2 {
        width: 308px;
        height: 25px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
        margin-bottom: 15px;
        padding-left: 7px;
    }

    p {
        width: 246px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 12.976px;
        line-height: 16px;
        color: #666666;
        padding-left: 7px;
    }
`

const Task = styled.div`
width: 100vw;
height: 200px;
`

export default TodayPage;