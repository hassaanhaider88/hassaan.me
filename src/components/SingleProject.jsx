/* eslint-disable react/prop-types */
import React from "react";
import { HiOutlineExternalLink } from "react-icons/hi";
const SingleProject = ({ ImgData, id, handleImgViewerShown }) => {
  const [tilt, setTilt] = React.useState({ x: 0, y: 0 });

  // Adjust the threshold value to control the tilt effect
  const threshold = 12;

  const handleMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width - 1;
    const y = (e.clientY - top) / height - 1;
    setTilt({ x: y * -threshold, y: x * threshold });
  };

  const handleLinkClick = (link) => {
    window.open(link);
  };

  return (
    <div className="rounded-xl overflow-hidden transition-transform duration-200 ease-out cursor-pointer w-full bg-transparent ">
      <div
        id={id}
        className={`xsm:flex block m-0 p-3 gap-5 justify-evenly ${ImgData.FlexDirecton} shadow-2xl rounded-xl `}
      >
        <div
          onClick={() => handleImgViewerShown(ImgData?.ProjectImgURl)}
          className="rounded-xl w-full xsm:w-1/2 h-[60vh] scale-90  overflow-hidden OuterProjectImgContainer"
        >
          <img
            onMouseMove={handleMove}
            onMouseLeave={() => setTilt({ x: 0, y: 0 })}
            style={{
              transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            }}
            loading="lazy"
            className="duration-200  h-full bg-cover w-full overflow-hidden"
            src={
              ImgData.ProjectmockUpImg
                ? ImgData.ProjectmockUpImg
                : ImgData.ProjectImgURl
            }
            alt=""
          />
        </div>
        <div className="relative flex flex-col justify-center items-center w-full xsm:w-1/2 text-center">
          <h1 className="font-bold text-sm xsm:text-2xl">
            {ImgData.ProjectImgName}
          </h1>
          <p className="py-3 font-sans text-sm">{ImgData.ProjectDesc}</p>
          <p className="font-bold text-sm">{ImgData.ProjectImgCreatedAt}</p>
          <div
            onClick={() => handleLinkClick(ImgData.ProjectUrlRedirectTo)}
            className={`${ImgData.IconsDirection} hover:scale-105 duration-300 absolute xsm:text-2xl text-lg cursor-pointer RedirectUrl `}
          >
            <HiOutlineExternalLink />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
