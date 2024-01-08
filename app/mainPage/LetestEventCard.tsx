import React from "react";
import Link from "next/link";
interface ILetestEventCard {
  src: string;
  description: string;
}

const LetestEventCard = ({ description, src }: ILetestEventCard) => {
  return (
    <div className="w-1/2 relative m-4 shadow-2xl	">
      <Link href="google.com" className="hover:cursor-pointer  ">
        <img src={src} className=" rounded" />
        <p className="absolute top-1/2	left-0 text-white z-1 py-12	 px-5 w-8/12	 font-semibold		">
          {description}
        </p>
      </Link>
    </div>
  );
};

export default LetestEventCard;
