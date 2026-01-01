import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { HashLink } from "react-router-hash-link";
import ElectricBorder from "../components/ElectricBorder";
import ShinyText from "../components/ShinyText";
import { GradualSpacing } from "../components/AboutMeText";

gsap.registerPlugin(ScrollTrigger);
const AboutMeSTN = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.to("#TypingText", {
      y: "-100px",
      opacity: 0.8,
      duration: 2,
      scrollTrigger: {
        trigger: "#TypingText",
        start: "top 40%",
        end: "20%",
        scrub: true,
      },
    });
    gsap.to("#PersonalImgContainerOne", {
      y: "-100px",
      opacity: 0.2,
      duration: 2,
      scrollTrigger: {
        trigger: "#PersonalImgContainerOne",
        start: "top 40%",
        end: "20%",
        scrub: true,
      },
    });
    gsap.to("#PersonalImg", {
      scale: 0.8,
      duration: 2,
      scrollTrigger: {
        trigger: "#PersonalImg",
        start: "top 40%",
        end: "20%",
        scrub: true,
      },
    });
  }, []);

  useGSAP(() => {
    let tl = gsap.timeline();
    tl.from(containerRef.current, {
      y: "-300px",
      opacity: 0,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 40%",
        end: "50%",
        // markers :true,
        scrub: true,
      },
    });
  }, []);

  return (
    <div
      ref={containerRef}
      id="AboutSection"
      className="block relative md2:flex justify-evenly pt-[10%] w-full min-h-screen open-sans"
    >
      <div
        id="container"
        className="flex rounded-full justify-center md2:justify-end items-center md2:items-end mr-5 w-full md2:w-1/2 aboutMeImage"
      >
        <ElectricBorder
          className="rounded-full"
          borderRadius={200}
          cardProps={{
            color: "#ff80f4",
            speed: 1,
            chaos: 0.12,
            borderRadius: 16,
          }}
        >
          <div className="flex justify-center items-center  rounded-full w-[220px] xsm:w-[420px] h-[220px] xsm:h-[420px] overflow-hidden">
            <div className="rounded-full w-[200px] xsm:w-[400px] h-[200px] xsm:h-[400px] overflow-hidden">
              <img
                src="../../Hassaan88.png"
                className="z-10 bg-cover rotate-3"
                alt="HMK Hassaan"
                width={"100%"}
                height={"100%"}
              />
            </div>
          </div>
        </ElectricBorder>
      </div>
      <div className="relative flex flex-col justify-evenly items-center md2:items-start mt-10 md2:mt-0 pl-8 w-full md2:w-1/2 aboutMeSmallText">
        <div>
          {/* <div className="block md2:hidden font-semibold text-6xl text-black dark:text-white">
            About <br />
            me
          </div> */}
          <div className="mb-10 ml-[60%] text-[#da4ec7] text-6xl arrowTop self-end">
            <FaArrowRightLong />
          </div>
          <ShinyText
            text="I'm a Full Stack MERN Developer skilled in React.js and TypeScript,
            focused on creating smooth and dynamic user interfaces. I also work
            with the Next Js to build full-stack applications. I'm comfortable
            using Git and GitHub, which helps me manage code and collaborate
            effectively"
            speed={2}
            delay={0}
            color="#b5b5b5"
            shineColor="#ffffff"
            spread={120}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
          />
          <div className="bg-[#cd17b9] mt-10 mb-2 px-6 py-2 rounded-full w-fit text-black dark:text-white transition cursor-pointer hover:scale-95 duration-500 ContactUsBtn MyButton">
            <HashLink smooth to={"#contactme"}>
              Contact me
            </HashLink>
          </div>
        </div>
      </div>
      <div className="md2:block md2:absolute hidden mt-20 text-7xl text-black dark:text-white">
        <GradualSpacing text="About Me" />
      </div>
    </div>
  );
};

export default AboutMeSTN;
