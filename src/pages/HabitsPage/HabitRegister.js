import { RegisterHabit, Week, Days, Buttons, Cancel, Save } from "./styled";
import daysOfWeek from "../../constants/daysOfWeek";
import axios from "axios";
import { useContext } from "react";
import { LevelContext } from "../../LevelContext";


function HabitRegister({ reload }) {

    const { setName, name, days, setDays, config, setAdd, enabled, setEnabled } = useContext(LevelContext)

    function addHabit() {

        const body = { name, days };

        setEnabled(true);

        if (days.length > 0) {
            axios.post(`${process.env.REACT_APP_API_URL}/habits`, body, config)
                .then(res => {
                    setDays([])
                    setName("")
                    setAdd(false)
                    reload();           
                    console.log(res.data)
                    setEnabled(false)
                })
                .catch(err => {
                    setEnabled(false)
                    alert(err.response.data.message)
                })
        } else {
            setEnabled(false)
            alert("escolha os dias")
        }
    }

    function selectedDays(id) {
        if (days.includes(id)) {
            setDays(days.filter((d) => d !== id))
        } else {
            setDays([...days, id])
        }
    }

    return (
        <RegisterHabit data-test="habit-create-container">
            <input
                disabled={enabled}
                data-test="habit-name-input"
                placeholder="nome do hábito"
                required
                value={name}
                onChange={e => setName(e.target.value)}
            />

            <Week>
                {daysOfWeek.map((c) =>
                    <Days
                        disabled={enabled}
                        id={c.id}
                        daysW={days}
                        data-test="habit-day"
                        key={c.id}
                        onClick={() => selectedDays(c.id)}>{c.day}</Days>)}
            </Week>

            <Buttons>
                <Cancel
                    disabled={enabled}
                    data-test="habit-create-cancel-btn"
                    onClick={() => setAdd(false)}>Cancelar</Cancel>
                <Save
                    disabled={enabled}
                    data-test="habit-create-save-btn"
                    onClick={addHabit}>Salvar</Save>
            </Buttons>
        </RegisterHabit>
    )
}

export default HabitRegister;