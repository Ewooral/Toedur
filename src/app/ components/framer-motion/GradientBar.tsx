import React from 'react';
import { MotionDiv } from "@/app/ components/framer-motion/ImportFramerMotionOnce";
import { Theme } from '@/app/store/locale';

const GradientBar = ({ theme }: {theme: Theme}) => {
  return (
    <MotionDiv
      className="col-span-10 h-[8px] my-10"
      style={{
        backgroundImage: `linear-gradient(to right, #EEA21B, ${
          theme.name === "light" ? "#fff" : "#000"
        }, #1360e2)`,
        backgroundSize: "200% 100%",
        animation: "slide 2s linear infinite",
      }}
    ></MotionDiv>
  );
};

export default GradientBar;