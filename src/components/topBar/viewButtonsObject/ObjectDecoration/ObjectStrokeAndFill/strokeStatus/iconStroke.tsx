import React from "react";

const svgStyle = {
  enableBackground: "new 0 0 485.12 485.12",
} as React.CSSProperties;

const ObjStroke = ({ fill }: { fill: string }) => {
  return (
    <svg
      width={16}
      height={16}
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 485.12 485.12"
      style={svgStyle}
      xmlSpace="preserve"
    >
      <g>
        <g>
          <path
            d="M410.453,0.213H74.667C33.513,0.213,0.118,33.513,0,74.667v336c0.118,41.119,33.547,74.358,74.666,74.24c0,0,0,0,0.001,0 h335.787c41.119,0.118,74.549-33.12,74.667-74.239c0,0,0,0,0-0.001v-336C485.002,33.513,451.607,0.213,410.453,0.213z M463.787,410.667c-0.118,29.337-23.995,53.024-53.332,52.907c0,0-0.001,0-0.001,0H74.667 c-29.337,0.118-53.215-23.569-53.333-52.906c0,0,0-0.001,0-0.001v-336c0.117-29.372,23.961-53.12,53.333-53.12h335.787 c29.372,0,53.216,23.748,53.333,53.12V410.667z"
            fill={fill}
            style={{ fill: fill }}
          ></path>
        </g>
      </g>
    </svg>
  );
};

export default ObjStroke;
