import React from "react";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  var NarLink = [
    { name: "Home" },
    { name: "Projects" },
    { name: "Blogs" },
    { name: "Contact" },
  ];
  const Year = new Date().getFullYear();

  return (
    <>
      <div className="relative">
        <div className="flex overflow-x-hidden xsm:flex-row flex-col justify-between items-center px-3 xsm:px-10 w-full font-semibold text-black dark:text-white">
          <div className="w-fit h-fit text-4xl LogoUserName">
            <h1 className="relative font-semibold duration-300">
              Hassaan<span className="text-[#d217b7] ml-2">.</span>Dev
            </h1>
          </div>
          <div className="flex gap-5">
            {NarLink.map((nlink, index) => {
              return (
                <HashLink
                  to={`#${nlink.name.toLocaleLowerCase()}`}
                  smooth
                  className={`h-full cursor-pointer duration-300 hover:underline`}
                  key={index}
                >
                  {nlink.name}
                </HashLink>
              );
            })}
          </div>
        </div>
        <div className="right-10 absolute flex justify-between items-center gap-2 mt-1 w-fit text-[#000000] text-[11px] cursor-pointer ">
          <p>&#169; {Year} Hassaan Haider.All rights reserved</p>
          <p className="hover:underline">Terms of Use</p>
          <p className="hover:underline">Privacy Policy</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
