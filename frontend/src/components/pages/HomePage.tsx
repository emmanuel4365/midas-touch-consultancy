import { NavLink, Outlet } from "react-router-dom";
import Footer from "../reusable/Footer";
import NavBar from "../reusable/NavBar";
import LogoContainer from "../reusable/LogoContainer";
import { HeaderContact, HeaderWrapper, LogoNavbarWrapper } from "../index";
import { SquareMenu } from 'lucide-react';

const HomePage = () => {

    return (
        <>
            <HeaderWrapper>
                <HeaderContact />
                <LogoNavbarWrapper>
                    <LogoContainer />
                    <NavBar />
                    <NavLink to="/services">
                        <button type="button" className="consultation-btn">
                            Book Consultation
                        </button>
                    </NavLink>
                    <SquareMenu className="navbar-menu" width={55} height={55} />
                </LogoNavbarWrapper>
            </HeaderWrapper>
            <Outlet />
            <Footer />
        </>
    );
};
export default HomePage;