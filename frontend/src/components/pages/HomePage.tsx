import { NavLink, Outlet } from "react-router-dom";
import Footer from "../reusable/Footer";
import NavBar from "../reusable/NavBar";
import LogoContainer from "../reusable/LogoContainer";
import { HeaderContact, HeaderWrapper, LogoNavbarWrapper } from "../index";
// import { useGSAP } from "@gsap/react";
// import { useRef } from "react";

const HomePage = () => {

    // const clientBrandContainer = useRef(null);
    // useGSAP(() => {
    //     gsap.to(".original", {
    //         xPercent: -100,
    //         repeat: -1,
    //         duration: 5,
    //         ease: "none"
    //     });
    //     gsap.to(".copy", {
    //         xPercent: -200,
    //         repeat: -1,
    //         duration: 10,
    //         ease: "none"
    //     });
    // }, { dependencies: [], scope: clientBrandContainer });

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
                </LogoNavbarWrapper>
            </HeaderWrapper>
            <Outlet />
            <Footer />
        </>
    );
};
export default HomePage;