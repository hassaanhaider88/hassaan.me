/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Calendar } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AllProjectsData from '../AllProjectsDetails'

gsap.registerPlugin(ScrollTrigger);

// const AllProjectsData = [
//   {
//     id: "projectNumber00",
//     ProjectImgURl:
//       "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
//     ProjectmockUpImg:
//       "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=800&fit=crop",
//     ProjectImgName: "APEX AI",
//     ProjectDesc:
//       "Code Backend for this project in node express js and mongoDB and handle authentication and authorization with JWT token",
//     ProjectImgCreatedAt: "22 DEC 2025",
//     ProjectUrlRedirectTo: "https://apexai-pk.netlify.app/",
//     IconsDirection: "bottom-5 left-5",
//     FlexDirecton: "flex-row-reverse",
//     XVal: "200px",
//   },
//   {
//     id: "projectNumber01",
//     ProjectImgURl:
//       "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
//     ProjectmockUpImg:
//       "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=800&fit=crop",
//     ProjectImgName: "Data Analytics Hub",
//     ProjectDesc:
//       "Full-stack analytics dashboard with real-time data visualization, built with React, D3.js, and Firebase",
//     ProjectImgCreatedAt: "15 DEC 2025",
//     ProjectUrlRedirectTo: "https://example.com",
//     IconsDirection: "bottom-5 right-5",
//     FlexDirecton: "flex-row",
//     XVal: "-200px",
//   },
//   {
//     id: "projectNumber02",
//     ProjectImgURl:
//       "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
//     ProjectmockUpImg:
//       "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=800&fit=crop",
//     ProjectImgName: "Smart Workflow",
//     ProjectDesc:
//       "Project management tool with AI-powered task prioritization and team collaboration features",
//     ProjectImgCreatedAt: "08 DEC 2025",
//     ProjectUrlRedirectTo: "https://example.com",
//     IconsDirection: "bottom-5 left-5",
//     FlexDirecton: "flex-row-reverse",
//     XVal: "200px",
//   },
// ];

const ProjectCard = ({ project, index, theme, onImageClick }) => {
  const cardRef = useRef(null);
  const mockupRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const mockup = mockupRef.current;

    gsap.fromTo(
      card,
      {
        opacity: 0,
        x: project.XVal,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    const handleMouseMove = (e) => {
      if (!mockup) return;
      const rect = mockup.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(mockup, {
        rotationY: x / 20,
        rotationX: -y / 20,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(mockup, {
        rotationY: 0,
        rotationX: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    if (mockup) {
      mockup.addEventListener("mousemove", handleMouseMove);
      mockup.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (mockup) {
        mockup.removeEventListener("mousemove", handleMouseMove);
        mockup.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [project.XVal]);

  const isDark = theme === "dark";
  const bgColor = isDark ? "bg-gray-900" : "bg-white";
  const textColor = isDark ? "text-white" : "text-gray-900";
  const subtextColor = isDark ? "text-gray-400" : "text-gray-600";
  const borderColor = isDark ? "border-gray-800" : "border-gray-200";
console.log(project)
  return (
    <motion.div
      ref={cardRef}
      className={`${bgColor} ${borderColor} border rounded-2xl overflow-hidden shadow-2xl mb-12 transform transition-all duration-300`}
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div
        className={`flex ${project.FlexDirecton} flex-col lg:flex-row items-center gap-8 p-8`}
      >
        {/* Mockup Image Section */}
        <motion.div
          ref={mockupRef}
          className="lg:w-1/2 w-full cursor-pointer relative group"
          style={{ perspective: "1000px" }}
          whileHover={{ scale: 1.05 }}
          onClick={() => onImageClick(project.ProjectImgURl)}
        >
          <div className="relative overflow-hidden rounded-xl shadow-2xl">
            <img
              src={project.ProjectmockUpImg}
              alt={project.ProjectImgName}
              className="w-full h-auto object-cover transform transition-all duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                className="bg-white/20 backdrop-blur-sm rounded-full p-4"
              >
                <svg
                  className="w-12 h-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Content Section */}
        <div className="lg:w-1/2 w-full space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2
              className={`${textColor} text-4xl font-bold mb-4 tracking-tight`}
            >
              {project.ProjectImgName}
            </h2>

            <p className={`${subtextColor} text-lg leading-relaxed mb-6`}>
              {project.ProjectDesc}
            </p>

            <div className="flex items-center gap-3 mb-6">
              <Calendar className={`w-5 h-5 ${subtextColor}`} />
              <span className={`${subtextColor} text-sm font-medium`}>
                {project.ProjectImgCreatedAt}
              </span>
            </div>

            <motion.a
              href={project.ProjectUrlRedirectTo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#7B0575] to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View Project</span>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const ImageModal = ({ imageUrl, onClose, theme }) => {
  const isDark = theme === "dark";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        className="absolute top-8 right-8 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        onClick={onClose}
        whileHover={{ rotate: 90 }}
      >
        <X className="w-8 h-8" />
      </motion.button>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", damping: 20 }}
        className="max-w-6xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={imageUrl}
          alt="Project preview"
          className="w-full h-auto rounded-2xl shadow-2xl"
        />
      </motion.div>
    </motion.div>
  );
};

const App = () => {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    setTheme(localStorage.getItem("theme") || "dark");
  }, [theme]);
  const [selectedImage, setSelectedImage] = useState(null);

  const isDark = theme === "dark";
  const textColor = isDark ? "text-white" : "text-gray-900";

  return (
    <div className={`min-h-screen  transition-colors duration-500`}>
      \<h1 className="text-5xl text-center text-white w-full">My Projects</h1>
      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {AllProjectsData.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            theme={theme}
            onImageClick={setSelectedImage}
          />
        ))}
      </div>
      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <ImageModal
            imageUrl={selectedImage}
            onClose={() => setSelectedImage(null)}
            theme={theme}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
