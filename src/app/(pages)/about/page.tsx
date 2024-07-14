"use client";


import React from "react";
import useLocaleStore from "@/app/store/locale";
import clsx from "clsx";
import variables from "@/app/styles/variables.module.scss";
import { useIsClient } from "@/app/hooks/useIsClient";
import { useMediaQuery } from "react-responsive";
import { MotionDiv } from "@/app/ components/framer-motion/ImportFramerMotionOnce";

const About_Default = () => {
  const { theme } = useLocaleStore();
  const isClient = useIsClient();
  const isLessThanCustomBreakpointPartTwo = useMediaQuery({
    maxWidth: 766,
    // maxHeight: 938
  });
  return (
    <>
      {isClient && (
        <MotionDiv>
          <main
            style={{
              background: `${theme.bgPartialTransparency}`,
              color: `${theme.colorCode}`,
            }}
            className="p-3 bgCard"
          >
            <section
              className={clsx(
                "grid grid-cols-10 items-start gap-4",
                theme.name === "blue" ? "whenThemeIsBlue" : "inherit",
                isLessThanCustomBreakpointPartTwo ? "mx-[.9rem]" : "mx-[3rem]"
              )}
            >
              This is the About page
            </section>
          </main>
        </MotionDiv>
      )}
    </>
  );
};
export default About_Default;
