import React from "react";
import Image from "next/image";
import { GrStar } from "react-icons/gr";

interface ReviewCardProps {
  imgSrc: string;
  imgAlt: string;
  name: string;
  rating: number;
  reviewText: string;
  articleText: string;
}

const ToedurReviewCard: React.FC<ReviewCardProps> = ({
  imgSrc,
  imgAlt,
  name,
  rating,
  reviewText,
  articleText,
}) => {
  return (
    <div className="col-span-3 flex flex-col my-4 gap-5 bg-white mx-4 shadowA rounded-t-3xl flex-wrap md:col-span-1 sm:col-span-1 sm:mx-2">
      <div className="flex flex-col xl:flex-row gap-5 p-4">
        <Image src={imgSrc} alt={imgAlt} width={150} height={100} className="rounded-xl w-full md:w-fit" />
        <div className="flex flex-col gap-2 justify-center">
          <h2 className="font-bold">{name}</h2>
          <span className="flex">
            {Array.from({ length: rating }, (_, index) => (
              <GrStar key={index} className="size-[1rem] text-[#EEA21B]" />
            ))}
          </span>
          <p>{reviewText}</p>
        </div>
      </div>
      <article className="bg-[#1360E2] p-4 text-white text-sm h-full">
        <span className="">{articleText}</span>
      </article>
    </div>
  );
};

export default ToedurReviewCard;
