import React from "react";
import { selectExpanded } from "../state/reducers/rootReducer";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const HeaderLink = (props) => {
  const dispatch = useDispatch();
  const { path, children } = props;
  return (
    <div onClick={() => dispatch(selectExpanded(false))}>
      <Link to={path}>{children}</Link>
    </div>
  );
};

export default HeaderLink;
