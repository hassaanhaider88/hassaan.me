/* eslint-disable react/no-unescaped-entities */

import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import FuzzyText from "./FuzzyText";
import TextType from "./TypingText";
const HeroLeftText = () => {
  return (
    <div
      id="Main"
      className="relative md2:mt-0 mt-20 flex justify-center items-center w-full md2:w-1/2 h-screen"
    >
      <div
        id="TypingText"
        className="block -bottom-[17%] md2:-bottom-[40%] left-[70%] md2:left-[12%] absolute w-full h-full -translate-x-1/2 md2:translate-x-0"
      >
        <h1 className="xsm:block bottom-[55%] sm:bottom-0 left-[7%] sm:left-0 sm:static absolute hidden w-[545px] sm:rotate-0 text-[rgb(104,86,86)] text-nowrap text-xl sm2:text-5xl sm:text-5xl xsm:text-2xl md2:text-7xl md-0 md:ml-10 dark:text-[#ffffff60] uppercase open-sans rotate-90">
          {/* <TypingAnimation /> */}
          <TextType
            text={[
              "FULL StACK DEVELOPER",
              "MERN STACK DEVELOPER",
              "REACT, Next JS DEVELOPER",
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </h1>
        <FuzzyText baseIntensity={0.13} hoverIntensity={0.22}>
          Hassaan
        </FuzzyText>
        <FuzzyText baseIntensity={0.13} hoverIntensity={0.22}>
          Haider .Dev
        </FuzzyText>
        <p
          id="AboutLine"
          className="text-[rgb(104,86,86)] md:ml-10 md-0 dark:text-[#ffffffb4]"
        >
          I'm Full Stack developer in React , <br /> Express , MongoDB, Node{" "}
          <FaReact className="inline text-blue-500" /> and Next Js{" "}
          <SiNextdotjs className="inline text-gray-800 dark:text-white" />{" "}
          <br /> as well. I can work remotely <br /> as well on-site.
        </p>
      </div>
    </div>
  );
};

export default HeroLeftText;
