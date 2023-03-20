import axios from "axios";
import { useContext } from "react";
import BASE_URL from "../../constants/baseUrl";
import { LevelContext } from "../../LevelContext";
import { BoxHabits, StyledIcon, Task } from "./styled";

function HabitsBox({ name, currentSequence, highestSequence,
    h, concluded, setConcluded, done }) {

    const { config, habitsFinished,
        setHabitsFinished, setHabitToday } = useContext(LevelContext);

    function reload() {
        axios.get(`${BASE_URL}/habits/today`, config)
            .then(res => {
                console.log(res.data)
                setHabitToday(res.data)
            })
            .catch(err => err.response.data.message)
    }

    function habitConcluded(infoHabit) {
       /* const body = {};
        console.log(infoHabit)
        infoHabit.done && setHabitsFinished([...habitsFinished, infoHabit.id])

        if (habitsFinished.includes(infoHabit.id)) {
            setConcluded(concluded - 1)
            axios.post(`${BASE_URL}/habits/${infoHabit.id}/uncheck`, body, config)
                .then(reload()).catch(err => alert(err.response.data.message))
        } else if (!habitsFinished.includes(infoHabit.id)) {
            setConcluded(concluded + 1)
            axios.post(`${BASE_URL}/habits/${infoHabit.id}/check`, body, config)
                .then(reload()).catch(err => alert(err.response.data.message))
        } */
    }

    return (
        <BoxHabits
            data-test="today-habit-container">
            <Task>
                <h2 data-test="today-habit-name">{name}</h2>
                <p data-test="today-habit-sequence">Sequência atual: {currentSequence} {(currentSequence === 1 ? "dia" : "dias")}</p>
                <p data-test="today-habit-record">Seu recorde: {highestSequence} {(highestSequence === 1 ? "dia" : "dias")} </p>
            </Task>
            <StyledIcon
                data-test="today-habit-check-btn"
                onClick={() => habitConcluded(h)} />

        </BoxHabits>)
}

export default HabitsBox;