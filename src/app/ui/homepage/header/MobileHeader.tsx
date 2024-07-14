import { ToedurButton } from "@/app/ components/buttons/Button";
import { ToedurLanguageSelectorMobileVersion } from "@/app/ components/ToedurLangSelector";
import {
  MotionDiv,
} from "@/app/ components/framer-motion/ImportFramerMotionOnce";
import { useIsClient } from "@/app/hooks/useIsClient";
import useLocaleStore from "@/app/store/locale";


import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Bars3BottomLeftIcon,
  SunIcon,
} from "@heroicons/react/16/solid";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { useIntl, FormattedMessage } from "react-intl";
import { useMediaQuery } from "react-responsive";
import { useClickAway } from "react-use";
import { themeColors } from "@/app/data";

const iconVariants = {
  hidden: { scale: 1 },
  visible: { scale: [1, 1.3, 1], transition: { duration: 0.5 } },
};

const dropdownVariants = {
  hidden: { opacity: 0, y: "-10px" },
  visible: { opacity: 1, y: "0px", transition: { duration: 0.3 } },
};

export function MobileHeaderView() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sunDropdownOpen, setSunDropdownOpen] = useState(false);
  const { setTheme, theme } = useLocaleStore();
  const isClient = useIsClient();
  const [isAtTop, setIsAtTop] = useState(true);
  const pathname = usePathname();
  


  const [isScrolled, setIsScrolled] = useState(false);

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
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Bars3BottomLeftIcon className="size-7" />
      </SheetTrigger>
      {/*@ts-ignore */}
      <SheetContent>
        <SheetHeader>
          <SheetTitle style={{color: theme.colorCode}} className="flex justify-center">Toedur</SheetTitle>
          <SheetDescription style={{color: theme.colorCode}} className="flex flex-col items-center justify-start gap-4 text-white">
            <span className="">
              <Link href="/">Home</Link>
            </span>
            <span className="">
              <Link href="/edurs">Edurs</Link>
            </span>
            <span className="">
              <Link href="/podcast">Podcast</Link>
            </span>
            <span className="">
              <Link href="/language">Language</Link>
            </span>
            <span className="">
              <Link href="/about">About</Link>
            </span>
            <span className="">
              <Link href="/contact">Contact</Link>
            </span>

            <ToedurLanguageSelectorMobileVersion className="flex z-3 relative" />
            <ToedurButton className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-md">
              <FormattedMessage id="login" defaultMessage="Login" />
            </ToedurButton>
            <ToedurButton className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-md">
              <FormattedMessage id="join" defaultMessage="Join" />
            </ToedurButton>
            <ToedurButton className="relative">
              <MotionDiv
                variants={iconVariants}
                initial="hidden"
                animate={dropdownOpen ? "visible" : "hidden"}
                onClick={toggleDropdown}
              >
                <SunIcon
                  style={{ color: `${theme.colorCode}` }}
                  className="size-7  text-[#8f8e8e] hover:text-[black]"
                />
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
                    borderTop: `1px solid ${theme.borderColor}`,
                  }}
                  className="absolute top-[-.1rem] left-[3rem] p-2 w-[300%] shadow-lg z-40 border border-t-0"
                >
                  <ul>
                    {themeColors.map((color, index) => (
                      <li key={index}>
                        <span
                          className={clsx(
                            "block w-full text-left py-1 px-2 hover:bg-[#00000049] rounded"
                          )}
                          onClick={() => {
                            setTheme({
                              name: color.name,
                              bgCode: color.bgCode,
                              colorCode: color.colorCode,
                              bgPartialTransparency: color.bgPartialTransparency,
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
          </SheetDescription>
        </SheetHeader>
        <SheetDescription></SheetDescription>
      </SheetContent>
    </Sheet>
  );
}
