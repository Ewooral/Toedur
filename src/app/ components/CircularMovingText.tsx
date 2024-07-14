import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MotionDiv } from "./framer-motion/ImportFramerMotionOnce";
import { Theme } from "../store/locale";

type CircularTextProps = {
  theme: Theme;
};

const CircularText: React.FC<CircularTextProps> = ({ theme }) => {
  const [rotateDeg, setRotateDeg] = useState(0);
  const originalTextA = "free meeting request";
  const originalTextB = "free meeting request";
  const originalText = "free  meeting  request  free  meeting  request free";
  const radius = 100; // Adjust radius for your needs

  // Function to increase space between words
  const increaseSpaceBetweenText = (text: string, spaceCount: number) => {
    return text.split(" ").join(" ".repeat(spaceCount));
  };

  const spacedTextA = increaseSpaceBetweenText(originalTextA, 10); // Adjust spaceCount for your needs
  const spacedTextB = increaseSpaceBetweenText(originalTextB, 10); // Adjust spaceCount for your needs

  const spacedText = increaseSpaceBetweenText(originalText, 10); // Adjust spaceCount for your needs

  const scaleVariants = {
    hidden: { scale: 1.5 },
    visible: {
      scale: 3.5,
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear",
      },
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.pageYOffset;
      setRotateDeg(offset * 0.4);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "300px",
        height: "300px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{ transform: `rotate(${rotateDeg}deg)` }}
        className="flex justify-center items-center"
      >
        <svg width="250" height="250" viewBox="0 0 300 300">
          {/* Path for originalTextA */}
          <path
            id="textPathA"
            d={`M ${150 - radius},${150} A ${radius},${radius} 0 1,1 ${
              150 + radius
            },${150} A ${radius},${radius} 0 1,1 ${150 - radius},${150}`}
            fill="none"
          />
          <text style={{ fill: theme.name === "dark" ? "white" : "inherit", fontSize:"1rem", fontWeight:'bolder' }}>
            <textPath
              className="circularText"
              xlinkHref="#textPathA"
              startOffset="15%"
            >
              {spacedTextA}
            </textPath>
          </text>
          {/* Path for originalTextB */}
          <path
            id="textPathB"
            d={`M ${150 - radius},${150} A ${radius},${radius} 0 1,0 ${
              150 + radius
            },${150} A ${radius},${radius} 0 1,0 ${150 - radius},${150}`}
            fill="none"
          />
          <text style={{ fill: theme.name === "dark" ? "white" : "inherit", fontSize:"1rem", fontWeight:'bolder'}}>
            <textPath
              className="circularText"
              xlinkHref="#textPathB"
              startOffset="0%"
            >
              {spacedTextB}
            </textPath>
          </text>
        </svg>
        <MotionDiv
          className="absolute"
          initial="hidden"
          animate="visible"
          //   @ts-ignore
          variants={scaleVariants}
        >
          <Image src={"/up_right.svg"} alt="arrowhead" width={32} height={32} />
        </MotionDiv>
      </div>
    </div>
  );
};

export default CircularText;
