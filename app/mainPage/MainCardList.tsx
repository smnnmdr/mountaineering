import React from "react";
import Card from "./Card";
const MainCardList = () => {
  //Todo => Mock
  const cardListRes = [
    {
      image: "clothing.png",
      title: "clothings",
      description:
        "Refresh your closet with deals on women’s, men’s and kids’ favorites.",
      src: "/clothing",
    },
    {
      image: "running_shoes.png",
      title: "running_shoes",
      description: "Two smiling people in cold-weather shoes",
      src: "/running",
    },
    {
      image: "camp_deals.png",
      title: "camp_deals",
      description: "thre  deals on women’s, men’ cold-weather clothing",
      src: "/campdeals",
    },
  ];
  //----------------------

  return (
    <div className="flex justify-center  ">
      {cardListRes.map((res) => {
        return <Card data={res} />;
      })}
    </div>
  );
};

export default MainCardList;
