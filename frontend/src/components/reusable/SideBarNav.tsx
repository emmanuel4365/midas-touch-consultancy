import MidasLogo from "../../assets/midas-touch-logo.svg";
import { CircleX } from "lucide-react";
import { NavLink } from "react-router-dom";
import facebookIcon from "../../assets/facebook-logo.svg";
import instagramIcon from "../../assets/instagram-logo.svg";
import linkedinIcon from "../../assets/linkedin-logo.svg";
import mailIcon from "../../assets/mail-logo.svg";
import phoneIcon from "../../assets/phone-logo.svg";
import { SideBarNavWrapper } from "../index";
import { SquareMenu } from 'lucide-react';
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
import { useEffect } from "react";
// import { useRef } from "react";


const SideBarNav = () => {

    useEffect(() => {
        //Declare Variables
        let openSideBar;
        let closeSideBar;

        //Select DOM Elements
        let sideBarNav = document.querySelector(".sidebar-nav-container") as HTMLElement;
        let navIcon = document.querySelector(".navbar-menu") as HTMLElement;
        let closeIcon = document.querySelector(".close-sidebar-icon") as HTMLElement;
        let homeLink = document.querySelector(".home") as HTMLElement;
        let servicesLink = document.querySelector(".services") as HTMLElement;
        let aboutLink = document.querySelector(".about") as HTMLElement;
        let contactLink = document.querySelector(".contact") as HTMLElement;
        let galleryLink = document.querySelector(".gallery") as HTMLElement;

        // console.log(sideBarNav);
        // console.log(navIcon);
        // console.log(closeIcon);

        //Open sidebar
        openSideBar = () => {
            // sideBarNav.style.setProperty("display", "block");
            sideBarNav.style.setProperty("transform", "translateX(0)");
        };

        //Close sidebar
        closeSideBar = () => {
            sideBarNav.style.setProperty("transform", "translateX(-100%)");
            // sideBarNav.style.setProperty("display", "none");
        };

        //Add Eventlisteners
        navIcon?.addEventListener("click", openSideBar);

        closeIcon?.addEventListener("click", closeSideBar);

        homeLink?.addEventListener("click", closeSideBar);

        servicesLink?.addEventListener("click", closeSideBar);

        aboutLink?.addEventListener("click", closeSideBar);

        contactLink?.addEventListener("click", closeSideBar);

        galleryLink?.addEventListener("click", closeSideBar);

        return () => {
            navIcon?.removeEventListener("click", openSideBar),
                closeIcon?.removeEventListener("click", closeSideBar),
                homeLink?.removeEventListener("click", closeSideBar),
                servicesLink?.removeEventListener("click", closeSideBar),
                aboutLink?.removeEventListener("click", closeSideBar),
                contactLink?.removeEventListener("click", closeSideBar),
                galleryLink?.removeEventListener("click", closeSideBar);
        };


    });

    return (
        <>
            <SquareMenu className="navbar-menu" width={55} height={55} />
            <SideBarNavWrapper className="sidebar-nav-container" aria-label="sidebar navigation section">
                <aside className="sidebar-nav">
                    <div className="sidebar-logo-icon">
                        <NavLink to="/">
                            <img src={MidasLogo} alt="" width={90} />
                        </NavLink>
                        <CircleX size={40} className="close-sidebar-icon" color="#ffffff" />
                    </div>
                    <div className="sidebarLinksAndContactInfo">
                        <nav className="sidebar-nav-links" aria-label="sidebar navigation links">
                            <NavLink className="sidebar-nav-link home" to="/" >Home</NavLink>
                            <NavLink className="sidebar-nav-link about" to="/about" >About</NavLink>
                            <NavLink className="sidebar-nav-link services" to="/services" >Services</NavLink>
                            <NavLink className="sidebar-nav-link gallery" to="/gallery" >Gallery</NavLink>
                            <NavLink className="sidebar-nav-link contact" to="/contact" >Contact</NavLink>
                        </nav>
                        <div className="sidebar-socials">
                            <NavLink to="https://web.facebook.com/officialmidastouch?rdid=P9qsv0wck4Cueakc&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2F1HCexUsnSQ%2F%3F_rdc%3D1%26_rdr#" target="_blank">
                                <img src={facebookIcon} alt="facebook icon" className="sidebar-facebook" />
                            </NavLink>
                            <NavLink to="https://www.instagram.com/the_midas._touch?igsh=emMwMDBwaDBiczVo" target="_blank">
                                <img src={instagramIcon} alt="instagram icon" className="sidebar-instagram" />
                            </NavLink>
                            <NavLink to="https://www.linkedin.com/company/the-midas-touch-consultancy/posts/?feedView=all" target="_blank">
                                <img src={linkedinIcon} alt="linkedin icon" className="sidebar-linkedin" />
                            </NavLink>
                        </div>
                        <div className="sidebar-contact-info">
                            <div className="sidebar-mail">
                                <img src={mailIcon} alt="mail icon" />
                                <span>
                                    midastouchconsult33@gmail.com
                                </span>
                            </div>
                            <div className="sidebar-phone">
                                <img src={phoneIcon} alt="phone icon" />
                                <span>
                                    09166661459
                                </span>
                            </div>
                            <hr />
                        </div>
                        <p className="sidebar-copyright">
                            &copy; {new Date().getFullYear()} The Midas Touch Consultancy.
                        </p>
                    </div>
                </aside>
            </SideBarNavWrapper>
        </>
    );
};
export default SideBarNav;
