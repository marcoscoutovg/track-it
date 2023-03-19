import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import styled from "styled-components";
import { Checkbox } from "react-ionicons";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { LevelContext } from "../../LevelContext";
import BASE_URL from "../../constants/baseUrl";
import dayjs from "dayjs";
import daysOfWeek from "../../constants/daysOfWeek";


function TodayPage() {

    const { config } = useContext(LevelContext);
    const [habitToday, setHabitToday] = useState([])
    const today = daysOfWeek[dayjs().day()].name;
    const month = dayjs().month() + 1;
    const date = dayjs().date();
    const [concluded, setConcluded] = useState(0);
    const total = habitToday.length
    const percentage = Math.round((concluded / total) * 100);
    const [habitsFinished, setHabitsFinished] = useState([]);

    useEffect(() => {
        axios.get(`${BASE_URL}/habits/today`, config)
            .then(res => {
                console.log(res.data)
                setHabitToday(res.data)
            })
            .catch(err => err.response.data.message)
    }, []);

    function habitConcluded(id) {
        const body = []

        if (habitsFinished.includes(id)) {
            setHabitsFinished(habitsFinished.filter(h => h !== id))
            setConcluded(concluded - 1)
            axios.post(`${BASE_URL}/habits/${id}/uncheck`, body, config)
                .then(console.log('enviou')).catch(err => alert(err.response.data.message))
        } else {
            setConcluded(concluded + 1)
            setHabitsFinished([...habitsFinished, id])
            axios.post(`${BASE_URL}/habits/${id}/check`, body, config)
                .then(console.log('enviou')).catch(err => alert(err.response.data.message))
        }
    }

    return (
        <ContainerToday>

            <NavBar />

            <MainToday>
                <h2 data-test="today">{today}, {date}/{(month < 10) ? `0${month}` : { month }}</h2>
                <h3 data-test="today-counter">{(concluded === 0) ? "Nenhum hábito concluído ainda" :
                    `${percentage}% dos hábitos concluídos`}</h3>

                {habitToday.map(h => (
                    <BoxHabits
                        data-test="today-habit-container"
                        key={h.id}>
                        <Task>
                            <h2 data-test="today-habit-name">{h.name}</h2>
                            <p data-test="today-habit-sequence">Sequência atual: {h.currentSequence} {(h.currentSequence === 1 ? "dia" : "dias")}</p>
                            <p data-test="today-habit-record">Seu recorde: {h.highestSequence} {(h.highestSequence === 1 ? "dia" : "dias")} </p>
                        </Task>
                        <Checkbox
                            data-test="today-habit-check-btn"
                            onClick={() => habitConcluded(h.id)}></Checkbox>

                    </BoxHabits>))}

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