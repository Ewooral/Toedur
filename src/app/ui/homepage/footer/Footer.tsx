import Link from "next/link";
import React from "react";
import SupportInfo from "./SupportInfo";
import FooterForm from "./FooterForm";
import { Theme } from "@/app/store/locale";
import clsx from "clsx";
import { footerSections } from "@/app/data";
import { ToedurDynamicFooterLinks } from "./DynamicFooterLinks";
import { GoArrowUpRight } from "react-icons/go";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import SubscriptionConnectWithUsAndEmailComponent from "./SubscriptionAndConnectWithUsComponent";
// import { CldImage } from "next-cloudinary";

interface FooterTypeProps {
  theme: Theme;
  isLessThanCustomBreakpointPartTwo: boolean;
}

const Footer: React.FC<FooterTypeProps> = ({
  theme,
}) => {
  return (
    <section
      // GRID OF 10/10
      className={clsx(
        "grid grid-cols-10 items-start gap-4 poppins-regular bg-black",
        theme.name === "blue" ? "whenThemeIsBlue" : "inherit",
      )}
    >
      {/* BORDER */}
      <div className="col-span-10 my-4"></div>

      {/* FOOTER FORM */}
      <div className="col-span-10 lg:col-span-5 md:p-[2rem] rounded-lg text-white  mx-[1rem] md:mx-[3rem]">
        <FooterForm />
      </div>

      {/* JOIN OUR TOEDUR COM. COL-SPAN 5 */}
      <div
        className={clsx(
          "col-span-10  md:col-span-8 lg:col-span-5  bg-[#474f5c] p-4 md:p-[2rem] rounded-lg text-white mx-[1rem]  md:mx-[5rem] lg:mx-[3rem] my-8"
        )}
      >
        <SupportInfo />
      </div>

      <div className="col-span-10 my-10 text-white"></div>

      <div className="col-span-10 grid grid-cols-10 text-white gap-10  mx-[1rem] md:mx-[3rem]">
        <ToedurDynamicFooterLinks sections={footerSections} />
        <SubscriptionConnectWithUsAndEmailComponent email="info@teodur.com" />
      </div>
      {/* FOOTER LINKS */}

      <div className="col-span-10 my-7"></div>
      <div className="col-span-10  text-white  border-t "></div>

      <div className="col-span-10 my-7 text-white text-center text-sm flex justify-center">
        {" "}
        ©2024 Toedur Co., Ltd. All Rights Reserved.
      </div>
      
    </section>
  );
};

export default Footer;
