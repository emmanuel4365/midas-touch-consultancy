import {
    ServicesPageWrapper,
    ServicesPageServicesWrapper,
    ServicesPageHeroWrapper,
    GetInTouchWrapper,
} from "../index";
import corpImage from "../../assets/corp-services-icon.svg";
import humanDevImage from "../../assets/human-dev-icon.svg";
import { Form, NavLink } from "react-router-dom";
import gitMailIcon from "../../assets/git-mail-icon.svg";
import gitPhoneIcon from "../../assets/git-phone-icon.svg";
import gitAddressIcon from "../../assets/git-address-icon.svg";
import gitSendIcon from "../../assets/git-send-icon.svg";
import gitFBLogo from "../../assets/git-fb-logo.svg";
import gitInstaLogo from "../../assets/git-insta-logo.svg";
import gitLinkedinLogo from "../../assets/git-linkedin-logo.svg";

const ServicesPage = () => {
    window.scrollTo(0, 0);
    return (
        <ServicesPageWrapper>
            <ServicesPageHeroWrapper>
                <h1 className="services-page-title">
                    Our Services
                </h1>
                <p className="services-page-subtitle">
                    What we do Best
                </p>
            </ServicesPageHeroWrapper>
            <ServicesPageServicesWrapper>
                <div className="corp-container services">
                    <img src={corpImage} alt="Corporate Image" className="corp-img" width={70} />
                    <div className="service service-list">
                        <h2 className="corp-list-title">
                            CORPORATE SERVICES
                        </h2>
                        <p>1. Audit and Accounting Services</p>
                        <p>2. Compliance Services</p>
                        <p>3. Tax Consulting Services</p>
                        <p>4. Project Management </p>
                        <p>5. Human Resource Consulting</p>
                        <p>6. Monitoring and Evaluation Services</p>
                        <p>7. Institutional Capacity Building</p>
                        <p>8. Corporate Training Services</p>
                        <p>9. Corporate Governance</p>
                    </div>
                </div>
                <div className="human-dev-container services">
                    <img src={humanDevImage} alt="Human Development Image" className="human-dev-img" width={70} />
                    <div className="service service-list" id="service-list2">
                        <h2 className="human-dev-list-title">
                            HUMAN DEVELOPMENT
                        </h2>
                        <p>1. ICAN Exam prep class</p>
                        <p>2. ICSAN exam prep class</p>
                        <p>3. CIPM Exam prep class</p>
                        <p>4. CITN Exam prep class</p>
                        <p>5. CIBN Exam prep class</p>
                        <p>6. PMDPro Exam Prep class</p>
                        <p>7. FMDpro Exam Prep</p>
                        <p>8. ACCA Exam prep class</p>
                        <p>9. CISA Exam prep class</p>
                        <p>10. CIMA Exam prep class</p>
                    </div>
                </div>
            </ServicesPageServicesWrapper>
            <GetInTouchWrapper className="services-git-container">
                <div className="git-details-container">
                    <div className="contact-details-container">
                        <h2 className="cd-title">
                            Get in Touch
                        </h2>
                        <p className="cd-paragraph">
                            Ready to improve performance?
                            Let's start the conversation
                        </p>
                        <div className="mail-container git-container">
                            <img src={gitMailIcon} alt="Get In Touch Mail Icon" className="mail icon" />
                            <div className="mail-content content">
                                Midastouchconsult33@gmail.com
                            </div>
                        </div>
                        <div className="phone-container git-container">
                            <img src={gitPhoneIcon} alt="Get In Touch Phone Icon" className="phone icon" />
                            <div className="phone-content content">
                                09166661459
                            </div>
                        </div>
                        <div className="address-container git-container">
                            <img src={gitAddressIcon} alt="Get In Touch address Icon" className="address icon" />
                            <div className="address-content content">
                                23 Kunle Ogungba Street, Lekki, Lagos.
                                <br />
                                <br />

                                ICAN Regional Building, State Secretariat, Maiduguri, Borno State.
                                <br />
                                <br />

                                Maiduguri Physical lecture venue:
                                Kashim Shettima Day Secondary School, Bama Road Maiduguri.
                            </div>
                        </div>
                    </div>
                    <Form className="msg container">
                        <h3 className="form-title">Send a Message</h3>
                        <input type="text" placeholder="Name" name="name" id="name" />
                        <input type="email" name="e-mail" placeholder="E-mail address" id="e-mail" />
                        <textarea name="message" placeholder="Message" rows={15} cols={60} id="message"></textarea>
                        <button type="submit">
                            <img src={gitSendIcon} alt="" className="send-btn-img" />
                            <span className="send-btn-text">Send Message</span>
                        </button>
                    </Form>
                </div>
                <div className="git-socials-container">
                    <p className="git-social-text">
                        Follow Us:
                    </p>
                    <NavLink to="https://web.facebook.com/officialmidastouch?rdid=P9qsv0wck4Cueakc&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2F1HCexUsnSQ%2F%3F_rdc%3D1%26_rdr#" target="_blank">
                        <img src={gitFBLogo} alt="Get in touch facebook logo" className="git-insta logo" />
                    </NavLink>
                    <NavLink to="https://www.instagram.com/the_midas._touch?igsh=emMwMDBwaDBiczVo" target="_blank">
                        <img src={gitInstaLogo} alt="Get in touch instagram logo" className="git-insta logo" />
                    </NavLink>
                    <NavLink to="https://www.linkedin.com/company/the-midas-touch-consultancy/posts/?feedView=all" target="_blank">
                        <img src={gitLinkedinLogo} alt="Get in touch linkedin logo" className="git-linkedin logo" />
                    </NavLink>
                </div>
            </GetInTouchWrapper>
        </ServicesPageWrapper>
    );
};
export default ServicesPage;