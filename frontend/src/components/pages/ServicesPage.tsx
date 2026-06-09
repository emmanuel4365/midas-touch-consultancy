import { ServicesPageWrapper } from "../index";
import { NavLink } from "react-router-dom";


const ServicesPage = () => {
    return (
        <>
            <ServicesPageWrapper>ServicesPage</ServicesPageWrapper>
            <NavLink to="/about">Go to About Page</NavLink>
            <NavLink to="/">Go to Home Page</NavLink>
            <NavLink to="/gallery">Go to gallery Page</NavLink>
            <NavLink to="/contact">Go to contact Page</NavLink>
        </>
    );
};
export default ServicesPage;