import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { ContainerHistoric, MainHistoric } from "./styled";

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

export default HistoricPage;