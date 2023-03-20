import axios from "axios";
import { useContext } from "react";
import BASE_URL from "../../constants/baseUrl";
import daysOfWeek from "../../constants/daysOfWeek";
import { LevelContext } from "../../LevelContext";
import HabitRegister from "./HabitRegister";
import { Day, Habit, HabitsList, InfoHabits, TrashIcon, Week } from "./styled";

function ListHabits() {

    const { setHabitsList, habitsList, config, add } = useContext(LevelContext)

    function reload() {
        axios.get(`${BASE_URL}/habits`, config)
            .then(res => {
                console.log("pegou")
                console.log(res.data)
                setHabitsList(res.data)
            })
            .catch(err => alert(err.response.data.message))
    }

    return (
        <HabitsList>
            {add &&
                <HabitRegister reload={reload} />}

            {(habitsList.length !== 0) ? habitsList.map((h) => (
                <Habits
                    habitDay={h.days}
                    name={h.name}
                    key={h.id}
                    id={h.id}
                    reload={reload} />)) : (<p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear</p>)}

        </HabitsList>
    )
}

function Habits({ name, id, reload, habitDay }) {

    const { config, habitsList } = useContext(LevelContext)

    function deleteHabit(id) {
        (window.confirm("Você deseja deletar esse hábito"))
            && axios.delete(`${BASE_URL}/habits/${id}`, config)
                .then(reload)
                .catch(err => alert(err.response.data.message))
    }

    return (
        <Habit data-test="habit-container">

            <InfoHabits >
                <h1 data-test="habit-name">{name}</h1>
                <Week>
                    {daysOfWeek.map((c) =>
                        <Day
                            habitDay={habitDay}
                            idW={c.id}
                            data-test="habit-day"
                            key={c.id}
                        >{c.day}</Day>)}
                </Week>
            </InfoHabits>

            <TrashIcon
                data-test="habit-delete-btn"
                onClick={() => deleteHabit(id)}>

            </TrashIcon>

        </Habit>)
}

export default ListHabits;