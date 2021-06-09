import React from 'react';
import {publicRoutes} from "./routes";
import { Switch, Route, Redirect } from "react-router-dom";

const AppRouter = () => {
    return (
        <Switch>
            {publicRoutes.map(({ path, Component }) => {
                return <Route key={path} path={path} component={Component} exact />;
            })}
            <Redirect to={"/"} />
        </Switch>
    );
};

export default AppRouter;