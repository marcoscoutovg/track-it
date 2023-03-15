import styled from "styled-components"
import Footer from "../../components/Footer/Footer"
import NavBar from "../../components/NavBar/NavBar"
import { Add, Trash } from "react-ionicons";

function HabitsPage() {
    return (
        <ContainerHabits>
            <NavBar />
            <MainHabits>
                <Topo>
                    <h1>Meus hábitos</h1>
                    <div><Add /></div>
                </Topo>

                <HabitsList>
                    <Habit>
                        <InfoHabits>
                            <h1>Ler 1 capítulo de livro</h1>
                            <Week>
                                <Day>D</Day>
                                <Day>S</Day>
                                <Day>T</Day>
                                <Day>Q</Day>
                                <Day>Q</Day>
                                <Day>S</Day>
                                <Day>S</Day>
                            </Week>
                        </InfoHabits>

                        <Trash />

                    </Habit>

                    <Habit>
                        <InfoHabits>
                            <h1>Ler 1 capítulo de livro</h1>
                            <Week>
                                <Day>D</Day>
                                <Day>S</Day>
                                <Day>T</Day>
                                <Day>Q</Day>
                                <Day>Q</Day>
                                <Day>S</Day>
                                <Day>S</Day>
                            </Week>
                        </InfoHabits>

                        <Trash />

                    </Habit>

                    <Habit>
                        <InfoHabits>
                            <h1>Ler 1 capítulo de livro</h1>
                            <Week>
                                <Day>D</Day>
                                <Day>S</Day>
                                <Day>T</Day>
                                <Day>Q</Day>
                                <Day>Q</Day>
                                <Day>S</Day>
                                <Day>S</Day>
                            </Week>
                        </InfoHabits>

                        <Trash />

                    </Habit>

                </HabitsList>

            </MainHabits>


            <Footer />
        </ContainerHabits>
    );
}

const ContainerHabits = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #E5E5E5;
`

const MainHabits = styled.div`

   
`
const Topo = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    
    >h1 {
        width: 248px;
        height: 29px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
        margin-top: 70px;
    }

    >div {
        width: 40px;
        height: 35px;
        margin-top: 70px;
        background-color: #52B6FF;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

const HabitsList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Habit = styled.div`
    width: 340px;
    height: 91px;
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;

`

const Week = styled.div`
    width: 250px;
    height: 25px;
    display: flex;
`

const Day = styled.p`
    width: 30px;
    height: 30px;
    border: 1px solid #CFCFCF;
    border-radius: 5px;
    margin-right: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #DBDBDB;
    
`
const InfoHabits = styled.div`
    margin-left: 10px;

    >h1 {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
        margin-top: 13px;
    }
`

export default HabitsPage;