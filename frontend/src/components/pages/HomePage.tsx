import { NavLink, Outlet } from "react-router-dom";
import Footer from "../reusable/Footer";
import NavBar from "../reusable/NavBar";
import LogoContainer from "../reusable/LogoContainer";
import { HeaderContact, HeaderWrapper, LogoNavbarWrapper, SideBarNav } from "../index";
import { SquareMenu } from 'lucide-react';

const HomePage = () => {

    const openSideBarNav = () => {
        const sidebarNav = document.querySelector(".sidebar-nav") as HTMLElement;
        sidebarNav.style.animation = "sidebarSlideIn 0.5s forwards";
    };


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
                    <SquareMenu className="navbar-menu" width={55} height={55} onClick={openSideBarNav} />
                    <SideBarNav />
                </LogoNavbarWrapper>
            </HeaderWrapper>
            <Outlet />
            <Footer />
        </>
    );
};
export default HomePage;