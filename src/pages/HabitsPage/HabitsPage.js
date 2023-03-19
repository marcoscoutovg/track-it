import styled from "styled-components"
import Footer from "../../components/Footer/Footer"
import NavBar from "../../components/NavBar/NavBar"
import { Add, Trash } from "react-ionicons";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../../constants/baseUrl";
import { LevelContext } from "../../LevelContext";
import daysOfWeek from "../../constants/daysOfWeek";

function HabitsPage() {

    const { habitsList, setHabitsList, config } = useContext(LevelContext);
    const [add, setAdd] = useState(false);
    const [name, setName] = useState("");
    const [days, setDays] = useState([]);


    useEffect(() => {
        axios.get(`${BASE_URL}/habits`, config)
            .then(res => {
                console.log("pegou")
                console.log(res.data)
                setHabitsList(res.data)
            })
            .catch(console.log("nao pegou"))
    }, [])

    function reload() {
        axios.get(`${BASE_URL}/habits`, config)
            .then(res => {
                console.log("pegou")
                console.log(res.data)
                setHabitsList(res.data)
            })
            .catch(err => alert(err.response.data.message))
    }

    function deleteHabit(id) {
        (window.confirm("Você deseja deletar esse hábito"))
            && axios.delete(`${BASE_URL}/habits/${id}`, config)
                .then(reload)
                .catch(err => alert(err.response.data.message))
    }

    function addHabit() {
        const body = { name, days }

        if (days.length > 0) {
            axios.post(`${BASE_URL}/habits`, body, config)
                .then(res => {
                    setDays([])
                    setName("")
                    setAdd(false)
                    reload();
                    console.log(res.data)
                })
                .catch(err => alert(err.response.data.message))
        } else {
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

    console.log(name)
    console.log(days)

    return (
        <ContainerHabits>
            <NavBar />
            <MainHabits>
                <Topo>
                    <h1>Meus hábitos</h1>
                    <button
                        data-test="habit-create-btn"
                        onClick={() => setAdd(true)}><Add /></button>
                </Topo>

                <HabitsList>
                    {add &&
                        <RegisterHabit data-test="habit-create-container">
                            <input
                                data-test="habit-name-input"
                                placeholder="nome do hábito"
                                required
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />

                            <Week>
                                {daysOfWeek.map((c) =>
                                    <Day
                                        data-test="habit-day"
                                        key={c.id}
                                        onClick={() => selectedDays(c.id)}>{c.day}</Day>)}
                            </Week>

                            <Buttons>
                                <Cancel
                                    data-test="habit-create-cancel-btn"
                                    onClick={() => setAdd(false)}>Cancelar</Cancel>
                                <Save
                                    data-test="habit-create-save-btn"
                                    onClick={addHabit}>Salvar</Save>
                            </Buttons>
                        </RegisterHabit>}

                    {(habitsList.length !== 0) ? habitsList.map((h) => (
                        <Habit
                            data-test="habit-container"
                            key={h.id}>

                            <InfoHabits >
                                <h1 data-test="habit-name">{h.name}</h1>
                                <Week>
                                    {daysOfWeek.map((c) =>
                                        <Day
                                            data-test="habit-day"
                                            key={c.id}
                                        >{c.day}</Day>)}
                                </Week>
                            </InfoHabits>

                            <Trash
                                data-test="habit-delete-btn"
                                onClick={() => deleteHabit(h.id)} />

                        </Habit>)) : (<p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear</p>)}

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
    width: 100vw;
    height: auto;
    background-color: #E5E5E5;
    margin-bottom: 70px;
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

    >button {
        width: 40px;
        height: 35px;
        margin-top: 70px;
        background-color: #52B6FF;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        border: none;
    }
`

const HabitsList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 17px;

    >p {
        width: auto;
        height: 74px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #666666;
        padding: 0 15px;
    }
`

const Habit = styled.div`
    width: 100%;
    height: 91px;
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    padding: 0 10px;
`

const Week = styled.div`
    width: 100%;
    height: 25px;
    display: flex;
`

const Day = styled.button`
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

const RegisterHabit = styled.div`
    width: 340px;
    height: 180px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
`

const Buttons = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-right: 16px;
    margin-top: 60px;
`

const Cancel = styled.button`
    width: 84px;
    height: 35px;
    background-color: white;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    color: #52B6FF; 
    border: none;
    border-radius: 5px;
    margin-right: 20px;
`

const Save = styled.button`
    width: 84px;
    height: 35px;
    background-color: #52B6FF;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    color: white; 
    border: none;
    border-radius: 5px;
`

export default HabitsPage;