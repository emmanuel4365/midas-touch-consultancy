import MidasLogo from "../../assets/midas-touch-logo.svg";
import { CircleX } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import facebookIcon from "../../assets/facebook-logo.svg";
import instagramIcon from "../../assets/instagram-logo.svg";
import linkedinIcon from "../../assets/linkedin-logo.svg";
import mailIcon from "../../assets/mail-logo.svg";
import phoneIcon from "../../assets/phone-logo.svg";
import { SideBarNavWrapper } from "../index";

const SideBarNav = () => {
    const closeSideBarNav = () => {
        const sidebarNav = document.querySelector(".sidebar-nav") as HTMLElement;
        sidebarNav.style.animation = "sidebarSlideOut 0.5s forwards";
    };

    return (
        <SideBarNavWrapper className="sidebar-nav-container" aria-label="sidebar navigation section">
            <aside className="sidebar-nav">
                <div className="sidebar-logo-icon">
                    <img src={MidasLogo} alt="" width={90} />
                    <CircleX size={40} onClick={closeSideBarNav} className="close-sidebar-icon" color="#ffffff" />
                </div>
                <div className="sidebarLinksAndContactInfo">
                    <nav className="sidebar-nav-links" aria-label="sidebar navigation links">
                        <NavLink className="sidebar-nav-link home" to="/" onClick={closeSideBarNav}>Home</NavLink>
                        <NavLink className="sidebar-nav-link" to="/about" onClick={closeSideBarNav}>About</NavLink>
                        <NavLink className="sidebar-nav-link" to="/services" onClick={closeSideBarNav}>Services</NavLink>
                        <NavLink className="sidebar-nav-link" to="/gallery" onClick={closeSideBarNav}>Gallery</NavLink>
                        <NavLink className="sidebar-nav-link contact" to="/contact" onClick={closeSideBarNav}>Contact</NavLink>
                    </nav>
                    <div className="sidebar-socials">
                        <Link to={"https://www.google.com/"} target="_blank">
                            <img src={facebookIcon} alt="facebook icon" className="sidebar-facebook" />
                        </Link>
                        <Link to={""}>
                            <img src={instagramIcon} alt="instagram icon" className="sidebar-instagram" />
                        </Link>
                        <Link to={""}>
                            <img src={linkedinIcon} alt="linkedin icon" className="sidebar-linkedin" />
                        </Link>
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
    );
};
export default SideBarNav;