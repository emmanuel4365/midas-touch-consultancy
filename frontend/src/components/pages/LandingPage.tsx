import { Form, NavLink } from "react-router-dom";
import { HeroSectionWrapper, LandingPageWrapper, CustomerCareWrapper, AboutCompanyWrapper, ServicesWrapper, ClienteleWrapper, AccreditWrapper, TestimonialWrapper, GetInTouchWrapper } from "../index";
import heroImage from "../../assets/hero-image.jpg";
import cSupportIcon from "../../assets/customer-support-icon.svg";
import cAdviceIcon from "../../assets/customer-advice-icon.svg";
import cSatisfactionIcon from "../../assets/customer-satisfaction-icon.svg";
import aboutMainImage from "../../assets/about-comp-main-img.jpg";
import aboutEllipseIcon from "../../assets/about-comp-ellipse-icon.svg";
import aboutDotsIcon from "../../assets/about-comp-dots-icon.svg";
import aboutPaperIcon from "../../assets/about-comp-paper-icon.svg";
import corpIcon from "../../assets/corp-services-icon.svg";
import hdevIcon from "../../assets/human-dev-icon.svg"; import bornoLogo from "../../assets/borno-logo.svg";
import cbiLogo from "../../assets/cbi-logo.svg";
import greenLogo from "../../assets/greencode-logo.svg";
import gepadcLogo from "../../assets/gepadc-logo.svg";
import sooyaLogo from "../../assets/sooya-logo.svg";
import catholicLogo from "../../assets/catholic-logo.svg";
import fradLogo from "../../assets/frad-logo.svg";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import citnLogo from "../../assets/citn-logo.svg";
import cipmLogo from "../../assets/cipm-logo.svg";
import icanLogo from "../../assets/ican-logo.svg";
import icsanLogo from "../../assets/icsan-logo.svg";
import starsIcon from "../../assets/stars-icon.svg";
import gitMailIcon from "../../assets/git-mail-icon.svg";
import gitPhoneIcon from "../../assets/git-phone-icon.svg";
import gitAddressIcon from "../../assets/git-address-icon.svg";
import gitSendIcon from "../../assets/git-send-icon.svg";
import gitFBLogo from "../../assets/git-fb-logo.svg";
import gitInstaLogo from "../../assets/git-insta-logo.svg";
import gitLinkedinLogo from "../../assets/git-linkedin-logo.svg";
import { SplitText } from "gsap/SplitText";


gsap.registerPlugin(SplitText);

const LandingPage = () => {
    //Scroll Up page
    window.scrollTo(0, 0);

    //Animate Elements
    const container = useRef(null);
    const container2 = useRef(null);

    useGSAP(() => {
        //Hero Section Animation
        //Hero Title
        const splitHeroTitle = new SplitText(".hero-title", {
            type: "words"
        });

        gsap.from(splitHeroTitle.words, {
            y: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.5,
            ease: "power2.out",
        });
        //Hero Text Paragraph Animation
        const splitHeroText = new SplitText("#hero-para", {
            type: "lines"
        });

        gsap.from(splitHeroText.lines, {
            x: -40,
            opacity: 0,
            delay: 0.8,
            duration: 0.8,
            stagger: 0.5,
            ease: "power2.out",
        });
        //Hero Image Animation
        gsap.from("#hero-image", {
            y: -100,
            opacity: 0,
            delay: 0.3,
            duration: 0.8,
            ease: "power2.out",
        });
        //Hero Button Animation
        gsap.from(".hero-button", {
            y: 50,
            opacity: 0,
            delay: 0.6,
            duration: 0.8,
            ease: "power2.out",
        });



        //Clientele Section Animation
        // Logos Slide Animation
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

        // console.log(context.data.length);


    }, []);
    return (
        <LandingPageWrapper>
            <HeroSectionWrapper>
                <div className="hero-text-content-container">
                    <h1 className="hero-title">Transforming Institutions, Empowering Professionals</h1>
                    <p id="hero-para">Midas Touch Consultancy provides expert advisory and professional training,
                        helping organizations and individuals strengthen governance, finance,
                        compliance, and operational systems,build capacity,manage risk,
                        and achieve sustainable growth and success.</p>
                    <NavLink to="/services"><button className="hero-button">Book Consultation</button></NavLink>
                </div>
                <div className="hero-image-container" id="hero-image">
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
            <AccreditWrapper>
                <h2 className="accredit-title">
                    Accrediations and Memberships
                </h2>
                <h3 className="accredit-subtitle">
                    Our Accrediation Partners
                </h3>
                <div className="accredit-brands-container brands">
                    <div className="accredit-brand b1">
                        <img src={citnLogo} className="brand1" alt="CITN logo" />
                    </div>
                    <div className="accredit-brand b2">
                        <img src={cipmLogo} className="brand2" alt="CIPM logo" />
                    </div>
                    <div className="accredit-brand b3">
                        <img src={icanLogo} className="brand3" alt="ICAN logo" />
                    </div>
                    <div className="accredit-brand b4">
                        <img src={icsanLogo} className="brand4" alt="ICSAN logo" />
                    </div>
                </div>
            </AccreditWrapper>
            <TestimonialWrapper>
                <h2 className="testify-title">
                    TESTIMONIAL
                </h2>
                <h3 className="testify-subtitle">
                    What Our Client Says About Us
                </h3>
                <div className="testimonies-container">
                    <div className="testimony testimony1">
                        <img src={starsIcon} alt="testimony stars" className="t-star star1" />
                        <p className="t-statement statement1">
                            I attended their tutorial centre for my Skills level exam (May diet) and passed four out of five courses in one go! The instructors were exceptional, providing personalized attention and guidance that helped me excel. I'm grateful for the supportive learning environment and the significant impact it had on my academic success.
                        </p>
                        <span className="testifier">
                            <strong className="testifier-name name1">Shepherdess Bulus Wayar</strong>, Student
                        </span>
                    </div>
                    <div className="testimony testimony2">
                        <img src={starsIcon} alt="testimony stars" className="t-star star2" />
                        <p className="t-statement statement2">
                            MIDAS TOUCH reassured me to believe in myself. I registered as an ICAN student a decade ago, sat for two diets, and gave up. This year, the center was recommended for me, and I accepted. I registered, attended and participated in the class, sat for May 2024 diet and cleared 2 out of 3 papers.
                        </p>
                        <span className="testifier">
                            <strong className="testifier-name name2">Joy Malgwi</strong>, Student
                        </span>
                    </div>
                    <div className="testimony testimony3">
                        <img src={starsIcon} alt="testimony stars" className="t-star star3" />
                        <p className="t-statement statement3">
                            I am delighted to share our positive experience with Midas Touch Consult. Their services have significantly transformed our operations, particularly in reducing costs and minimizing waste through their sound internal controls. Midas Touch Consult conducted a thorough analysis of our processes and implemented tailored internal control systems that have enhanced our efficiency.
                        </p>
                        <span className="testifier">
                            <strong className="testifier-name name3">Eboh Precious</strong>, COO, Food Ratata Ltd
                        </span>
                    </div>
                </div>
            </TestimonialWrapper>
            <GetInTouchWrapper>
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
        </LandingPageWrapper>
    );
};
export default LandingPage;