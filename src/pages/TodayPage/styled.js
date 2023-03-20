import styled from "styled-components";
import { Checkbox } from "react-ionicons";

export const ContainerToday = styled.div`
    width: 100vw;
    height: 100vh;
    background: #E5E5E5;
    margin-top: 70px;
`

export const MainToday = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    >h2 {
        width: 372px;
        height: 29px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
        margin-top: 28px;
        margin-left: 10px;
    }

    >h3 {
        width: 378px;
        height: 22px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: ${p => p.percentage !== 0 ? "#8FC549" : "#BABABA"};
        margin-bottom: 15px;
        margin-left: 15px;
    }
`

export const BoxHabits = styled.div`
    width: 95vw;
    height: 94px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 10px;
    display: flex;    
    justify-content: space-between;
`

export const Task = styled.div`
    width: 200px;
    height: 200px;

    >h2 {
        width: 308px;
        height: 25px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
        margin-bottom: 15px;
        padding-left: 7px;
    }

    >p {
        width: 246px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 12.976px;
        line-height: 16px;
        color: #666666;
        padding-left: 7px;
    }
`

export const Record = styled.span `
    width: 246px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;
    color: ${p => p.currentSequence >= p.highestSequence ? "#8FC549" : "#666666"};
    padding-left: 7px;
`

export const StyledIcon = styled(Checkbox)`
    width: 69px;
    height: 69px;
    background: transparent;
    border: none;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`
