import React from 'react';
import LoginBear from "../components/LoginSvgBear";
import {Button} from "react-bootstrap";
import {useDispatch} from "react-redux";

const Login = () => {
    const dispatch=useDispatch()
    return (
        <div className="loginRoot">
            <LoginBear/>
            <Button onClick={()=>dispatch({type:"selectIsAuth_ASYNC"})} className="loginButton d-none d-lg-block d-xl-block" variant="outline-secondary">Let me in</Button>
            <Button className="loginButton d-lg-none d-xl-none" variant="outline-primary">Let me in</Button>
        </div>
    );
};

export default Login;