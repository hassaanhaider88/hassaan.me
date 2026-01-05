import  { useRef , useState } from "react";

const DynamicCurvedLine = () => {
    const svgRef = useRef(null);
     const [XQuardicVal,setXQuardicVal] = useState(50)
     const [YQuardicVal,setYQuardicVal] = useState(250)

    const handleMouseMove = (e) => {
      const svg = svgRef.current;
      const rect = svg.getBoundingClientRect();
      const cursorX = e.clientX - rect.left; 
      const cursorY = e.clientY - rect.left;
  
    
      const controlX = cursorX;
      const controlY = cursorY; 
      setYQuardicVal(controlY / 100);
      setXQuardicVal(controlX / 20)
  console.log(controlX / 3,controlY / 10);
    };
  
    const handleMouseLeave = () => {
    console.log('mouse leave');
    };
  
    return (
      <div className="flex justify-center items-center bg-gray-100 w-full h-20">
        <svg
        className="w-[90%]"
          ref={svgRef}
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
