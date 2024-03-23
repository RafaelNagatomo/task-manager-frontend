import CustomButton from "./CustomButton";

import "./SideBar.scss";
import logo from "../assets/images/logo-name1.png";

const SideBar = () => {
    return (
        <div className="sidebar-container">
            <div className="logo">
                <img src={logo} alt="your logo" />
            </div>

            <div className="sign-out">
                <CustomButton>Sair</CustomButton>
            </div>
        </div>
    );
};

export default SideBar;
