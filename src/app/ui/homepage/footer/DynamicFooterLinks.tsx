import { FooterSection } from "@/app/data";
import clsx from "clsx";
import Link from "next/link";

export interface DynamicFooterProps {
  sections: FooterSection[];
  className?: string
  classNameA?: string
}

// DynamicFooter Component
export const ToedurDynamicFooterLinks: React.FC<DynamicFooterProps> = ({ sections, className, classNameA }) => {
  return (
    <>
      {sections.map((section, index) => (
        <div
          key={index}
          className={clsx("flex flex-col gap-4 ",
            section.extraClasses || "",
            section.extraClasses?.includes("one") ? "col-span-10 md:col-span-10 lg:col-span-2 sm:items-start  items-center" 
            : section.extraClasses?.includes("two") ? "col-span-10 sm:col-span-4 md:col-span-4 lg:col-span-2   sm:items-start  items-center" 
            : section.extraClasses?.includes("three") ? "col-span-10 sm:col-span-3 md:col-span-4 lg:col-span-2  sm:items-start  items-center" 
            :"col-span-10 sm:col-span-3 md:col-span-2 lg:col-span-1  sm:items-start  items-center"
            ,
            // `col-span-${section.colSpan}`, 
            className)}
        >
          {section.links.map((link, linkIndex) => (
            <p
              key={linkIndex}
              className={
                section.extraClasses?.includes("font-bold")
                  ? "font-bold text-4xl"
                  : ""
              }
            >
              <Link href={link.href}>{link.name}</Link>
            </p>
          ))}
        </div>
      ))}
    </>
  );
};
