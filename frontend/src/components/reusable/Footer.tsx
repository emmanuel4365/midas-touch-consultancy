import { Form, NavLink } from "react-router-dom";
import { FooterWrapper } from "../index";
import footerFBLogo from "../../assets/facebook-logo.svg";
import footerInstaLogo from "../../assets/instagram-logo.svg";
import footerLinkedInLogo from "../../assets/linkedin-logo.svg";
import fEmailIcon from "../../assets/footer-mail-icon.svg";
import fPhoneIcon from "../../assets/footer-phone-icon.svg";

const Footer = () => {

    let year = new Date().getFullYear();

    return (
        <FooterWrapper>
            <Form className="sub-form-container">
                <span className="sub-text">
                    Subscribe now
                </span>
                <input type="email" name="email" id="email" placeholder="Your email" />
                <button type="submit">Subscribe</button>
            </Form>
            <div className="links-container">
                <div className="about-container">
                    <h2 className="about-title">
                        About
                    </h2>
                    <p className="about-text">
                        Midas Touch Consultancy is a multidisciplinary professional services and capacity-building firm dedicated to transforming institutions and individuals through excellence in governance, finance, audit, compliance, taxation, monitoring and evaluation, and professional education.
                    </p>
                </div>
                <div className="inner-links-container">
                    <h2 className="ilinks-title">
                        Links
                    </h2>
                    <div className="ilinks-nav">
                        <NavLink to="/">
                            Home
                        </NavLink>
                        <NavLink to="/about">
                            About Us
                        </NavLink>
                        <NavLink to="/services">
                            Services
                        </NavLink>
                        <NavLink to="/gallery">
                            Gallery
                        </NavLink>
                        <NavLink to="/contact">
                            Contact
                        </NavLink>
                    </div>
                </div>
                <div className="wh-container">
                    <h2 className="wh-title">
                        Working Hours
                    </h2>
                    <p className="wh-text text1">
                        The Company is available
                        during working hours
                    </p>
                    <p className="wh-text text2">
                        Mon - Fri  9:00AM - 6:00PM
                    </p>
                    <p className="wh-text text3">
                        Sat - Sun 8:00AM - 4:00PM
                    </p>
                </div>
                <div className="footer-git-container">
                    <h2 className="footer-git-title">
                        Get In Touch
                    </h2>
                    <div className="footer-contact-container">
                        <div className="footer-git-email">
                            <img src={fEmailIcon} alt="footer email icon" className="fgit-email icon" />
                            <span className="f-email-text">
                                Midastouchconsult33@gmail.com
                            </span>
                        </div>
                        <div className="footer-git-phone">
                            <img src={fPhoneIcon} alt="footer phone icon" className="fgit-phone icon" />
                            <span className="f-phone-text">
                                09166661459
                            </span>
                        </div>
                    </div>
                    <div className="footer-socials-container">
                        <img src={footerFBLogo} alt="footer facebook logo" className="footer-fb-logo" />
                        <img src={footerInstaLogo} alt="footer instagram logo" className="footer-insta-logo" />
                        <img src={footerLinkedInLogo} alt="footer linkedin logo" className="footer-linkedin-logo" />
                    </div>
                </div>
            </div>
            <p className="copyright-container">
                © {year} The Midas Touch Consultancy. All rights reserved.
            </p>
        </FooterWrapper>
    );
};
export default Footer;