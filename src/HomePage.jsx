/* eslint-disable no-unused-vars */
import HeroSection from "./Sections/HeroSTN";
import AboutMeSTN from "./Sections/AboutMeSTN";
import MyProjectsSTN from "./Sections/MyProjectsSTN";
import ContactUs from "./Sections/ContactUs";
import FollowMe from "./Sections/FollowMe";
import Footer from "./Sections/FooterSTN";
import "./App.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LetStarted from "./Sections/LetStarted";
import AnimatedList from "./components/SkillsList";

import SkillsObj from "./Skills.js";

gsap.registerPlugin(ScrollTrigger);
const HomePage = () => {
  useGSAP(() => {
    gsap.to("#Preloader", {
      y: "-110%",
      duration: 2,
      borderRadius: "0px 0px 100% 0px",
      delay: 1.2,
    });
  }, []);

  useGSAP(() => {
    gsap.from("#aboutme", {
      width: "0%",
      duration: 2,
      scrollTrigger: {
        trigger: "#home",
        start: "top 70%",
        end: "bottom 10%",
        scrub: true,
      },
    });
    gsap.from("#SkillsLine", {
      width: "0%",
      duration: 2,
      scrollTrigger: {
        trigger: "#AboutmeDiv",
        start: "top 70%",
        end: "bottom 10%",
        scrub: true,
      },
    });
    gsap.from("#projects", {
      width: "0%",
      duration: 2,
      scrollTrigger: {
        trigger: "#SkillDiv",
        start: "top 70%",
        end: "bottom 10%",
        scrub: true,
      },
    });
    gsap.from("#contactme", {
      width: "0%",
      duration: 2,
      scrollTrigger: {
        trigger: "#ProjectsDiv",
        start: "top 70%",
        end: "bottom 10%",
        scrub: true,
      },
    });
  }, []);

  return (
    <>
      <div
        id="Preloader"
        className="z-50 fixed flex justify-center items-center bg-[#eb60e4b9] w-screen h-screen"
      >
        <div className="loader"></div>
      </div>
      <div>
        <div id="home">
          <HeroSection />
        </div>
        <hr id="aboutme" className="HorinzontalLine" />
        <div id="AboutmeDiv">
          <AboutMeSTN />
        </div>
        <hr id="SkillsLine" className="HorinzontalLine" />
        <div
          id="SkillDiv"
          className="w-full flex-col flex justify-center items-center "
        >
          <h1 className="w-full text-black dark:text-white text-center my-3  text-4xl">
            Skills And Knowledge
          </h1>
          <AnimatedList
            Skills={SkillsObj}
            onItemSelect={(item, index) => alert(item.desc)}
            showGradients={true}
            enableArrowNavigation={true}
            displayScrollbar={true}
          />
        </div>
        <hr id="projects" className="HorinzontalLine" />
        <div id="ProjectsDiv">
          <MyProjectsSTN />
        </div>

        <hr id="contactme" className="HorinzontalLine" />
        <div id="CotactmeDiv">
          <ContactUs />
        </div>
        <hr className="HorinzontalLine" />
        <div>
          <LetStarted />
        </div>
        <hr id="FollowMe" className="HorinzontalLine" />
        <FollowMe />
        <hr className="HorinzontalLine" />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
