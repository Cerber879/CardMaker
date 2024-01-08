import React from "react";

const svgStyle = {
  enableBackground: "new 0 0 512 512",
} as React.CSSProperties;

const TextItalic = ({ fill }: { fill: string }) => {
  return (
    <svg
      width={17}
      height={17}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 330.003 330.003"
      style={svgStyle}
      xmlSpace="preserve"
    >
      <path
        id="XMLID_16_"
        d="M255.001,0h-60.042c-0.026,0-0.052,0-0.079,0h-59.879c-8.284,0-15,6.716-15,15s6.716,15,15,15h41.703 l-54,270H75.001c-8.284,0-15,6.716-15,15s6.716,15,15,15h59.956c0.02,0,0.04,0.003,0.059,0.003c0.023,0,0.045-0.003,0.066-0.003 h59.918c8.284,0,15-6.716,15-15s-6.716-15-15-15h-41.703l54-270h47.703c8.284,0,15-6.716,15-15S263.286,0,255.001,0z"
        fill={fill}
        style={{ fill: fill }}
      ></path>
    </svg>
  );
};

export default TextItalic;
