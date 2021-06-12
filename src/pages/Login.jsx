import React, {useRef} from 'react';
import LoginBear from "../components/LoginSvgBear";
import {Button} from "react-bootstrap";
import {useDispatch} from "react-redux";

const Login = () => {
    const dispatch=useDispatch()
    const text="Let me in"
    const onclick=(e)=>{
        e.currentTarget.disabled=true
        dispatch({type:"selectIsAuth_ASYNC"})
    }
    return (
        <div className="loginRoot">
            <LoginBear/>
            <Button onClick={onclick} className="loginButton d-none d-lg-block d-xl-block" variant="outline-secondary">{text}</Button>
            <Button onClick={onclick} className="loginButton d-lg-none d-xl-none" variant="outline-primary">{text}</Button>
        </div>
    );
};

export default Login;