"use client";
import { useClickAway } from "react-use";
import { ToedurButton } from "@/app/ components/buttons/Button";
import { GiSunglasses } from "react-icons/gi";
import { ImSun } from "react-icons/im";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  EllipsisVerticalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import clsx from "clsx";
// import variables from "@/app/styles/variables.module.scss";
import { FormattedMessage, useIntl } from "react-intl";
import { ToedurLanguageSelector } from "@/app/ components/ToedurLangSelector";
import useLocaleStore, { Theme } from "@/app/store/locale";
import { themeColors } from "@/app/data";
import {
  AnimatePresenceComponent,
  MotionDiv,
} from "@/app/ components/framer-motion/ImportFramerMotionOnce";
import variables from "@/app/styles/variables.module.scss";
import { useMediaQuery } from "react-responsive";
import { useIsClient } from "@/app/hooks/useIsClient";
import { usePathname } from "next/navigation";
import { MobileHeaderView } from "./MobileHeader";

const iconVariants = {
  hidden: { scale: 1 },
  visible: { scale: [1, 1.3, 1], transition: { duration: 0.5 } },
};

const dropdownVariants = {
  hidden: { opacity: 0, y: "-10px" },
  visible: { opacity: 1, y: "0px", transition: { duration: 0.3 } },
};
export const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sunDropdownOpen, setSunDropdownOpen] = useState(false);
  const { setTheme, theme } = useLocaleStore();
  const isClient = useIsClient();
  const [isAtTop, setIsAtTop] = useState(true);
  const pathname = usePathname();
  const [showSearchIcon, setShowSearchIcon] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  // SEARCH ELEMENT SCREEN WIDTH
  const SM = useMediaQuery({ maxWidth: 640 });
  const MD = useMediaQuery({ minWidth: 641, maxWidth: 768 });
  const LG = useMediaQuery({ minWidth: 769, maxWidth: 1024 });
  const XL = useMediaQuery({ minWidth: 1025, maxWidth: 1280 });
  const XXL = useMediaQuery({ minWidth: 1281 });

  useEffect(() => {
    const onScroll = () => {
      const newIsScrolled = window.scrollY > window.innerHeight * 0.5;
      if (newIsScrolled !== isScrolled) {
        setIsScrolled(newIsScrolled);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isScrolled]);

  const isLessThanXl = useMediaQuery({ maxWidth: 1407 });
  const isLessThanCustomBreakpoint = useMediaQuery({
    maxWidth: 767,
    // maxHeight: 938,
  });
  const isGreaterThanCustomBreakpoint = useMediaQuery({
    minWidth: 1407,
    // minHeight: 896,
  });

  const ref = useRef(null);
  useClickAway(ref, () => {
    setDropdownOpen(false);
  });
  const [isHovered, setIsHovered] = useState(false);
  const intl = useIntl();

  const menuObject = [
    { id: "home", defaultMessage: "Home", href: "/" },
    { id: "edurs", defaultMessage: "Edurs", href: "/edurs" },
    { id: "language", defaultMessage: "Language", href: "/language" },
    { id: "podcast", defaultMessage: "Podcast", href: "/podcast" },
    { id: "about_us", defaultMessage: "About Us", href: "/about" },
    { id: "contact_us", defaultMessage: "Contact Us", href: "/contact" },
  ].map(({ id, defaultMessage, href }) => ({
    name: intl.formatMessage({ id, defaultMessage }),
    link: href || "#",
  }));

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  const searchRef = useRef(null);

  const handleShowSearchIcon = () => {
    setShowSearchIcon((prevState) => !prevState);
  };

  const magnifyingGlassRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event: { target: any }) {
      if (
        searchRef.current &&
        !(searchRef.current as HTMLElement).contains(event.target) &&
        magnifyingGlassRef.current &&
        !(magnifyingGlassRef.current as HTMLElement).contains(event.target)
      ) {
        setShowSearchIcon(false);
      }
    }

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchRef, magnifyingGlassRef]);

  return (
    <>
      {isClient && (
        <header
          style={{
            background: isScrolled ? `${theme.bgCode}` : `${theme.bgCode}`,
            color: `${theme.colorCode}`,
            borderBottom: isScrolled ? `1px solid ${theme.borderColor}` : "none",
          }}
          className={`${isScrolled ? "fixed fadeIn top-0 z-50 w-full" : ""} 
          ${isAtTop ? "" : "fadeIn"} shadow-md py-4 inter-font
          poppins-semibold
          `}
        >
          <div
            className={clsx(
              "flex justify-between items-center relative",
              isLessThanCustomBreakpoint ? "mx-[1rem]" : "mx-[3rem]"
            )}
          >
            <div className="font-bold">
              <Link href="/" className="flex justify-center items-center gap-4">
                <Image
                  src="/logoMain.svg"
                  alt="Toedur"
                  className="relative"
                  width={40}
                  height={40}
                />
                <h1
                // style={{ color: variables.secondaryColor }}
                className="poppins-semibold"
                >
                  <FormattedMessage id="toedur" defaultMessage="Toedur" />
                </h1>
              </Link>
            </div>
            {isGreaterThanCustomBreakpoint && (
              <nav className="flex  space-x-10 ">
                {menuObject.map((item, index) =>
                    <Link
                      key={index}
                      href={item.link}
                      style={{
                        color:
                          pathname === item.link 
                            ? theme.activeMenuColor
                            : "#9BA1AB",
                        borderBottom:
                          pathname === item.link
                            ? `1px solid ${theme.activeMenuColor}`
                            : "none",
                      }}
                      className={clsx(
                        "flex justify-center items-center text-[#9BA1AB] font-bold",
                        "hover:text-blue-500 hover:font-bold"
                      )}
                    >
                      {item.name}
                    </Link>

                )}
              </nav>
            )}
            <div className="flex space-x-4 relative text-xs">
              {/* SEARCH BUTTON */}
              <ToedurButton
                // style={{color: variables.secondaryColor}}

                style={{ color: `${theme.colorCode}` }}
                className={clsx("text-black", variables.getDeepBlueColor)}
                onClick={handleShowSearchIcon}
              >
                <MagnifyingGlassIcon
                  ref={magnifyingGlassRef}
                  className="size-5"
                />
              </ToedurButton>

              {/* SEARCH INPUT */}
              <AnimatePresenceComponent>
                {showSearchIcon && (
                  <>
                    <MotionDiv
                      className="fixed inset-0 bg-black z-40"
                      initial={{ opacity: 0 }} // start fully transparent
                      animate={{ opacity: 0.7 }} // animate to half transparent
                      exit={{ opacity: 0 }} // exit to fully transparent
                      transition={{ duration: 0.5 }} // duration of the animation
                      style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
                    >
                      {null}
                    </MotionDiv>

                    <MotionDiv
                      className={clsx(
                        "flex items-center justify-center z-50 shadow-lg rounded-lg p-2 gap-3",
                        "fixed top-[20%] transform -translate-x-1/2 -translate-y-1/2", // added these classes to center the div
                        theme.name === "light" &&
                          ` text-white border-2 border-[#ffffff]`,
                        theme.name === "dark" &&
                          ` text-white border-2 border-[#ffffff]`,
                        // theme.name === "blue" &&
                        //   ` text-white border-2 border-[#ffffff]`,
                        SM && "w-[90%] left-[2%]",
                        MD && "w-[80%] left-[10%]",
                        LG && "w-[70%] left-[15%]",
                        XL && "w-[60%] left-[20%]",
                        XXL && "w-[50%] left-[25%]"
                      )}
                      initial={{ opacity: 0, y: 50 }} // start from a position 50px below and fully transparent
                      animate={{ opacity: 1, y: 0 }} // animate to the original position and fully visible
                      exit={{ opacity: 0, y: -50 }} // exit to a position 50px above and fully transparent
                      transition={{ duration: 0.5 }} // duration of the animation
                    >
                      <div className="p-1">
                        <MagnifyingGlassIcon className="size-7" />
                      </div>
                      <input
                        type="text"
                        placeholder="Search"
                        className={clsx(
                          "w-full h-full text-sm placeholder-gray-500 border-0 rounded-lg focus:outline-none bg-white p-2 text-black"
                        )}
                        ref={searchRef}
                      />
                      <ToedurButton
                        onClick={() => console.log("Yeeeee!!!")}
                        className="bg-blue-500 p-3 shadow-lg rounded-lg"
                        type="submit"
                      >
                        search
                      </ToedurButton>
                    </MotionDiv>
                  </>
                )}
              </AnimatePresenceComponent>
              {!isLessThanCustomBreakpoint && (
                <>
                  <ToedurButton>
                    <MotionDiv
                      variants={iconVariants}
                      initial="hidden"
                      animate={dropdownOpen ? "visible" : "hidden"} 
                      onClick={toggleDropdown}
                      className="ml-2"
                    >
                      {theme.name === "light" && (
                        <ImSun className="size-4  text-[#050505] hover:text-[#747373]" />
                      )}

                      {theme.name === "dark" && (
                        <BsFillMoonStarsFill className="size-4  text-[#dad9d9] hover:text-[#e4ff4c]" />
                      )}

                      {theme.name === "blue" && (
                        <GiSunglasses className="size-9  text-[#ffffff] hover:text-[black]" />
                      )}
                    </MotionDiv>
                    {dropdownOpen && (
                      <MotionDiv
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        style={{
                          background: `${theme.bgCode}`,
                          borderLeft: `1px solid ${theme.borderColor}`,
                          borderBottom: `1px solid ${theme.borderColor}`,
                          borderRight: `1px solid ${theme.borderColor}`,
                        }}
                        className={clsx(
                          "absolute top-[3.1rem]  left-[1.9rem] p-1  w-[17%] shadow-lg z-40 border border-t-0 ",
                          theme.name === "light" && "text-black",
                          theme.name === "dark" && "text-white",
                          theme.name === "blue" && "text-white"
                        )}
                      >
                        <ul>
                          {themeColors.map((color, index) => (
                            <li key={index}>
                              <span
                                className={clsx(
                                  "block w-full text-left py-1 px-2  hover:bg-[#00000049] rounded"
                                )}
                                onClick={() => {
                                  setTheme({
                                    name: color.name,
                                    bgCode: color.bgCode,
                                    colorCode: color.colorCode,
                                    bgPartialTransparency:
                                      color.bgPartialTransparency,
                                    borderColor: color.borderColor,
                                    activeMenuColor: color.activeMenuColor,
                                  });
                                  setDropdownOpen(false);
                                }}
                              >
                                {color.name}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </MotionDiv>
                    )}
                  </ToedurButton>

                  <ToedurLanguageSelector className="z-3 relative" />
                  <ToedurButton className="bg-[white] hover:text-[#1360e2] text-[#81a8e9] font-bold py-2 px-4 border-2 border-[#81a8e9] rounded-md">
                    <FormattedMessage id="login" defaultMessage="Login" />
                  </ToedurButton>
                  <ToedurButton className="bg-[#1360e2] hover:bg-blue-800 hover:border-blue-800 text-white font-bold py-2 px-4 rounded-md border-2 border-[#1360e2]">
                    <FormattedMessage id="join" defaultMessage="Join" />
                  </ToedurButton>
                </>
              )}
              {/* <ToedurButton>
                <EllipsisVerticalIcon className="size-7" />
              </ToedurButton> */}
              {isLessThanXl && (
                <ToedurButton>
                  <MobileHeaderView />
                </ToedurButton>
              )}
            </div>
          </div>
        </header>
      )}
    </>
  );
};
