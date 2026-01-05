import { useState } from "react";
import DownloadCV from "./Download_CV";
import HHCV from "../assets/HHCV.pdf";

import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaDownload } from "react-icons/fa6";
const HeroRightImage = () => {
  const [IsCVDownloaderOpen, setIsCVDownloaderOpen] = useState(false);

  const handleCVDownloader = () => {
    let a = document.createElement("a");
    a.href = HHCV;
    a.download = "Hassaan_Haider_CV.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    console.log("Download initiated");
  };

  return (
    <>
      <div className="md2:block relative flex justify-center items-center w-full md2:w-1/2 h-[50vh] xsm:h-[70vh] md2:h-screen overflow-hidden">
        <div
          id="PersonalImgContainerOne"
          className="top-4 md2:top-auto bottom-0 md2:-bottom-20 absolute flex justify-center items-center border-[#d914b8] border border-t-transparent rounded-full w-[240px] xsm:w-[440px] h-[240px] xsm:h-[440px]"
        >
          <div
            id="PersonalImgContainer"
            className="absolute flex justify-center items-center bg-gradient-to-r from-[#797979] dark:from-[#0ca2da] via-[#cbb9e9] to-[#ffffff] dark:to-[#f34ae4] rounded-full w-[200px] xsm:w-[400px] h-[200px] xsm:h-[400px] BigCirleImageContainer circle-pattern overfl"
          >
            <img
              id="PersonalImg"
              src="../../Hassaan88.png"
              height={490}
              className=" z-10 absolute"
              width={400}
              alt=""
            />
          </div>
        </div>
      </div>

      <div
        className={`${
          IsCVDownloaderOpen ? "flex" : "hidden"
        }  top-1/2 left-1/2 z-50 fixed py-10 justify-center items-center bg-[#999]  w-[100vw] h-[100vh] -translate-x-1/2 -translate-y-1/2`}
      >
        <div className="flex bg-[#ee2beeb4] rounded-3xl w-[75%] h-full overflow-scroll OuterProjectImgContainer">
          <div
            onClick={() => setIsCVDownloaderOpen(!IsCVDownloaderOpen)}
            className="top-5 right-5 z-[90] absolute text-5xl cursor-pointer"
          >
            <IoIosCloseCircleOutline />
          </div>
          <div
            onClick={handleCVDownloader}
            className="right-5 bottom-5 z-[90] duration-500 hover:scale-95 fixed text-5xl cursor-pointer"
          >
            <FaDownload />
          </div>
          <div className="w-full min-h-screen cursor-zoom-in">
            <img
              src="../../MYResume.png"
              width={"100%"}
              height={"85%"}
              alt=""
            />
          </div>
        </div>
      </div>

      <DownloadCV
        setIsCVDownloaderOpen={setIsCVDownloaderOpen}
        IsCVDownloaderOpen={IsCVDownloaderOpen}
      />
    </>
  );
};

export default HeroRightImage;

// C:\Users\hassa\OneDrive\Desktop\React_Projects\portfolio_web\src\assets\Hassaan_me.jpeg
