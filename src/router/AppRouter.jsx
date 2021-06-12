import React from 'react';
import {publicRoutes} from "./routes";
import {Switch, Route, Redirect} from "react-router-dom";
import * as pathConst from "./path"
import withContainer from "../HOC/withContainer";

const AppRouter = () => {
    return (
        <Switch>
            {publicRoutes.map(({ path, Component }) => {
                if (path ===pathConst.Login) {
                    return <Route key={path} path={path} component={Component} exact />;
                }
                const Wrapped = withContainer(Component);
                return <Route key={path} path={path} component={Wrapped} exact />;
            })}
            <Redirect to={pathConst.Login}/>
        </Switch>
    );
};

export default AppRouter;