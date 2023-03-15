import styled from "styled-components";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

function HistoricPage() {
    return (
        <ContainerHistoric>
           <NavBar />

           <MainHistoric>
            <h1>Histórico</h1>

            <p>Em breve você poderá ver o histórico dos seus hábitos aqui</p>

           </MainHistoric>

           <Footer />
        </ContainerHistoric>
    );
}

const ContainerHistoric = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #E5E5E5;
`

const MainHistoric = styled.div`
    >h1 {
            width: 100px;
            height: 29px;
            margin-top: 70px;
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 22.976px;
            line-height: 29px;
            color: #126BA5;
            padding: 10px;
            margin-bottom: 17px;
        }

        >p {
            width: 388px;
            height: 74px;
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 17.976px;
            line-height: 22px;
            color: #666666;
            padding: 10px;
        }
`

export default HistoricPage;