import React from "react";
import clsx from "clsx";

// Define the props interface
interface StepIndicatorProps {
  stepNumber: number;
  stepTitle: string;
  description: string;
  color?: string; // Optional prop to customize color
  borderColor?: string;
  classNameStepTitle?: string;
  classNameDescription?: string;
  classNameBackgroundColor?: string;
}

const HowToedurWorksCard: React.FC<StepIndicatorProps> = ({
  stepNumber,
  stepTitle,
  description,
  color = "#EEA21B", // Default color
  borderColor = "#3480FF", // Default color
  classNameStepTitle,
  classNameDescription = "text-[gray]",
  classNameBackgroundColor = "#fff"
}) => {
  return (
    <div
     className="col-span-full sm:col-span-6 md:col-span-4 lg:col-span-3 flex flex-col gap-7 border-2 p-5 rounded-3xl flex-wrap w-full sm:w-3/4 md:w-[80%] mx-auto"
      style={{ borderColor: borderColor,  background: classNameBackgroundColor}}
    >
      <p className="flex items-center gap-3">
        <span style={{ color }} className="font-extrabold">
          Step {stepNumber}:{" "}
        </span>
        <span
          style={{ color: classNameStepTitle }}
          className={clsx("font-extrabold")}
        >
          {stepTitle}
        </span>
      </p>
      <p
        style={{ color: classNameDescription }}
        className={clsx("text-sm")}
      >
        {description}
      </p>
    </div>
  );
};

export default HowToedurWorksCard;
