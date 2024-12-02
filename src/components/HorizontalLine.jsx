import React, { useRef , useState } from "react";

const DynamicCurvedLine = () => {
    const svgRef = useRef(null);
     const [XQuardicVal,setXQuardicVal] = useState(50)
     const [YQuardicVal,setYQuardicVal] = useState(250)

    const handleMouseMove = (e) => {
      const svg = svgRef.current;
      const rect = svg.getBoundingClientRect();
      const cursorX = e.clientX - rect.left; // Cursor X position relative to the SVG
      const cursorY = e.clientY - rect.left; // Cursor X position relative to the SVG
  
      // Calculate control point for the curve
      const controlX = cursorX;
      const controlY = cursorY; // Curve height; adjust for more/less curve
      setYQuardicVal(controlY / 100);
      setXQuardicVal(controlX / 20)
  console.log(controlX / 3,controlY / 10);
      // Update the path's "d" attribute
    //   const path = `
    //     M 0,50 
    //     Q ${controlX},${controlY} ${svgWidth},50
    //   `;
  
    //   svg.querySelector("path").setAttribute("d", path);
    };
  
    const handleMouseLeave = () => {
    //   const svg = svgRef.current;
    //   const svgWidth = svg.getBoundingClientRect().width;
  
    //   // Reset to a straight line
    //   const straightLine = `M 0,50 Q ${svgWidth / 2},50 ${svgWidth},50`;
    //   svg.querySelector("path").setAttribute("d", straightLine);
    console.log('mouse leave');
    };
  
    return (
      <div className="flex justify-center items-center bg-gray-100 w-full h-20">
        <svg
        className="w-[90%]"
          ref={svgRef}
        //   className="w-full h-full"
          viewBox="0 0 500 100"
          xmlns="http://www.w3.org/2000/svg"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <path
            d={`M 0,50 Q ${YQuardicVal},${XQuardicVal} 500,50`}
            stroke="#da4ec7"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
    );
  };
  
export default DynamicCurvedLine;
