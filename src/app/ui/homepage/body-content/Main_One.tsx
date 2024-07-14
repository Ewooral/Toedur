"use client";
import { FormattedMessage } from "react-intl";
import { ToedurImageCard } from "@/app/ components/cards/ImageCard";
import Image from "next/image";
import React from "react";
import { HomePageProps } from "@/app/types/homepage";
import useLocaleStore from "@/app/store/locale";
import clsx from "clsx";

export const Main_One = (props: HomePageProps) => {
  const { theme } = useLocaleStore();
  return (
    <main
      style={{
        // backdropFilter: "blur(16px) saturate(180%)",
        // backgroundColor: " rgba(255, 255, 255, 0.73)",
        background: `${theme.bgPartialTransparency}`,
        // color: theme.name === 'blue' ? "whenThemeIsBlue" : "inherit"
      }}
      className="p-6 bgCard"
    >
      <section className={
        clsx(
        "grid grid-cols-10 items-start mx-[3rem]",
        theme.name === 'blue' ? "whenThemeIsBlue" : "inherit"
      )}>
        <div className="flex flex-col col-span-5">
          <p className="text-[3rem] font-extrabold font-sans">
            <FormattedMessage
              id="welcome_to_toedur"
              defaultMessage="Welcome to"
            />{" "}
            <span className="text-blue-500">
              <FormattedMessage id="toedur" defaultMessage="TOEDUR" />
            </span>
          </p>
          <p className="flex items-center gap-5">
            <span className="w-[8.4rem] h-[2rem] bg-blue-500 rounded-[2rem]"></span>
            <span className="text-gray-500 text-[2rem] font-Comfortaa">
              <FormattedMessage
                id="find_your_edur"
                defaultMessage="find your edur,"
              />
            </span>
          </p>
          <p className="flex col-span-4 text-gray-500 text-[2rem] font-sans">
            <FormattedMessage
              id="find_your_advisor"
              defaultMessage="find your advisor,"
            />
          </p>
          <div className="flex gap-8 font-poppins text-[1rem] text-gray-400 mt-8">
            <Image
              src={"/arrowhead_right.svg"}
              alt="arrowhead"
              width={30}
              height={30}
            />
            <p className="flex flex-col">
              <span>
                <FormattedMessage id="join_our" defaultMessage="Join our" />{" "}
                <span className="text-blue-500 font-bold">
                  <FormattedMessage id="toedur" defaultMessage="Toedur" />
                </span>{" "}
                <FormattedMessage
                  id="community_support_students_worldwide"
                  defaultMessage="community, & support students worldwide."
                />
              </span>
              <span>
                <FormattedMessage
                  id="be_a_guide"
                  defaultMessage="Be a guide and a mentor in prospective student's way"
                />
              </span>
            </p>
          </div>
          <div className="grid grid-cols-4 mt-9 gap-3">
            <ToedurImageCard
              name="Elijah"
              nationality="Boahen"
              image="/imagecard1.svg"
              alt="Elijah"
            />
            <ToedurImageCard
              name="Khvicha"
              nationality="Tchkoidze"
              image="/imagecard2.svg"
              alt="Tchkoidze"
            />
            <ToedurImageCard
              name="Furkan"
              nationality="Ince"
              image="/imagecard3.svg"
              alt="Ince"
            />
            {/* <ToedurImageCard
              name="Furkan"
              nationality="Ince"
              image="/ImageCardC.jpg"
              alt="Ince"
            /> */}
          </div>
        </div>
        <div className="col-span-5">
          <FormattedMessage
            id="home_one"
            defaultMessage="This is the content for home page version"
          />{" "}
          {props.id}
        </div>
      </section>
    </main>
  );
};
