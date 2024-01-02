import React from "react";
import Link from "next/link";

interface IProps {
  data: { image: string; title: string; description: string; src: string };
}
const Card = ({ data: { image, title, description, src } }: IProps) => {
  return (
    <article className="w-1/4 p-2 border-solid border-2 rounded-xl m-4  -top-20 relative  bg-slate-50">
      <div>
        <img src={image} />
      </div>
      <div className="m-2">
        <Link
          href={src}
          className="text-4xl text-rose-500	capitalize hover:underline	"
        >
          {title}
        </Link>
        <div className="my-4 text-stone-500	text-lg">{description}</div>
      </div>
    </article>
  );
};

export default Card;
