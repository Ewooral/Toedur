import React from 'react';

// Define the props interface
interface QuestionCardProps {
  questionText: string;
  className?: string;
}

const ToedurQuestionCard: React.FC<QuestionCardProps> = ({ questionText, className }) => {
  return (
    <div className="bg-white p-3 shadowA rounded-3xl w-fit relative left-0 md:left-[-14rem] top-[2rem] my-10">
      <p>{questionText}</p>
    </div>
  );
};

export default ToedurQuestionCard;