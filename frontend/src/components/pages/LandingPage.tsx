import { NavLink } from "react-router-dom";
import { CustomerCareWrapper, HeroSectionWrapper, LandingPageWrapper } from "../index";

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
                    <img src="/src/assets/hero-image.jpg" alt="Hero Image" className="hero-image" />
                </div>
            </HeroSectionWrapper>
            <CustomerCareWrapper>
                <h2 className="customer-care-title">Customer Care Services</h2>
                <div className="c-support-container">
                    <img src="/src/assets/customer-support-icon.svg" alt="Customer support icon" className="c-support-icon" />
                    <div className="c-support-text-container">
                        <h3>24/7 Support</h3>
                        <p>Our team is available around the clock,
                            providing assistance whenever
                            you need it.
                        </p>
                    </div>
                </div>
                <div className="c-advice-container">
                    <img src="/src/assets/customer-advice-icon.svg" alt="Customer advice icon" className="c-advice-icon" />
                    <div className="c-advice-text-container">
                        <h3>Unlimited Advice</h3>
                        <p>Get unlimited expert guidance across governance, finance, audit, and compliance.
                        </p>
                    </div>
                </div>
                <div className="c-satisfaction-container">
                    <img src="/src/assets/customer-satisfaction-icon.svg" alt="Customer satisfaction icon" className="c-satisfaction-icon" />
                    <div className="c-satisfaction-text-container">
                        <h3>100% Customer satisfaction</h3>
                        <p>We are committed to delivering exceptional results, and ensuring every client is fully satisfied.
                        </p>
                    </div>
                </div>
            </CustomerCareWrapper>
        </LandingPageWrapper>
    );
};
export default LandingPage;