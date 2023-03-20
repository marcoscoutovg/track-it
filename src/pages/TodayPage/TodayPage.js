import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { LevelContext } from "../../LevelContext";
import BASE_URL from "../../constants/baseUrl";
import dayjs from "dayjs";
import daysOfWeek from "../../constants/daysOfWeek";
import { ContainerToday, MainToday } from "./styled";
import HabitsBox from "./HabitsBox";

function TodayPage() {

    const { config, habitsFinished, setHabitsFinished } = useContext(LevelContext);
    const [habitToday, setHabitToday] = useState([])
    const [concluded, setConcluded] = useState(habitsFinished.length);
    const today = daysOfWeek[dayjs().day()].name;
    const month = dayjs().month() + 1;
    const date = dayjs().date();
    const total = habitToday.length
    const percentage = Math.round((concluded / total) * 100);


    useEffect(() => {
        axios.get(`${BASE_URL}/habits/today`, config)
            .then(res => {
                console.log(res.data)
                setHabitToday(res.data)
            })
            .catch(err => err.response.data.message)
    }, []);

    return (
        <ContainerToday>

            <NavBar />

            <MainToday>
                <h2 data-test="today">{today}, {date}/{(month < 10) ? `0${month}` : { month }}</h2>
                <h3 data-test="today-counter">{(concluded === 0) ? "Nenhum hábito concluído ainda" :
                    `${percentage}% dos hábitos concluídos`}</h3>

                {habitToday.map(h => (
                    <HabitsBox
                        key={h.id}
                        name={h.name}
                        currentSequence={h.currentSequence}
                        highestSequence={h.highestSequence}
                        h={h}
                        done={h.done}
                        concluded={concluded}
                        setConcluded={setConcluded} />))}

            </MainToday>
            <Footer />

        </ContainerToday >

    );
}

export default TodayPage;