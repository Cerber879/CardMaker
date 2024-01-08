import React from "react";

const svgStyle = {
  enableBackground: "new 0 0 477.867 477.867",
} as React.CSSProperties;

const ObjStrokeFill = ({ fill }: { fill: string }) => {
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
      viewBox="0 0 477.867 477.867"
      style={svgStyle}
      xmlSpace="preserve"
    >
      <g>
        <g>
          <path
            d="M426.667,85.333h-34.133V51.2c0-28.277-22.923-51.2-51.2-51.2H51.2C22.923,0,0,22.923,0,51.2v290.133 c0,28.277,22.923,51.2,51.2,51.2h34.133v34.133c0,28.277,22.923,51.2,51.2,51.2h290.133c28.277,0,51.2-22.923,51.2-51.2V136.533 C477.867,108.256,454.944,85.333,426.667,85.333z M443.733,426.667c0,9.426-7.641,17.067-17.067,17.067H136.533 c-9.426,0-17.067-7.641-17.067-17.067v-34.133h221.867c28.277,0,51.2-22.923,51.2-51.2V119.467h34.133 c9.426,0,17.067,7.641,17.067,17.067V426.667z"
            fill={fill}
            style={{ fill: fill }}
          ></path>
        </g>
      </g>
    </svg>
  );
};

export default ObjStrokeFill;
