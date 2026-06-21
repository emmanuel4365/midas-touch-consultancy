import { HeaderContactWrapper } from "../index";
import phoneLogo from "../../assets/phone-logo.svg";
import mailLogo from "../../assets/mail-logo.svg";
import facebookLogo from "../../assets/facebook-logo.svg";
import instagramLogo from "../../assets/instagram-logo.svg";
import linkedinLogo from "../../assets/linkedin-logo.svg";
import { NavLink } from "react-router-dom";

const HeaderContact = () => {
    return (
        <HeaderContactWrapper>
            <div className="hc-phone-email-container">
                <div className="hc-phone-container">
                    <img src={phoneLogo} alt="Phone icon" className="hc-phone-icon" />
                    <p className="hc-phone">09166661459</p>
                </div>
                <div className="hc-email-container">
                    <img src={mailLogo} alt="Email icon" className="hc-email-icon" />
                    <p className="hc-email">midastouchconsult33@gmail.com</p>
                </div>
            </div>
            <div className="hc-socials-container">
                <NavLink to="https://web.facebook.com/officialmidastouch?rdid=P9qsv0wck4Cueakc&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2F1HCexUsnSQ%2F%3F_rdc%3D1%26_rdr#" target="_blank">
                    <img src={facebookLogo} alt="Facebook logo" className="hc-facebook-logo" />
                </NavLink>
                <NavLink to="https://www.instagram.com/the_midas._touch?igsh=emMwMDBwaDBiczVo" target="_blank">
                    <img src={instagramLogo} alt="Instagram logo" className="hc-instagram-logo" />
                </NavLink>
                <NavLink to="https://www.linkedin.com/company/the-midas-touch-consultancy/posts/?feedView=all" target="_blank">
                    <img src={linkedinLogo} alt="LinkedIn logo" className="hc-linkedin-logo" />
                </NavLink>
            </div>
        </HeaderContactWrapper>
    );
};
export default HeaderContact;