import { AboutPageWrapper, AboutPageHeroWrapper, AboutPageStoryWrapper, AboutPageMissionWrapper, AboutPageVissionWrapper, AboutPageGrowthWrapper } from "../index";
import icon1 from "../../assets/about-page-icon1.svg";
import icon2 from "../../assets/about-page-icon2.svg";
import icon3 from "../../assets/about-page-icon3.svg";

const AboutPage = () => {
    window.scrollTo(0, 0);
    return (
        <AboutPageWrapper>
            <AboutPageHeroWrapper>
                <h1 className="about-page-title">
                    About Us
                </h1>
            </AboutPageHeroWrapper>
            <AboutPageStoryWrapper>
                <h2 className="about-page-story-title">
                    OUR STORY
                </h2>
                <p className="about-page-story-text">
                    Midas Touch Consultancy is a multidisciplinary professional services and capacity-building firm dedicated to transforming institutions and individuals through excellence in governance, finance, audit, compliance, taxation, monitoring and evaluation, and professional education.
                    <br />
                    <br />
                    With offices in Lagos, Abuja and Maiduguri, and over five years of proven service delivery, we have supported businesses, NGOs, humanitarian agencies, and public-sector institutions to strengthen systems, manage risk, comply with regulatory and donor requirements, and build sustainable operational capacity.
                    <br />
                    <br />
                    Our team is made up of seasoned Chartered Accountants, Tax Practitioners, Compliance Specialists, MEAL Experts, Lawyers and Management Consultants who combine deep technical knowledge with real-world field experience across complex operating environments.
                    <br />
                    <br />
                    Beyond organizational advisory, Midas Touch Consultancy is a trusted training partner for individuals pursuing globally recognized professional qualifications including ICAN, ACCA, ICSAN, CIPM, CIMA, CISA, FMDpro, PMDPro, and other certifications in finance, audit, governance, risk management, and human resources. Our blended learning model—delivered virtually and in-person has produced consistently strong examination outcomes and career-ready professionals.
                </p>
            </AboutPageStoryWrapper>
            <AboutPageMissionWrapper>
                <h2 className="about-page-mission-title">
                    OUR MISSION
                </h2>
                <p className="about-page-mission-text">
                    Deliver exceptional consulting services that enhance accountability, operational excellence, and regulatory compliance across public, private, and development sectors while building the capacity of individuals and institutions through innovative, practical, and context-responsive methodologies.
                </p>
            </AboutPageMissionWrapper>
            <AboutPageVissionWrapper>
                <h2 className="about-page-vision-title">
                    OUR VISION
                </h2>
                <p className="about-page-vision-text">
                    To become a leading African professional services and training institution, renowned for producing world-class professionals and strengthening organizations through high-impact, practical, and globally benchmarked capacity-building solutions in finance, audit, governance, compliance, leadership, and project management.
                </p>
            </AboutPageVissionWrapper>
            <AboutPageGrowthWrapper>
                <div className="title-subtitle-container">
                    <h2 className="growth-title">
                        We accelerate growth for brands and individuals
                        efficiently, strategically, and sustainably.
                    </h2>
                    <p className="growth-subtitle">
                        From clarity to execution, we support every stage of your journey to ensure you grow in the right direction and
                        achieve long-term success
                    </p>
                </div>
                <div className="icon-text-container">
                    <div className="icon-text1 box">
                        <img src={icon1} alt="Professional Expert Icon" className="icon1" />
                        <span className="text1-label">
                            Professional Expert
                        </span>
                        <span className="text1-text">
                            Combining knowledge, and strategic thinking to help you

                        </span>
                    </div>
                    <div className="icon-text1 box">
                        <img src={icon2} alt="Target Oriented Icon" className="icon2" />
                        <span className="text2-label">
                            Target Oriented
                        </span>
                        <span className="text2-text">
                            Our approach keeps your goals at the center

                        </span>
                    </div>
                    <div className="icon-text1 box">
                        <img src={icon3} alt="Success Guarantee Icon" className="icon3" />
                        <span className="text3-label">
                            Success Guarantee
                        </span>
                        <span className="text3-text">
                            Our methods are built on reliability, clarity, and performance

                        </span>
                    </div>
                </div>
            </AboutPageGrowthWrapper>
        </AboutPageWrapper>
    );
};
export default AboutPage;