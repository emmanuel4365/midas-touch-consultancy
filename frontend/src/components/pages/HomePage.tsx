import { NavLink, Outlet } from "react-router-dom";
import Footer from "../reusable/Footer";
import NavBar from "../reusable/NavBar";
import LogoContainer from "../reusable/LogoContainer";
import { HeaderContact, HeaderWrapper, LogoNavbarWrapper, SideBarNav } from "../index";



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
                    <SideBarNav />
                </LogoNavbarWrapper>
            </HeaderWrapper>
            <Outlet />
            <Footer />
        </>
    );
};
export default HomePage;