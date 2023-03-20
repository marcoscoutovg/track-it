import Footer from "../../components/Footer/Footer"
import NavBar from "../../components/NavBar/NavBar"
import HabitsMain from "./HabitsMain";
import { ContainerHabits } from "./styled";

function HabitsPage() {

    return (
        <ContainerHabits>
            <NavBar />
            <HabitsMain />
            <Footer />
        </ContainerHabits>
    );
}

export default HabitsPage;