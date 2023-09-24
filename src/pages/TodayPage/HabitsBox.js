import axios from "axios";
import { useContext, useState } from "react";
import { LevelContext } from "../../LevelContext";
import { BoxHabits, StyledIcon, Task, Record } from "./styled";

function HabitsBox({ name, currentSequence, highestSequence, h, done }) {

    const [marcadas, setMarcadas] = useState([])
    const [check, setCheck] = useState(done)

    const { config, habitsFinished,
        setHabitsFinished, habitToday, setHabitToday, setPercentage } = useContext(LevelContext);

    function reload() {
        axios.get(`${process.env.REACT_APP_API_URL}/habits/today`, config)
            .then(res => {
                console.log(res.data)
                setHabitToday(res.data)
            })
            .catch(err => alert(err))
    }

    function habitConcluded(infoHabit) {
        const body = {};
        console.log(infoHabit.done)

        if (!infoHabit.done) {

            axios.post(`${process.env.REACT_APP_API_URL}/habits/${infoHabit.id}/check`, body, config)
                .then(() => {
                    setMarcadas([...marcadas, infoHabit])
                    const listaHabitos = [...habitsFinished, infoHabit]
                    setHabitsFinished(listaHabitos);
                    setPercentage(Math.round(listaHabitos.length / habitToday.length * 100));
                    setCheck(!done)
                    reload();
                }
                ).catch(err => {
                    alert(err)
                })
        } else {

            axios.post(`${process.env.REACT_APP_API_URL}/habits/${infoHabit.id}/uncheck`, body, config)
                .then(() => {
                    const lista = habitsFinished.filter(h => h !== infoHabit)
                    console.log(lista)
                    setHabitsFinished(lista);
                    setPercentage(Math.round((lista.length) / habitToday.length * 100));
                    setCheck(!done)
                    reload();
                }
                ).catch(err => {
                    alert(err)
                })
        }
    }



    return (
        <BoxHabits
            data-test="today-habit-container">
            <Task>
                <h2 data-test="today-habit-name">{name}</h2>
                <p data-test="today-habit-sequence">Sequência atual: {currentSequence} {(currentSequence === 1 ? "dia" : "dias")}</p>
                <p data-test="today-habit-record">Seu recorde:
                    <Record
                        highestSequence={highestSequence}
                        currentSequence={currentSequence}>
                        {highestSequence} {(highestSequence === 1 ? "dia" : "dias")} </Record></p>
            </Task>
            <StyledIcon
                visible={true}
                height="80"
                width="80"
                ariaLabel="comment-loading"
                wrapperStyle={{}}
                wrapperClass="comment-wrapper"
                color={check ? "#8FC549" : "#EBEBEB"}
                backgroundColor="red"
                data-test="today-habit-check-btn"
                onClick={() => habitConcluded(h)} />

        </BoxHabits>)
}

export default HabitsBox;