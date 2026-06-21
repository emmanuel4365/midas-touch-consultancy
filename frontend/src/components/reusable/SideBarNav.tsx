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
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// import { useEffect, useRef } from "react";
import { useRef } from "react";



const SideBarNav = () => {
    const sideBarContainer = useRef(null);

    const { contextSafe } = useGSAP();

    const openSideBar = contextSafe(() => {
        gsap.to(sideBarContainer.current, {
            xPercent: -100, duration: 1
        });
        // console.log(context.data.length);

    });

    const closeSideBar = contextSafe(() => {
        gsap.to(sideBarContainer.current, {
            xPercent: 100, duration: 1
        });
        // console.log(context.data.length);
    });

    // useEffect(() => {

    //     window.addEventListener('orientationchange', () => {
    //         location.reload();
    //     });


    //     window.addEventListener('resize', () => {
    //         location.reload();
    //     });

    //     return () => {
    //         window.removeEventListener('orientationchange', () => {
    //             location.reload();
    //         }),
    //             window.removeEventListener('resize', () => {
    //                 location.reload();
    //             });
    //     };

    // });



    return (
        <>
            <SquareMenu className="navbar-menu" width={55} height={55} onClick={openSideBar} />
            <SideBarNavWrapper className="sidebar-nav-container" aria-label="sidebar navigation section" ref={sideBarContainer}>
                <aside className="sidebar-nav">
                    <div className="sidebar-logo-icon">
                        <NavLink to="/">
                            <img src={MidasLogo} alt="" width={90} onClick={closeSideBar} />
                        </NavLink>
                        <CircleX size={40} className="close-sidebar-icon" color="#ffffff" onClick={closeSideBar} />
                    </div>
                    <div className="sidebarLinksAndContactInfo">
                        <nav className="sidebar-nav-links" aria-label="sidebar navigation links">
                            <NavLink className="sidebar-nav-link home" to="/" onClick={closeSideBar}>Home</NavLink>
                            <NavLink className="sidebar-nav-link" to="/about" onClick={closeSideBar}>About</NavLink>
                            <NavLink className="sidebar-nav-link" to="/services" onClick={closeSideBar}>Services</NavLink>
                            <NavLink className="sidebar-nav-link" to="/gallery" onClick={closeSideBar}>Gallery</NavLink>
                            <NavLink className="sidebar-nav-link contact" to="/contact" onClick={closeSideBar}>Contact</NavLink>
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
