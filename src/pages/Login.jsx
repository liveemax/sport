import React from 'react';
import LoginBear from "../components/LoginBear";
import PinkButton from "./../components/PinkButton"

const Login = () => {
    return (
        <div className="loginRoot">
            <LoginBear/>
            <PinkButton className="loginButton d-none d-lg-block d-xl-block" variant="outline-secondary">Let me in</PinkButton>
            <PinkButton className="loginButton d-lg-none d-xl-none" variant="outline-primary">Let me in</PinkButton>
        </div>
    );
};

export default Login;