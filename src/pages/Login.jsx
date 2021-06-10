import React from 'react';
import LoginBear from "../components/LoginBear";
import {Button} from "react-bootstrap";

const Login = () => {
    return (
        <div className="loginRoot">
            <LoginBear/>
            <Button className="loginButton d-none d-lg-block d-xl-block" variant="outline-secondary">Let me in</Button>
            <Button className="loginButton d-lg-none d-xl-none"  variant="outline-primary">Let me in</Button>
        </div>
    );
};

export default Login;