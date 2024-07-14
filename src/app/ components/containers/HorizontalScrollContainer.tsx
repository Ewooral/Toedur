import React, { useRef, useState, useEffect } from "react"; // Import useEffect
import ToedurReviewCard from "../cards/ToedurReviewCard";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { cardData as initialCardData } from "@/app/data";
import { MotionDiv } from "../framer-motion/ImportFramerMotionOnce";
import { useMediaQuery } from "react-responsive";

const HorizontalScrollContainer = () => {
  const [cardData, setCardData] = useState(initialCardData);
  const SM = useMediaQuery({ maxWidth: 640 });
  const MD = useMediaQuery({ minWidth: 641, maxWidth: 768 });
  const LG = useMediaQuery({ minWidth: 769, maxWidth: 1024 });
  const XL = useMediaQuery({ minWidth: 1025});

  
  // Determine the number of cards to display based on screen size
  let visibleCardsCount;
  if (XL) visibleCardsCount = 3 // Show all cards on XL screens
  else if (LG) visibleCardsCount = 3; // Show 2 cards on LG and MD screens
  else if ( MD) visibleCardsCount = 2; // Show 2 cards on LG and MD screens
  else if (SM) visibleCardsCount = 1; // Show 1 card on SM screens

  // Slice the cardData array to only include the number of cards to display
  const visibleCards = cardData.slice(0, visibleCardsCount);


  const scroll = (direction: "forward" | "backward") => {
    if (direction === "forward") {
      const firstCard = cardData.shift();
      if (firstCard) {
        setCardData([...cardData, firstCard]);
      }
    } else {
      const lastCard = cardData.pop();
      if (lastCard) {
        setCardData([lastCard, ...cardData]);
      }
    }
  };

  // Automatically trigger the scroll forward effect every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      scroll("forward");
    }, 5000); // 5000 milliseconds = 5 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [cardData]); // Dependency array includes cardData to ensure the effect uses the latest state

  const variants = {
    enter: (direction: "forward" | "backward") => ({
      x: direction === "forward" ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: "forward" | "backward") => ({
      zIndex: 0,
      x: direction === "forward" ? -1000 : 1000,
      opacity: 0,
    }),
  };

  const cards = visibleCards.map((card, index) => (
    <MotionDiv
      key={index}
      custom={scroll}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
    >
      <ToedurReviewCard
        imgSrc={card.imgSrc}
        imgAlt={card.imgAlt}
        name={card.name}
        rating={card.rating}
        reviewText={card.reviewText}
        articleText={card.articleText}
      />
    </MotionDiv>
  ));

  return (
    <div className="xl:col-span-9 col-span-5 flex items-center gap-2 md:gap-4">
    {!SM && (
      <button
        onClick={() => scroll("backward")}
        className="text-[#EEA21B] border-2 border-[#EEA21B] p-1 lg:p-3 bg-[#fff] rounded-full"
      >
        <MdArrowBackIos className="size-5" />
      </button>
    )}
    <div
      className="flex overflow-x-auto scroll-smooth scrollbar-hide"
      style={{ scrollBehavior: "smooth" }}
    >
      {cards}
    </div>
    {!SM && (
      <button
        onClick={() => scroll("forward")}
        className="text-[#fff] bg-[#EEA21B] border-2 border-[#EEA21B] p-1 lg:p-3 rounded-full"
      >
       <MdArrowForwardIos className="size-5" />
      </button>
    )}
  </div>
  );
};

export default HorizontalScrollContainer;