import { NavLink } from "react-router-dom";
import midasLogo from "../../assets/midas-touch-logo.svg";

const LogoContainer = () => {
    return (
        <NavLink to="/">
            <div>
                <img src={midasLogo} className="midas-logo" width="80" alt="Midas Touch Logo" />
            </div>
        </NavLink>
    );
};
export default LogoContainer;