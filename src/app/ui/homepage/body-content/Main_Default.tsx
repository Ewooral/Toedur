"use client";
import { FormattedMessage } from "react-intl";
import Image from "next/image";
import React, { useState } from "react";
import { HomePageProps } from "@/app/types/homepage";
import useLocaleStore from "@/app/store/locale";
import clsx from "clsx";
import variables from "@/app/styles/variables.module.scss";
import { useIsClient } from "@/app/hooks/useIsClient";
import { useMediaQuery } from "react-responsive";

import { MotionDiv } from "@/app/ components/framer-motion/ImportFramerMotionOnce";
import { ToedurButton } from "@/app/ components/buttons/Button";
import CircularMovingText from "@/app/ components/CircularMovingText";
import { IoIosArrowForward, IoMdArrowDropright } from "react-icons/io";
import Link from "next/link";
import HowToedurWorksCard from "@/app/ components/cards/HowToedurWorksCard";
import { GrStar } from "react-icons/gr";
import ToedurQuestionCard from "@/app/ components/cards/ToedurQuestionCard";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

import ToedurHorizontalScroll from "@/app/ components/containers/HorizontalScrollContainer";
import { FaDiscord } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

import { useCustomForm } from "@/app/hooks/useCustomForm";

import { FieldValues } from "react-hook-form";
import FooterForm from "../footer/FooterForm";
import SupportInfo from "../footer/SupportInfo";
import Footer from "../footer/Footer";
import { ToedurPopOver, ToedurPopOverA } from "@/app/ components/popover/ToedurPopOver";
import { Button } from "@/components/ui/button";
export const Main_Default = (props: HomePageProps) => {
  const { theme } = useLocaleStore();
  const isClient = useIsClient();
  const isLessThanCustomBreakpointPartTwo = useMediaQuery({
    maxWidth: 766,
  });
  const SM = useMediaQuery({ maxWidth: 640 });
  const MD = useMediaQuery({ minWidth: 641, maxWidth: 768 });
  const LG = useMediaQuery({ minWidth: 769, maxWidth: 1024 });
  const XL = useMediaQuery({ minWidth: 1025, maxWidth: 1280 });
  const XXL = useMediaQuery({ minWidth: 1281 });
  const { register, control, watch, handleSubmit, reset, formState } =
    useCustomForm();

  // control loading state

  const { errors, isSubmitting } = formState;
  const [isLoading, setIsLoading] = useState(false);

  // Handle Form Submission
  async function onSubmit(data: FieldValues) {
    setIsLoading(true);
    try {
      console.log("Data", data);
    } catch (error) {
      console.error("An error occured!");
    } finally {
      setIsLoading(false);
      reset();
    }
  }
  return (
    <>
      {isClient && (
        <MotionDiv>
          <main
            style={{
              background: `${theme.bgPartialTransparency}`,
            }}
            className="bgCard"
          >
            {/* ................................................................................................................................................................. */}

            {/* FIRST SECTION */}
            <section
              className={clsx(
                "grid items-start gap-4 poppins-regular pt-[4rem]",
                theme.name === "blue" ? "whenThemeIsBlue" : "inherit",

                "grid-cols-10" // Adjusting grid columns based on breakpoints
              )}
            >
              {/* ................................ LEFT COLUMN.................................... */}
              <div
                className={clsx(
                  "flex flex-col justify-center items-center md:items-start lg:justify-start ",
                  "mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12", // Adjusting margins based on breakpoints
                  "lg:col-span-5 md:col-span-3 col-span-10",
                  ""
                )}
              >
                <p
                  style={{
                    color: theme.name === "dark" ? "#f5deb3" : "",
                  }}
                  className=" lg:text-[3rem] text-[2rem] font-extrabold"
                >
                  {/* <span className="text-[5rem]">
                    <FormattedMessage id="hello" defaultMessage={"HELLO!"} />
                  </span> */}
                  <FormattedMessage
                    id="welcome_to_toedur"
                    defaultMessage="Welcome to"
                  />{" "}
                  <span
                    style={{
                      color:
                        theme.name === "blue"
                          ? variables.getPureWhiteColor
                          : theme.name === "dark"
                            ? variables.getPureWhiteColor
                            : "#1360e2",
                    }}
                    className="text-blue-500"
                  >
                    <FormattedMessage id="toedur" defaultMessage="TOEDUR" />
                  </span>
                </p>
                <p className=" lg:text-[3rem] text-[2rem] flex ml-[4rem] text-[#f7c325] text-blue-5000 items-center font-extrabold gap-5">
                  <span
                    style={{
                      color:
                        theme.name === "blue"
                          ? variables.getFindEdurColor
                          : theme.name === "light"
                            ? variables.getFindEdurColor
                            : "inherit",
                    }}
                    className=""
                  >
                    <FormattedMessage
                      id="find_your_edur"
                      defaultMessage="find your edur"
                    />
                  </span>
                </p>
                <p
                  style={{
                    color:
                      theme.name === "blue"
                        ? variables.getFindEdurColor
                        : theme.name === "light"
                          ? variables.getFindEdurColor
                          : variables.getSecondaryColor,
                  }}
                  className="flex items-center gap-3 col-span-4 text-gray-500 font-extrabold 
                  lg:text-[3rem] text-[2rem]"
                >
                  <FormattedMessage
                    id="find_your_friend"
                    defaultMessage="find your friend, find"
                  />
                </p>

                <p
                  style={{
                    color:
                      theme.name === "blue"
                        ? variables.getFindEdurColor
                        : theme.name === "light"
                          ? variables.getFindEdurColor
                          : variables.getSecondaryColor,
                  }}
                  className={clsx(
                    "flex items-center gap-3 col-span-4 text-gray-500  lg:text-[3rem] text-[2rem]",
                    "font-extrabold"
                  )}
                >
                  <FormattedMessage
                    id="find_your_consultant"
                    defaultMessage="your consultant"
                  />
                </p>
                <div className="flex gap-8 font-poppins text-[1rem] text-gray-400 mt-8 ">
                  <Image
                    src={"/double_right.svg"}
                    alt="arrowhead"
                    width={32}
                    height={32}
                  />
                  <p
                    style={{
                      color:
                        theme.name === "blue"
                          ? variables.getPureWhiteColor
                          : theme.name === "dark"
                            ? variables.getPureWhiteColor
                            : variables.getPureWhiteColor,
                    }}
                    className="flex flex-col my-[1.5rem]"
                  >
                    <span
                      style={{
                        color:
                          theme.name === "blue"
                            ? "inherit"
                            : theme.name === "dark"
                              ? variables.getPureWhiteColor
                              : variables.getFindEdurColor,
                      }}
                    >
                      <FormattedMessage
                        id="Are_you_a_prospective"
                        defaultMessage="Are you a prospective student? Would you like to get"
                      />{" "}
                    </span>
                    <span
                      style={{
                        color:
                          theme.name === "blue"
                            ? variables.getDeepBlueColor
                            : theme.name === "dark"
                              ? variables.getSecondaryColor
                              : "black",
                      }}
                      className="text-blue-500"
                    >
                      <FormattedMessage
                        id="consultation_from_another"
                        defaultMessage="consultation from another student during this process?"
                      />
                    </span>{" "}
                    <span
                      style={{
                        color:
                          theme.name === "blue"
                            ? "inherit"
                            : theme.name === "dark"
                              ? variables.getSlightlyWhiteColor
                              : variables.getFindEdurColor,
                      }}
                    >
                      <FormattedMessage
                        id="We_call_them_Edur"
                        defaultMessage="We call them Edur. Find your Edur now with Toedur!"
                      />
                    </span>
                  </p>
                </div>

                {/* ...... BUTTONS........ */}
                <div className="grid grid-cols-5 my-[2rem] gap-8">
                  {/* FIND YOUR EDUR BUTTON */}
                  <ToedurButton
                    className={clsx(
                      "flex flex-wrap justify-center items-center rounded-xl",
                      "focus:bg-focus-blue-toedur bg-[#1360e2] px-4 py-4 text-white hover:bg-[#3480ff]  hover:text-[#fff]",
                      "col-span-5 lg:col-span-2"
                    )}
                  >
                    <FormattedMessage
                      id="find_your_edur_button"
                      defaultMessage="Find your Edur"
                    />
                  </ToedurButton>

                  {/* BECOME AN EDUR BUTTON */}
                  <ToedurButton
                    className={clsx(
                      "flex justify-center items-center rounded-xl px-4 py-4 text-[#81a8e9] focus:text-focus-blue-toedur",
                      " text-[#81a8e9] focus:border-focus-blue-toedur hover:text-focus-blue-toedur",
                      `border-2 border-[#81a8e9]`,
                      "col-span-5 lg:col-span-2"
                    )}
                  >
                    <FormattedMessage
                      id="become_an_edur_button"
                      defaultMessage="Become an Edur"
                    />
                  </ToedurButton>
                </div>

                {/* CIRCULAR MOVING TEXT */}
                <div
                  className={clsx(
                    "col-span-5 mt-[-2rem] ml-[-2rem]",

                    isLessThanCustomBreakpointPartTwo &&
                    "flex justify-center items-center ml-[0.62rem]"
                  )}
                >
                  <Link href={"#"}>
                    <CircularMovingText theme={theme} />
                  </Link>
                </div>
              </div>

              {/* ........................... RIGHT COLUMN................................. */}
              <div
                className={clsx(
                  "lg:col-span-5  md:col-span-7 sm:col-span-10 col-span-10",
                  // "flex flex-col my-[1rem] ",
                  "mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12", // Adjusting margins based on breakpoints
                )}
              >
                <div
                  style={{ color: theme.colorCode }}
                  className="grid grid-cols-10 gap-7 "
                >
                  {/* LEFT FIRST COLUMN -- IMAGE 1 */}
                  <div
                    className={clsx(
                      "col-span-10 sm:col-span-4 md:col-span-4 box  flex justify-center items-center",
                    )}
                  >
                    <Image
                      src={"https://res.cloudinary.com/dkmdrcm73/image/upload/v1720621219/toedur/jq2iuctot4fxqjzlqawd.svg"}
                      alt="imageofthree"
                      width={200}
                      height={200}
                      className="h-auto md:w-[250px] image-same-height"
                    />
                    <div className="img-overlay">
                      <h3 className="my-2 text-[#fff]">
                        <FormattedMessage
                          id="find_your_edur_now"
                          defaultMessage="Find your Edur"
                        />
                      </h3>
                      <p className="text-[#EEA21B]">
                        <FormattedMessage
                          id="edur_description"
                          defaultMessage="Discover your unique path, purpose, and passion"
                        />
                      </p>
                      <ToedurPopOverA />
                    </div>
                  </div>

                  {/* RIGHT FIRST COLUMN -- IMAGE 2 */}
                  <div
                    className={clsx(
                      "col-span-10  sm:col-span-6 md:col-span-6 box ",

                    )}
                  >
                    <Image
                      src={"https://res.cloudinary.com/dkmdrcm73/image/upload/v1720621151/toedur/q8themjgkvm7soyfuytu.svg"}
                      alt="imageofthree"
                      width={200}
                      height={200}
                      className="h-auto w-[750px] image-same-height"
                    />
                    <div className="img-overlay">
                      <h3 className="my-2 text-[#fff]">
                        <FormattedMessage
                          id="become_an_edur_now"
                          defaultMessage="Become an Edur Now!"
                        />
                      </h3>
                      <p className="text-[#EEA21B]">
                        <FormattedMessage
                          id="edur_description"
                          defaultMessage="Embark on a transformative journey to become a mentor and role model. Follow these steps to make a meaningful impact:"
                        />
                      </p>
                      <ToedurPopOver />
                    </div>
                  </div>

                  {/* TAKES FULL WIDTH 10/10 -- JOIN COMMUNITY -- */}
                  <div
                    style={{
                      // backgroundImage:"/Rectangle-32.svg",
                      backgroundImage: `url(https://res.cloudinary.com/dkmdrcm73/image/upload/v1720621235/toedur/mevfldxlaikvssch9ejt.svg)`,
                      objectFit: "cover",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundAttachment: "fixed",
                    }}
                    className="col-span-10 gap-2 rounded-2xl"
                  >
                    <div className=" grid bg-[#808080b6]  grid-cols-4 p-4 gap-3 bgCard rounded-xl">
                      <div className="col-span-4 text-white my-2 font-semibold text-2xl ">
                        <h2>Join our Toedur community </h2>
                      </div>

                      <div className="col-span-3 text-sm my-4">
                        <h5>
                          Thinking about studying abroad? We&apos;ve got you
                          covered! Toedur offers you a secure space where you
                          can find your Edur and receive consultations.
                        </h5>
                      </div>
                      <div className="col-span-1 h-[2rem] w-[2rem] rounded-full mx-10 bg-[#a8a8a8] flex justify-center  items-center">
                        <IoIosArrowForward className="text-white" />
                      </div>
                    </div>
                  </div>



                  <div className="col-span-5"></div>
                  <div className="col-span-5">
                    <span>
                      Some cool <span className="text-[#1360e2]"> additional information </span>
                    </span>
                    <span>
                      about our community
                    </span>
                  </div>

                </div>
              </div>
            </section>

            {/* ................................................................................................................................................................. */}

            {/* SECOND SECTION */}
            <section
              className={clsx(
                "grid items-start gap-4 poppins-regular my-[1rem]",
                theme.name === "blue" ? "whenThemeIsBlue" : "inherit",
                "grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10" // Responsive grid columns
              )}
            >
              {/* BORDER BOTTOM TAKES FULL COL SPAN 10/10 */}
              <MotionDiv
                className="col-span-10  h-[8px] my-10"
                style={{
                  // backgroundImage:"linear-gradient(to right, #000, #fff, #000)",
                  backgroundImage: `linear-gradient(to right, #EEA21B, ${theme.name === "light" ? "#fff" : "#000"
                    }, #1360e2)`,
                  backgroundSize: "200% 100%",
                  animation: "slide 2s linear infinite",
                }}
              ></MotionDiv>

              {/* COL SPAN 10/10 WITH A CHILD GRID 10/10 */}
              <div className="col-span-10 grid grid-cols-10 justify-center items-center  mx-[3rem] my-10">
                {/* HOW TOEDUR WORKS COL-SPAN 5 */}
                <div className="col-span-5">
                  <span className="text-[48px] font-extrabold">
                    How <span className="text-[#1360E2]">Toedur</span> Works
                  </span>
                </div>

                {/* JOIN OUR TOEDUR COM. COL-SPAN 5 */}
                <div
                  className={clsx(
                    "col-span-full sm:col-span-5 flex justify-end sm:justify-start",
                    theme.name === "dark" ? "text-[#ffffff]" : "inherit"
                  )}
                >
                  Get through this easy step by step tutorial to be part of Toedur now
                </div>
              </div>

              {/* CARDS FOR HOW TOEDUR WORKS COL SPAN 10/10  */}
              <div className={clsx("col-span-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-4 sm:gap-8 md:gap-12 lg:gap-20 my-10",
                "mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12", // Adjusting margins based on breakpoints
              )}>
                <HowToedurWorksCard
                  stepNumber={1}
                  stepTitle="Sign up!"
                  description="Sign up with Toedur & ignite your educational journey"
                  color="#EEA21B"
                  classNameStepTitle={
                    theme.name === "dark" ? "#fff" : "inherit"
                  }
                  classNameDescription={
                    theme.name === "dark" ? "#ffffff7A" : "inherit"
                  }
                  classNameBackgroundColor={
                    theme.name === "dark" ? "#0000005E" : "#fff"
                  }
                />

                <HowToedurWorksCard
                  stepNumber={2}
                  stepTitle="Find An Edur"
                  description="Find an Edur, a student like you, who knows every step to your dream education abroad from their experience"
                  color="#EEA21B"
                  classNameStepTitle={
                    theme.name === "dark" ? "#fff" : "inherit"
                  }
                  classNameDescription={
                    theme.name === "dark" ? "#ffffff7A" : "inherit"
                  }
                  classNameBackgroundColor={
                    theme.name === "dark" ? "#0000005E" : "#fff"
                  }
                />

                <HowToedurWorksCard
                  stepNumber={3}
                  stepTitle="First Meeting"
                  description="Book your first comprehensive one-to-one meeting with your chosen Edur and start your journey"
                  color="#EEA21B"
                  classNameStepTitle={
                    theme.name === "dark" ? "#fff" : "inherit"
                  }
                  classNameDescription={
                    theme.name === "dark" ? "#ffffff7A" : "inherit"
                  }
                  classNameBackgroundColor={
                    theme.name === "dark" ? "#0000005E" : "#fff"
                  }
                />

                <HowToedurWorksCard
                  stepNumber={4}
                  stepTitle="Guiding Start"
                  description="Then your Edur will guide you professionally on what needs to be done to help you study at your dream university, city, or country"
                  color="#EEA21B"
                  classNameStepTitle={
                    theme.name === "dark" ? "#fff" : "inherit"
                  }
                  classNameDescription={
                    theme.name === "dark" ? "#ffffff7A" : "inherit"
                  }
                  classNameBackgroundColor={
                    theme.name === "dark" ? "#0000005E" : "#fff"
                  }
                />

                <HowToedurWorksCard
                  stepNumber={5}
                  stepTitle="Submit All!"
                  description="Submit all applications with your Edur's guidance until you get your visa and flight ticket"
                  color="#EEA21B"
                  classNameStepTitle={
                    theme.name === "dark" ? "#fff" : "inherit"
                  }
                  classNameDescription={
                    theme.name === "dark" ? "#ffffff7A" : "inherit"
                  }
                  classNameBackgroundColor={
                    theme.name === "dark" ? "#0000005E" : "#fff"
                  }
                />

                <HowToedurWorksCard
                  stepNumber={6}
                  stepTitle="Be part of ..."
                  description="After you arrive, consultation and mentoring from Edurs will continue. Feel safe and stay connected with the community"
                  color="#EEA21B"
                  classNameStepTitle={
                    theme.name === "dark" ? "#fff" : "inherit"
                  }
                  classNameDescription={
                    theme.name === "dark" ? "#ffffff7A" : "inherit"
                  }
                  classNameBackgroundColor={
                    theme.name === "dark" ? "#0000005E" : "#fff"
                  }
                />
              </div>

              {/*  */}
              <div className="my-10"></div>
            </section>

            {/* ................................................................................................................................................................. */}

            {/* THIRD SECTION */}
            <section
              // GRID OF 10/10
              className={clsx(
                "grid grid-cols-10 items-start gap-4 poppins-regular my-[1rem]",
                theme.name === "blue" ? "whenThemeIsBlue" : "inherit",

              )}
            >
              {/* BORDER BOTTOM TAKES FULL COL SPAN 10/10 */}
              <MotionDiv
                className="col-span-10  h-[8px] my-10"
                style={{
                  // backgroundImage:"linear-gradient(to right, #000, #fff, #000)",
                  backgroundImage: `linear-gradient(to right, #EEA21B, ${theme.name === "light" ? "#fff" : "#000"
                    }, #1360e2)`,
                  backgroundSize: "200% 100%",
                  animation: "slide 2s linear infinite",
                }}
              ></MotionDiv>



              {/* COL SPAN 10/10 WITH A CHILD GRID 10/10 */}
              <div className="col-span-10 grid grid-cols-1 md:grid-cols-10 justify-center items-center mx-[1rem] md:mx-[3rem] my-10">
                {/* HOW TOEDUR WORKS COL-SPAN 5 */}
                <div className="col-span-1 md:col-span-5 flex gap-4 items-center">
                  <span className="text-[24px] md:text-[48px] font-extrabold">
                    Become an Edur
                  </span>
                  <span>
                    <GrStar className="size-[2rem] md:size-[4rem] text-[#EEA21B]" />
                  </span>
                </div>

                {/* JOIN OUR TOEDUR COM. COL-SPAN 5 */}
                <div
                  className={clsx(
                    "col-span-1 md:col-span-5 flex justify-end md:justify-end",
                    theme.name === "dark" ? "text-[#ffffff]" : "inherit"
                  )}
                >
                  Join our Edur community and start earning money by consulting
                  prospective students from your home country
                </div>
              </div>

              {/* CARDS FOR HOW TOEDUR WORKS COL SPAN 10/10 WITH A CHILD GRID 10/10 */}
              <div className="col-span-10 grid grid-cols-1 md:grid-cols-10 gap-5 md:gap-20 my-10">
                {/* IMAGE OF A GIRL LEFT-COLUMN --COL-SPAN-5-- */}
                <div className="lg:col-span-7 md:col-span-6 col-span-1">
                  <Image
                    alt="photo"
                    src="https://res.cloudinary.com/dkmdrcm73/image/upload/v1720621235/toedur/hmog7ruy7prafmzebcsz.svg"
                    width={800}
                    height={800}
                    className="rounded-r-[4rem] md:relative left-[-1rem] image-same-height"
                  />
                </div>

                {/* LEFT-COLUMN --COL-SPAN-5-- */}
                <div className={clsx("md:col-span-4 lg:col-span-3 col-span-1",
                  "mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12", // Adjusting margins based on breakpoints
                )}>
                  <ToedurQuestionCard questionText="Are You a University Student Abroad?" />
                  <ToedurQuestionCard questionText="Familiar with university application and visa process?" />
                  <ToedurQuestionCard questionText="Passionate About Mentoring?" />
                  <ToedurQuestionCard questionText="Work remotely with your native language" />

                  <button className="flex justify-start items-center bg-[#1360e2] text-white p-3 rounded-2xl gap-4 md:gap-[5rem] relative top-[3rem]">
                    <span>More Info</span>
                    <span>
                      <MdOutlineKeyboardDoubleArrowRight className="size-7" />
                    </span>
                  </button>
                </div>
              </div>

              {/* BORDER BOTTOM TAKES FULL COL SPAN 10/10 */}
              <MotionDiv
                className="col-span-10  h-[8px] my-10"
                style={{
                  // backgroundImage:"linear-gradient(to right, #000, #fff, #000)",
                  backgroundImage: `linear-gradient(to right, #EEA21B, ${theme.name === "light" ? "#fff" : "#000"
                    }, #1360e2)`,
                  backgroundSize: "200% 100%",
                  animation: "slide 2s linear infinite",
                }}
              ></MotionDiv>
            </section>

            {/* ................................................................................................................................................................. */}

            {/* FOURTH SECTION */}
            <section
              // GRID OF 10/10
              className={clsx(
                "grid grid-cols-10 items-start gap-4 poppins-regular my-[1rem]",
                theme.name === "blue" ? "whenThemeIsBlue" : "inherit",
                // isLessThanCustomBreakpointPartTwo ? "mx-[1.9rem]" : ""
              )}
            >
              {/* COL SPAN 10/10 WITH A CHILD GRID 10/10 */}
              <div className="col-span-10 grid grid-cols-10 justify-center items-center mx-[1rem] md:mx-[3rem] my-4">
                {/* HOW TOEDUR WORKS COL-SPAN 5 */}
                <div className="col-span-5">
                  <span className="text-[48px] font-extrabold">
                    {/* How <span className="text-[#1360E2]">Toedur</span> Works */}
                  </span>
                </div>

                {/* JOIN OUR TOEDUR COM. COL-SPAN 5 */}
                <div
                  className={clsx(
                    "col-span-10 lg:col-span-5 flex justify-end",
                    theme.name === "dark" ? "text-[#ffffff]" : "inherit"
                  )}
                >
                  <span className="text-[30px] md:text-[42px] lg:text-[48px] font-extrabold">
                    What Students Say About{" "}
                    <span className="text-[#1360E2]">Toedur</span>
                  </span>
                </div>
              </div>

              {/* COL SPAN 10/10 WITH A CHILD GRID 10/10 */}
              <div className="col-span-10 grid grid-cols-10 justify-center items-center mx-[1rem] mb-10">
                {/* HOW TOEDUR WORKS COL-SPAN 5 */}
                <div className="col-span-5">
                  <span className="text-[48px] font-extrabold">
                    {/* How <span className="text-[#1360E2]">Toedur</span> Works */}
                  </span>
                </div>

                {/* WHAT STUDENT SAY CARDS COL-SPAN 10/10 */}
                <div className="col-span-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-9 gap-4">
                  <ToedurHorizontalScroll />
                </div>
              </div>

              {/* COL SPAN 10/10 WITH A CHILD GRID 10/10 */}
              <div className="col-span-10 grid grid-cols-1 lg:grid-cols-10 justify-center items-center ">
                {/* HOW TOEDUR WORKS COL-SPAN 5 */}
                <div className="lg:col-span-5 flex flex-col gap-5 justify-center items-center lg:justify-start lg:item mx-[.5rem] md:mx-[3rem] my-[4rem] md:gap-0">
                  <span className="text-[20px] md:text-[32px] lg:text-[48px] font-extrabold">
                    <span className="text-[#EEA21B] ml-auto mr-auto">Join our Community</span>
                  </span>
                  <div className="flex flex-col md:flex-row gap-4 ">
                    <div className="flex items-center justify-start gap-4 border-2 border-[#1360E2] p-3 rounded-lg cursor-pointer">
                      <span>
                        <IoLogoWhatsapp className="size-6 text-green-500" />
                      </span>
                      <span>Join our WhatsApp</span>
                    </div>

                    <div className="flex items-center justify-start gap-4 border-2 border-[#000] p-3 rounded-lg cursor-pointer">
                      <span>
                        <FaDiscord className="size-6" />
                      </span>
                      <span>Join our Discord</span>
                    </div>
                  </div>
                </div>

                {/* JOIN OUR TOEDUR COM. COL-SPAN 5 */}
                <div
                  className={clsx(
                    "lg:col-span-5 flex justify-center lg:justify-end",
                    theme.name === "dark" ? "text-[#ffffff]" : "inherit"
                  )}
                >
                  <Image
                    alt="photo"
                    src={"/footer-imageA.svg"}
                    width={200}
                    height={200}
                    className="rounded-r-[4rem] relative image-same-height"
                  />
                </div>
              </div>
            </section>

            {/* ................................................................................................................................................................. */}

            {/* FIFTH SECTION */}
            <Footer theme={theme} isLessThanCustomBreakpointPartTwo={isLessThanCustomBreakpointPartTwo} />

            {/* ................................................................................................................................................................. */}

          </main>
        </MotionDiv>
      )}
    </>
  );
};
