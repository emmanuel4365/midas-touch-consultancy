import { NavLink } from "react-router-dom";
import midasLogo from "../../assets/midas-touch-logo.svg";

const LogoContainer = () => {
    return (
        <NavLink to="/">
            <div className="midas-logo-container">
                <img src={midasLogo} className="midas-logo" width="110" alt="Midas Touch Logo" />
            </div>
        </NavLink>
    );
};
export default LogoContainer;