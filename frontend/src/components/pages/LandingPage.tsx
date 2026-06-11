import { NavLink } from "react-router-dom";
import { AboutCompanyWrapper, CustomerCareWrapper, HeroSectionWrapper, LandingPageWrapper } from "../index";
import heroImage from "../../assets/hero-image.jpg";
import cSupportIcon from "../../assets/customer-support-icon.svg";
import cAdviceIcon from "../../assets/customer-advice-icon.svg";
import cSatisfactionIcon from "../../assets/customer-satisfaction-icon.svg";
import aboutMainImage from "../../assets/about-comp-main-img.jpg";
import aboutEllipseIcon from "../../assets/about-comp-ellipse-icon.svg";
import aboutDotsIcon from "../../assets/about-comp-dots-icon.svg";
import aboutPaperIcon from "../../assets/about-comp-paper-icon.svg";

const LandingPage = () => {
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
                    <button className="about-btn">
                        Discover our services
                    </button>
                </div>
            </AboutCompanyWrapper>
        </LandingPageWrapper>
    );
};
export default LandingPage;