import React from "react";
import Link from "next/link";
interface ICategoryProps {
  imageSrc: string;
  categorytitle: string;
  href: string;
}
const CategoryCard = ({ imageSrc, categorytitle, href }: ICategoryProps) => {
  return (
    <Link
      href={href}
      className="col-span-4 sm:col-span-2 md:col-span-1 hover:shadow-xl"
    >
      <div className="bg-white p-4 shadow-md 	">
        <img
          src={imageSrc}
          alt="Product 1"
          className="w-full mb-4  h-44 object-contain	"
        />
        <h3 className="text-lg font-semibold">{categorytitle}</h3>
        <p className="text-gray-600">
          Product 1 description or additional information.
        </p>
      </div>
    </Link>
  );
};
export default CategoryCard;
