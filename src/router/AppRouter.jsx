import React from "react";
import {publicRoutes} from "./routes";
import {Switch, Route, Redirect} from "react-router-dom";
import withContainer from "../HOC/withContainer";
import {sport} from "../module/module";
import {useSelector} from "react-redux";
import {root} from "../state/reducers/rootReducer";

const AppRouter = () => {
    const {isAuth} = useSelector(root)
    return (
        <Switch>
            {publicRoutes.map(({path, Component}) => {
                if (isAuth === false) {
                    path=sport.path.login
                }
                if (path === sport.path.login) {
                    return <Route key={path} path={path} component={Component} exact/>;
                }
                const Wrapped = withContainer(Component);
                return <Route key={path} path={path} component={Wrapped} exact/>;
            })}
            <Redirect to={sport.path.login}/>
        </Switch>
    );
};

export default AppRouter;
