import { LevelContext } from "../../LevelContext";
import { useContext, useEffect, useState } from "react";
import { MainHabits, Topo } from "./styled";
import axios from "axios";
import BASE_URL from "../../constants/baseUrl";
import ListHabits from "./ListHabits";

function HabitsMain() {

    const { setHabitsList, config, setAdd } = useContext(LevelContext);

    useEffect(() => {
        axios.get(`${BASE_URL}/habits`, config)
            .then(res => {
                console.log("pegou")
                console.log(res.data)
                setHabitsList(res.data)
            })
            .catch(console.log("nao pegou"))
    }, [])

    return (
        <MainHabits>
            <Topo>
                <h1>Meus hábitos</h1>
                <button
                    data-test="habit-create-btn"
                    onClick={() => setAdd(true)}>+
                </button>
            </Topo>

            <ListHabits />

        </MainHabits>
    )
}

export default HabitsMain;