import { ContactPageWrapper, ContactHeroSectWrapper, GetInTouchWrapper, ContactLocationWrapper } from "../index";
import gitMailIcon from "../../assets/git-mail-icon.svg";
import gitPhoneIcon from "../../assets/git-phone-icon.svg";
import gitAddressIcon from "../../assets/git-address-icon.svg";
import gitSendIcon from "../../assets/git-send-icon.svg";
import gitFBLogo from "../../assets/git-fb-logo.svg";
import gitInstaLogo from "../../assets/git-insta-logo.svg";
import gitLinkedinLogo from "../../assets/git-linkedin-logo.svg";
import { Form, NavLink } from "react-router-dom";

const ContactPage = () => {
    window.scrollTo(0, 0);
    return (
        <ContactPageWrapper>
            <ContactHeroSectWrapper>
                <h1 className="contactHero-title">
                    Speak With Our Experts Today
                </h1>
                <p className="contactHero-subtitle">
                    We are here to make your consultation Easy
                </p>
            </ContactHeroSectWrapper>
            <GetInTouchWrapper className="contact-git-container">
                <div className="git-details-container">
                    <div className="contact-details-container">
                        <h2 className="cd-title">
                            Request A Quote
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
            <ContactLocationWrapper>
                <h2 className="contact-map-title map-title">Find Us Easily</h2>
                <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3905.048402514174!2d13.140658074194608!3d11.831883988388451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11049f004d7d5677%3A0x2ec21d8a2258627d!2sThe%20Institute%20of%20Chartered%20Accountants%20of%20Nigeria%2C%20Regional%20Office%20Maiduguri%2C%20Borno%20State.!5e0!3m2!1sen!2sng!4v1782066248526!5m2!1sen!2sng" style={{ border: "0" }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </ContactLocationWrapper>
        </ContactPageWrapper>
    );
};
export default ContactPage;