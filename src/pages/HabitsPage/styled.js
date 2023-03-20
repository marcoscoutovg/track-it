import styled from "styled-components";
import { TrashOutline } from "react-ionicons";

export const ContainerHabits = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #E5E5E5;
`

export const MainHabits = styled.div`
    width: 100vw;
    height: auto;
    background-color: #E5E5E5;
    margin-bottom: 70px;
    padding: 0 18px;
    margin-top: 28px;
`
export const Topo = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    
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
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 700;
        font-size: 25px;
        line-height: 34px;
        text-align: center;
        color: #FFFFFF;
    }
`

export const HabitsList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

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

export const Habit = styled.div`
    width: 100%;
    height: 91px;
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    padding: 0 10px;
`

export const Week = styled.div`
    width: 100%;
    height: 25px;
    display: flex;
`

export const Day = styled.button`
    width: 30px;
    height: 30px;
    border: 1px solid #CFCFCF;
    border-radius: 5px;
    margin-right: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #DBDBDB;
    background-color:  "#FFFFFF";
    
`

export const Days = styled.button`
    width: 30px;
    height: 30px;
    border: 1px solid #CFCFCF;
    border-radius: 5px;
    margin-right: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #DBDBDB;
    background-color:"#FFFFFF";
    
`

export const InfoHabits = styled.div`
    margin-left: 10px;

    >h1 {
        width: 208px;
        height: 25px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
        margin-top: 13px;
        margin-bottom: 10px;
    }
`

export const RegisterHabit = styled.div`
    width: 340px;
    height: 180px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
    padding: 0 20px;
    
    >input {
        margin-top: 20px;
        margin-bottom: 10px;
    }
`

export const Buttons = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 35px;
`

export const Cancel = styled.button`
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

export const Save = styled.button`
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

export const TrashIcon = styled(TrashOutline)`
    width: 18px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`