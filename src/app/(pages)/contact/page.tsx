"use client";
import { FormattedMessage } from "react-intl";
import { ToedurImageCard } from "@/app/ components/cards/ImageCard";
import Image from "next/image";
import React from "react";
import { HomePageProps } from "@/app/types/homepage";
import useLocaleStore from "@/app/store/locale";
import clsx from "clsx";
import variables from "@/app/styles/variables.module.scss";
import { useIsClient } from "@/app/hooks/useIsClient";
import { useMediaQuery } from "react-responsive";
import { data, paragraphs } from "@/app/data";
import { MotionDiv } from "@/app/ components/framer-motion/ImportFramerMotionOnce";

const Contact_Default = () => {
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
              This is the contact page
            </section>
          </main>
        </MotionDiv>
      )}
    </>
  );
};
export default Contact_Default;
