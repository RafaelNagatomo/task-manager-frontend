import CustomButton from "../components/CustomButton";

import "./Login.scss";
import logo from "../assets/images/logo-name1.png";

const Login = () => {
    return (
        <div className="login-container">
            <img src={logo} alt="logo-name" />
            <div className="button-container">
                <CustomButton>Entrar</CustomButton>
            </div>
        </div>
    );
};

export default Login;
