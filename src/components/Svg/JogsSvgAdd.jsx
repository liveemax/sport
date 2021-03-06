import React from "react";
import { useDispatch } from "react-redux";
import { selectJogsAddIsOpen } from "../../state/reducers/jogsAddReducer";
import { selectFilterOpen } from "../../state/reducers/rootReducer";

const JogsSvgAdd = () => {
  let fill = "#7ED321";
  const dispatch = useDispatch();
  return (
    <button
      className="jogsSvgAdd"
      onClick={() => {
        dispatch(selectJogsAddIsOpen(true));
        dispatch(selectFilterOpen(false));
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="60px"
        height="60px"
        viewBox="0 0 60 60"
        preserveAspectRatio="none"
      >
        <defs>
          <path id="a" d="M.039.128h59.883v59.234H.039z" />
        </defs>
        <g fill="none" fillRule="evenodd">
          <g>
            <path
              fill={fill}
              d="M29.987.128C13.47.128 0 13.405 0 29.743c0 16.342 13.42 29.62 29.987 29.62 16.515 0 29.935-13.278 29.935-29.62 0-16.338-13.42-29.615-29.935-29.615zm0 55.098c-14.193 0-25.755-11.44-25.755-25.483 0-14.042 11.562-25.48 25.755-25.48 14.194 0 25.754 11.438 25.754 25.48 0 14.043-11.56 25.483-25.754 25.483z"
            />
          </g>
          <path
            fill={fill}
            d="M43.768 27.395H32.105V15.804c0-1.175-.93-2.093-2.118-2.093-1.186 0-2.117.918-2.117 2.093v11.541H16.207c-1.187 0-2.117.918-2.117 2.095 0 1.174.93 2.091 2.117 2.091H27.87v11.542c0 1.174.93 2.092 2.117 2.092 1.187 0 2.118-.918 2.118-2.092V31.531h11.663c1.187 0 2.117-.917 2.117-2.091 0-1.177-.93-2.045-2.117-2.045z"
          />
        </g>
      </svg>
    </button>
  );
};

export default JogsSvgAdd;
