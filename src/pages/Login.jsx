import React, {useRef} from 'react';
import LoginBear from "../components/LoginSvgBear";
import {Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import * as pathConst from "../router/path";
import {root} from "../state/reducers/rootReducer";

const Login = () => {
    const {isAuth}=useSelector(root)
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
            {isAuth ? <Redirect to={pathConst.Jogs}/>: null}
        </div>
    );
};

export default Login;