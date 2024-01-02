import React from "react";
interface ICategoryProps {
  imageSrc: string;
  categorytitle: string;
}
const CategoryList = ({ imageSrc, categorytitle }: ICategoryProps) => {
  const categoryListData: ICategoryProps[] = [
    { imageSrc: "download (1)", categorytitle: "string" },
    { imageSrc: "download (2)", categorytitle: "string" },
    { imageSrc: "download (3)", categorytitle: "string" },
    { imageSrc: "download (4)", categorytitle: "string" },
    { imageSrc: "download (5)", categorytitle: "string" },
    { imageSrc: "download (6)", categorytitle: "string" },
    { imageSrc: "download (7)", categorytitle: "string" },
    { imageSrc: "download (8)", categorytitle: "string" },
  ];

  return (
    <div>
      {categoryListData.map(res=>)}
      <img src={imageSrc} />
      <p>{categorytitle}</p>
    </div>
  );
};

export default CategoryList;
