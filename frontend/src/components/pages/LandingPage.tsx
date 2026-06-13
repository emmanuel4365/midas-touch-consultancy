import { NavLink } from "react-router-dom";
import { AboutCompanyWrapper, ClienteleWrapper, CustomerCareWrapper, HeroSectionWrapper, LandingPageWrapper, ServicesWrapper } from "../index";
import heroImage from "../../assets/hero-image.jpg";
import cSupportIcon from "../../assets/customer-support-icon.svg";
import cAdviceIcon from "../../assets/customer-advice-icon.svg";
import cSatisfactionIcon from "../../assets/customer-satisfaction-icon.svg";
import aboutMainImage from "../../assets/about-comp-main-img.jpg";
import aboutEllipseIcon from "../../assets/about-comp-ellipse-icon.svg";
import aboutDotsIcon from "../../assets/about-comp-dots-icon.svg";
import aboutPaperIcon from "../../assets/about-comp-paper-icon.svg";
import corpIcon from "../../assets/corp-services-icon.svg";
import hdevIcon from "../../assets/human-dev-icon.svg";
import bornoLogo from "../../assets/borno-logo.svg";
import cbiLogo from "../../assets/cbi-logo.svg";
import greenLogo from "../../assets/greencode-logo.svg";
import gepadcLogo from "../../assets/gepadc-logo.svg";
import sooyaLogo from "../../assets/sooya-logo.svg";
import catholicLogo from "../../assets/catholic-logo.svg";
import fradLogo from "../../assets/frad-logo.svg";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

const LandingPage = () => {
    const container = useRef(null);
    const container2 = useRef(null);

    useGSAP(() => {

        gsap.to(container.current, {
            xPercent: -100,
            repeat: -1,
            duration: 10,
            ease: "none"
        });

        gsap.to(container2.current, {
            xPercent: -100,
            repeat: -1,
            duration: 10,
            ease: "none"
        });
    }, []);



    return (
        <LandingPageWrapper>
            <HeroSectionWrapper>
                <div className="hero-text-content-container">
                    <h1>Transforming Institutions, Empowering Professionals</h1>
                    <p>Midas Touch Consultancy provides expert advisory and professional training,
                        helping organizations and individuals strengthen governance, finance,
                        compliance, and operational systems,build capacity,manage risk,
                        and achieve sustainable growth and success.</p>
                    <NavLink to="/services"><button className="hero-button">Book Consultation</button></NavLink>
                </div>
                <div className="hero-image-container">
                    <img src={heroImage} alt="Hero Image" className="hero-image" />
                </div>
            </HeroSectionWrapper>
            <CustomerCareWrapper>
                <h2 className="customer-care-title">Customer Care Services</h2>
                <div className="c-support-container">
                    <img src={cSupportIcon} alt="Customer support icon" className="c-support-icon" />
                    <div className="c-support-text-container">
                        <h3>24/7 Support</h3>
                        <p>Our team is available around the clock,
                            providing assistance whenever
                            you need it.
                        </p>
                    </div>
                </div>
                <div className="c-advice-container">
                    <img src={cAdviceIcon} alt="Customer advice icon" className="c-advice-icon" />
                    <div className="c-advice-text-container">
                        <h3>Unlimited Advice</h3>
                        <p>Get unlimited expert guidance across governance, finance, audit, and compliance.
                        </p>
                    </div>
                </div>
                <div className="c-satisfaction-container">
                    <img src={cSatisfactionIcon} alt="Customer satisfaction icon" className="c-satisfaction-icon" />
                    <div className="c-satisfaction-text-container">
                        <h3>100% Customer satisfaction</h3>
                        <p>We are committed to delivering exceptional results, and ensuring every client is fully satisfied.
                        </p>
                    </div>
                </div>
            </CustomerCareWrapper>
            <AboutCompanyWrapper>
                <div className="about-images-container">
                    <div className="about-section-main-img"><img className="about-img1" src={aboutMainImage} alt="About Section Main Image" />
                    </div>
                    <div className="about-section-ellipse"><img className="about-img2" src={aboutEllipseIcon} alt="About Section Ellipse Icon" />
                    </div>
                    <div className="about-section-dots" ><img className="about-img3" src={aboutDotsIcon} alt="About Section Dots Icon" />
                    </div>
                </div>
                <div className="about-text-button-container">
                    <h2 className="about-title">
                        About Company
                    </h2>
                    <h3 className="about-subtitle">
                        Driving Organizational
                        Excellence, Empowering People
                    </h3>
                    <p className="about-pg">
                        Midas Touch Consultancy is a multidisciplinary professional services and capacity-building firm made up of seasoned professionals dedicated to transforming institutions and individuals through excellence in governance, finance, audit, compliance, taxation, monitoring and evaluation, and professional education.
                    </p>
                    <div className="about-icon-text-container">
                        <div className="about-icon-text about-it1">
                            <img src={aboutPaperIcon} alt="About Paper Icon" className="about-paper-icon about-pi1" />
                            <span className="about-paper-text about-pt1">
                                Experienced Team
                            </span>
                        </div>
                        <div className="about-icon-text about-it2">
                            <img src={aboutPaperIcon} alt="About Paper Icon" className="about-paper-icon about-pi2" />
                            <span className="about-paper-text about-pt2">
                                Excellent success
                            </span>
                        </div>
                    </div>
                    <NavLink to="/services">
                        <button className="about-btn">
                            Discover our services
                        </button>
                    </NavLink>
                </div>
            </AboutCompanyWrapper>
            <ServicesWrapper>
                <h2 className="services-title">
                    Our Services
                </h2>
                <h3 className="services-subtitle">
                    What we do Best
                </h3>
                <div className="corp-hdev-container">
                    <div className="corp-container service">
                        <div className="corp-box box">CORPORATE SERVICES</div>
                        <div className="corp-icon-container icon-container">
                            <img src={corpIcon} alt="corporate services icon" className="corp-icon" />
                        </div>
                        <NavLink to="/services"><button className="corp-btn">Learn More</button></NavLink>
                    </div>
                    <div className="hdev-container service">
                        <div className="hdev-box box">HUMAN CAPITAL DEVELOPMENT</div>
                        <div className="hdev-icon-container icon-container">
                            <img src={hdevIcon} alt="human development icon" className="hdev-icon" />
                        </div>
                        <NavLink to="/services"><button className="hdev-btn">Learn More</button></NavLink>
                    </div>
                </div>
            </ServicesWrapper>
            <ClienteleWrapper>
                <h2 className="client-title">
                    Our Clientele
                </h2>
                <h3 className="client-subtitle">
                    Our Trusted Brands
                </h3>
                <div className="brands-container" >
                    <div ref={container} className="client-brands-container brands original" id="original">
                        <div className="brand b1">
                            <img src={bornoLogo} className="brand1" alt="Borno state government logo" />
                        </div>
                        <div className="brand b2">
                            <img src={cbiLogo} className="brand2" alt="Care best initiative logo" />
                        </div>
                        <div className="brand b3">
                            <img src={greenLogo} className="brand3" alt="Green code logo" />
                        </div>
                        <div className="brand b4">
                            <img src={gepadcLogo} className="brand4" alt="GEPADC logo" />
                        </div>
                        <div className="brand b5">
                            <img src={sooyaLogo} className="brand5" alt="Sooyah bistro logo" />
                        </div>
                        <div className="brand b6">
                            <img src={fradLogo} className="brand6" alt="FRAD foundation logo" />
                        </div>
                        <div className="brand b7">
                            <img src={catholicLogo} className="brand7" alt="Catholic relief service logo" />
                        </div>
                    </div>
                    <div ref={container2} className="client-brands-container brands copy" id="copy">
                        <div className="brand b1">
                            <img src={bornoLogo} className="brand1" alt="Borno state government logo" />
                        </div>
                        <div className="brand b2">
                            <img src={cbiLogo} className="brand2" alt="Care best initiative logo" />
                        </div>
                        <div className="brand b3">
                            <img src={greenLogo} className="brand3" alt="Green code logo" />
                        </div>
                        <div className="brand b4">
                            <img src={gepadcLogo} className="brand4" alt="GEPADC logo" />
                        </div>
                        <div className="brand b5">
                            <img src={sooyaLogo} className="brand5" alt="Sooyah bistro logo" />
                        </div>
                        <div className="brand b6">
                            <img src={fradLogo} className="brand6" alt="FRAD foundation logo" />
                        </div>
                        <div className="brand b7">
                            <img src={catholicLogo} className="brand7" alt="Catholic relief service logo" />
                        </div>
                    </div>

                </div>
            </ClienteleWrapper>
        </LandingPageWrapper>
    );
};
export default LandingPage;