/* eslint-disable react/prop-types */

import DrawingAnimBtn from "./DrawingAnimBtn";

const DownloadCV = ({ setIsCVDownloaderOpen, IsCVDownloaderOpen }) => {
  return (
    <div
      id="DownloadBtn"
      onClick={() => setIsCVDownloaderOpen(!IsCVDownloaderOpen)}
      className="top-[50%] xsm:top-[20%] md2:top-[60%] left-[80%] sm2:left-[52%] z-10 absolute flex flex-col justify-center items-center rounded-full  h-[98px] text-white -translate-x-1/2 duration-300 cursor-pointer hover:scale-95"
    >
      <DrawingAnimBtn />
    </div>
  );
};

export default DownloadCV;
