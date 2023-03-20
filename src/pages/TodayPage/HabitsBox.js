import axios from "axios";
import { useContext, useState } from "react";
import BASE_URL from "../../constants/baseUrl";
import { LevelContext } from "../../LevelContext";
import { BoxHabits, StyledIcon, Task } from "./styled";

function HabitsBox({ name, currentSequence, highestSequence, h, done }) {

    const [marcadas, setMarcadas] = useState([])

    const { config, habitsFinished,
        setHabitsFinished, habitToday, setHabitToday, setPercentage } = useContext(LevelContext);

    function reload() {
        axios.get(`${BASE_URL}/habits/today`, config)
            .then(res => {
                console.log(res.data)
                setHabitToday(res.data)
            })
            .catch(err => console.log(err))
    }

    function habitConcluded(infoHabit) {
        const body = {};
        console.log(infoHabit.done)

        if (!infoHabit.done) {

            axios.post(`${BASE_URL}/habits/${infoHabit.id}/check`, body, config)
                .then(() => {
                    setMarcadas([...marcadas, infoHabit])
                    const listaHabitos = [...habitsFinished, infoHabit]
                    setHabitsFinished(listaHabitos);
                    setPercentage(Math.round(listaHabitos.length / habitToday.length * 100));
                    reload();
                }
                ).catch(err => {
                    console.log(err)
                })
        } else {

            axios.post(`${BASE_URL}/habits/${infoHabit.id}/uncheck`, body, config)
                .then(() => {
                    const lista = [...habitsFinished].filter(h => h !== infoHabit)
                    setHabitsFinished();
                    setPercentage(Math.round((lista.length) / habitToday.length * 100));
                    reload();
                }
                ).catch(err => {
                    console.log(err)
                })
        }
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
                visible={true}
                height="80"
                width="80"
                ariaLabel="comment-loading"
                wrapperStyle={{}}
                wrapperClass="comment-wrapper"
                color={done ? "#8FC549" : "#EBEBEB"}
                backgroundColor="red"
                data-test="today-habit-check-btn"
                onClick={() => habitConcluded(h)} />

        </BoxHabits>)
}

export default HabitsBox;