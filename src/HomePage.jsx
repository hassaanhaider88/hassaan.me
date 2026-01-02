import HeroSection from "./Sections/HeroSTN";
import AboutMeSTN from "./Sections/AboutMeSTN";
import SkillsSTN from "./Sections/SkillsSTN";
import MyProjectsSTN from "./Sections/MyProjectsSTN";
import ContactUs from "./Sections/ContactUs";
import FollowMe from "./Sections/FollowMe";
import Footer from "./Sections/FooterSTN";
import "./App.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LetStarted from "./Sections/LetStarted";
import ProjectStn from "./Sections/ProjectStn";

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
        <div id="SkillDiv">
          <SkillsSTN />
        </div>
        <hr id="projects" className="HorinzontalLine" />
        <div id="ProjectsDiv">
          <ProjectStn/>
          {/* <MyProjectsSTN /> */}
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
