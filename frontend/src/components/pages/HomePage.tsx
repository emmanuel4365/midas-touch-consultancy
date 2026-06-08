import { Outlet } from "react-router-dom";
import Footer from "../reusable/Footer";
import NavBar from "../reusable/NavBar";
import LogoContainer from "../reusable/LogoContainer";

const HomePage = () => {
    return (
        <>
            <header>
                <LogoContainer />
                <NavBar />
            </header>
            <Outlet />
            <Footer />
        </>
    );
};
export default HomePage;