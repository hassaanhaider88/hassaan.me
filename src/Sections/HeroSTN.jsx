// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import NavBar from "../components/NavBar";
import LeftSlashes from "../components/LeftSlashes";
import RightIcons from "../components/RightIcons";
import HeroLeftText from "../components/HeroLeftText";
import HeroRightImage from "../components/HeroRightImage";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const HeroSection = () => {
  return (
    <>
      <section
        id="home"
        className="relative overflow-x-hidden w-[100vw] h-[200vh] md2:h-[100vh] HeroSectionDiv Inter_Font"
      >
        <NavBar Projectpage={false} />
        <LeftSlashes />
        <div className="block top-0 absolute md2:flex justify-evenly items-center gap-3 w-full text-white TextAndPictureDiv">
          <HeroLeftText />
          <HeroRightImage />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
