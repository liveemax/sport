import React from "react";

const HeaderSvgFilter = (props) => {
  const { filterOpen } = props;
  let fill = filterOpen ? "rgba(255,255,255,0.7)" : "rgba(0%,0%,0%,0.4)";
  let width = "40px";
  let height = "40px";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      viewBox="0 0 42 42"
      preserveAspectRatio="none"
    >
      <g fill="none" fillRule="evenodd">
        <path
          fill={fill}
          d="M32.814 8.83c-.209-.478-.57-.717-1.086-.717H8.195c-.514 0-.876.24-1.084.717-.209.503-.123.932.257 1.287l9.064 9.064v8.935c0 .32.117.595.35.828l4.706 4.706c.22.233.497.35.827.35.148 0 .3-.03.46-.092.478-.209.717-.57.717-1.085V19.181l9.064-9.064c.38-.355.466-.784.258-1.287z"
        />
        <rect
          width={width}
          height={height}
          x="1"
          y="1"
          stroke={fill}
          strokeWidth="2"
          rx="6"
        />
      </g>
    </svg>
  );
};

export default HeaderSvgFilter;
