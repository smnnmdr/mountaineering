import React from "react";
import CategoryCard from "./CategoryCard";
interface ICategoryProps {
  imageSrc: string;
  categorytitle: string;
  href: string;
}
const CategoryList = ({ imageSrc, categorytitle }: ICategoryProps) => {
  const categoryListData: ICategoryProps[] = [
    {
      imageSrc: "a_1.png",
      categorytitle: "Mountaineering Gear",
      href: "/product",
    },
    {
      imageSrc: "a2.png",
      categorytitle: "Mountain Bike Helmets",
      href: "/product",
    },
    {
      imageSrc: "a3.png",
      categorytitle: "Men's Climbing Shoes",
      href: "/product",
    },
    {
      imageSrc: "a4.png",
      categorytitle: "Men's Running Vests",
      href: "/product",
    },
    {
      imageSrc: "a5.png",
      categorytitle: "Men's Road-Running Shoes",
      href: "/product",
    },
    {
      imageSrc: "a6.png",
      categorytitle: "Mountain Bike Helmets",
      href: "/product",
    },
    {
      imageSrc: "a7.png",
      categorytitle: "Running Water Bottles",
      href: "/product",
    },
    { imageSrc: "a8.png", categorytitle: "Adventures", href: "/product" },
  ];

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-4 gap-4 ">
        {categoryListData.map((res) => {
          return (
            <CategoryCard
              categorytitle={res.categorytitle}
              imageSrc={res.imageSrc}
              href={res.href}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CategoryList;
