import React from "react";

const LetStarted = () => {
  return (
    <section className="flex flex-col items-center text-white text-sm">
      <div
        onClick={() => window.open("https://wa.me/923437117831")}
        className="flex  cursor-pointer items-center mt-32 gap-2 border border-slate-600 text-gray-50 rounded-full px-4 py-2"
      >
        <div className="size-2.5 bg-green-500 rounded-full"></div>
        <span>Book a live demo today</span>
      </div>
      <h1 className="text-center text-5xl leading-[68px] md:text-6xl md:leading-[70px] mt-4 font-semibold max-w-2xl">
        Let's Make A Free Consultation Call
      </h1>
      <p className="text-center text-base md:text-lg mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        We help you plan, build, and launch your projects efficiently — so you
        can focus on growth and results.
      </p>

      <div className="flex items-center gap-4 mt-8">
        <button
          onClick={() => window.open("https://wa.me/923437117831")}
          className="border border-slate-400 active:scale-95 hover:bg-white/10 transition rounded-lg px-8 h-11"
        >
          Book a demo
        </button>
      </div>
      <img
        src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/hero-section-showcase-2.png"
        className="w-full rounded-[15px] max-w-4xl mt-16"
        alt="hero section showcase"
      />
    </section>
  );
};

export default LetStarted;
