import { Outlet } from "react-router-dom";

const HomePage = () => {
    return (
        <>
            NavBar
            <Outlet />
        </>
    );
};
export default HomePage;