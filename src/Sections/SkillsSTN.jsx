import { AiFillGithub } from "react-icons/ai";
import { SiNextdotjs } from "react-icons/si";
import { BsGit } from "react-icons/bs";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { FaJsSquare } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
const SkillsSTN = () => {
  // Define cards data to keep JSX clean
  const cards = [
    { id: 1, color: "142, 249, 252", icon: AiFillHtml5 },
    { id: 2, color: "142, 252, 204", icon: DiCss3 },
    { id: 3, color: "142, 252, 157", icon: FaJsSquare },
    { id: 4, color: "215, 252, 142", icon: RiReactjsFill },
    { id: 5, color: "252, 252, 142", icon: FaNode },
    { id: 6, color: "252, 208, 142", icon: SiExpress },
    { id: 7, color: "252, 142, 142", icon: DiMongodb },
    { id: 9, color: "204, 142, 252", icon: SiNextdotjs },
    { id: 8, color: "252, 142, 239", icon: BsGit },
    { id: 10, color: "142, 202, 252", icon: AiFillGithub },
  ];

  return (
    <div className="flex left-1/2 items-center justify-center w-full h-screen text-center relative ">
      <div
        className="slider flex justify-center items-center"
        style={{
          "--quantity": cards.length,
        }}
      >
        <h1 className="text-xl text-white fontsemibold">My Skills</h1>
        {cards.map((card, index) => (
          <div
            key={card.id}
            className="item flex justify-center items-center w-full absolute inset-0 overflow-hidden rounded-xl border-2 border-[rgba(var(--color-card))] p-0"
            style={{
              "--index": index,
              "--color-card": card.color,
            }}
          >
            <card.icon size={50} color="white" />
            {/* <AiFillGithub size={50} color="white" /> */}
          </div>
        ))}
      </div>

      {/* Injecting the specific 3D CSS logic here. 
        In a real Next.js/Create-React-App project, 
        this would go in your global.css or a module.css file.
      */}
      <style>{`
        .slider {
          /* Dimensions */
          --w: 100px;
          --h: 130px;
          
          /* 3D Settings */
          --perspective: 1000px;
          --rotateX: -15deg;
          --translateZ: calc((var(--w) + var(--h)) + 0px);

          width: var(--w);
          height: var(--h);
          position: absolute;
          top: 25%;
          z-index: 2;
          
          /* 3D Transform Logic */
          transform-style: preserve-3d;
          transform: perspective(var(--perspective));
          animation: rotating 20s linear infinite;
        }

        /* Individual Card Transform */
        .item {
          transform: rotateY(calc((360deg / var(--quantity)) * var(--index))) translateZ(var(--translateZ));
        }

        /* Gradient Background Logic */
        .card-gradient {
          background: radial-gradient(
            circle,
            rgba(var(--color-card), 0.2) 0%,
            rgba(var(--color-card), 0.6) 80%,
            rgba(var(--color-card), 0.9) 100%
          );
        }

        @keyframes rotating {
          from {
            transform: perspective(var(--perspective)) rotateX(var(--rotateX)) rotateY(0deg);
          }
          to {
            transform: perspective(var(--perspective)) rotateX(var(--rotateX)) rotateY(1turn);
          }
        }
      `}</style>
    </div>
  );
};

export default SkillsSTN;
