import NavBar from "../components/NavBar";
import LeftSlashes from "../components/LeftSlashes";
import HeroLeftText from "../components/HeroLeftText";
import HeroRightImage from "../components/HeroRightImage";

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
