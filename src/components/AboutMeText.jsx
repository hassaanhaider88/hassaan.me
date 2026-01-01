/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
// import * as React from "react";

export function GradualSpacing({ text = "Gradual Spacing" }) {
  return (
    <div className="flex space-x-1 justify-center overflow-hidden">
      {text.split("").map((char, i) => (
        <motion.p
          key={i}
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: [0, 1, 0], x: [-18, 0, 18] }}
          transition={{
            duration: 1.5,
            delay: i * 0.1,
            repeat: Infinity,
            repeatDelay: 1.5,
            ease: "easeInOut",
          }}
          className="text-xl text-center sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[4rem]"
        >
          {char === " " ? <span>&nbsp;</span> : char}
        </motion.p>
      ))}
    </div>
  );
}
