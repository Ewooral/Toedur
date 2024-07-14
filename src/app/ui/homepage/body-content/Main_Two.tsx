import React from "react";

export const Main_Two = (props: HomePageProps) => {
  return (
    <main className="grid grid-cols-10 items-start font-extrabold text-blue-500 mx-[6rem]">
      <div className="col-span-6 text-2xl">
      <span>Welcome to TOEDUR </span> 
      <span>find your edur,</span> 
       <span>find your friend,</span> 
       <span>find your advisor</span>
      </div>
      <div className="col-span-4">This is the content for home page version {props.id}</div>
    </main>
  );
};
