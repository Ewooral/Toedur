import { useState } from "react";
import useLocaleStore from "../store/locale";
import Image from "next/image";
import { ToedurButton } from "./buttons/Button";
import { MotionDiv } from "./framer-motion/ImportFramerMotionOnce";
import React from "react";

type ToedurLanguageSelectorProps = {
  className?: string;
};

export function ToedurLanguageSelectorMobileVersion({className}: ToedurLanguageSelectorProps) {
  const { locale, setLocale, theme } = useLocaleStore();
  const [isOpen, setIsOpen] = useState(false);

  const handleLocaleChange = (newLocale: string) => {
    setLocale(newLocale);
    setIsOpen(false); // Close the dropdown after selection
  };

  const dropdownItems = [
    {
      label: "en",
      value: "en",
      img: "https://res.cloudinary.com/eganow/image/upload/v1640022623/Flags/GB0044.png",
    },
    {
      label: "fr",
      value: "fr",
      img: "https://res.cloudinary.com/eganow/image/upload/v1640022623/Flags/FR0033.png",
    },
    {
      label: "es",
      value: "es",
      img: "https://www.countryflags.com/wp-content/uploads/spain-flag-png-large.png",
    },
    {
      label: "de",
      value: "de",
      img: "https://www.countryflags.com/wp-content/uploads/germany-flag-png-large.png",
    },
  ];

  const currentItem = dropdownItems.find((item) => item.value === locale);

  return (
    <ToedurButton className={className}>
      <MotionDiv
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer flex items-center px-4 py-2 rounded-md border border-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {currentItem ? (
          <>
            <Image
              src={currentItem.img}
              alt={locale}
              width={30}
              height={20}
              style={{ marginRight: "10px" }}
            />
            {currentItem.label}
          </>
        ) : (
          "Select Language"
        )}
      </MotionDiv>
      {isOpen && (
        <MotionDiv
          style={{
            background: `${theme.bgCode}`,
            borderLeft: `1px solid ${theme.borderColor}`,
            borderBottom: `1px solid ${theme.borderColor}`,
            borderRight: `1px solid ${theme.borderColor}`,
          }}
          className="absolute top-full  left-[92px] w-full mt-4 z-10 p-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ul className="">
            {dropdownItems.map((item, index) => (
              <li
                key={index}
                className="flex cursor-pointer hover:bg-[#00000036] p-2 rounded-md"
                onClick={() => handleLocaleChange(item.value)}
              >
                <Image
                  src={item.img}
                  alt="flag"
                  width={20}
                  height={0}
                  style={{ marginRight: "10px" }}
                  className="w-auto h-auto"
                />
                {item.label}
              </li>
            ))}
          </ul>
        </MotionDiv>
      )}
    </ToedurButton>
  );
}
