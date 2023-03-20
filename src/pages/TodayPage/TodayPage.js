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

    const { config, habitsFinished, percentage, setPercentage, habitToday,
        setHabitToday, setHabitsFinished } = useContext(LevelContext);
    const today = daysOfWeek[dayjs().day()].name;
    const month = dayjs().month() + 1;
    const date = dayjs().date();


    useEffect(() => {
        axios.get(`${BASE_URL}/habits/today`, config)
            .then(res => {
                console.log(res.data)
                setHabitToday(res.data)
                setHabitsFinished(res.data.filter(h => h.done === true))
                setPercentage(Math.round(res.data.filter(h => h.done === true).length/res.data.length * 100))
            })
            .catch(err => alert(err))
    }, []);

    console.log(habitsFinished)

    return (
        <ContainerToday>

            <NavBar />

            <MainToday>
                <h2 data-test="today">{today}, {date}/{(month < 10) ? `0${month}` : { month }}</h2>
                <h3 
                percentage={percentage}
                data-test="today-counter">{(percentage === 0 || habitToday.length === 0) ? "Nenhum hábito concluído ainda" :
                    `${percentage}% dos hábitos concluídos`}</h3>

                {habitToday.map(h =>
                    <HabitsBox
                        key={h.id}
                        id={h.id}
                        h={h}
                        name={h.name}
                        done={h.done}
                        currentSequence={h.currentSequence}
                        highestSequence={h.highestSequence} />
                )}

            </MainToday>
            <Footer />

        </ContainerToday >

    );
}

export default TodayPage;