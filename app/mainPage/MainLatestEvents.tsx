import React from "react";
import LetestEventCard from "./LetestEventCard";
interface LatestModel {
  src: string;
  description: string;
}
const MainLatestEvents = () => {
  const mock: LatestModel[] = [
    {
      src: "adventure_pic2.png",
      description: ` Brimming with natural treasures, the Golden State has the perfect
          adventure for you: beachfront backpacking, Death Valley cycling,
          snowshoe touring and so much more!`,
    },
    {
      src: "adventure_pic.png",
      description: ` Brimming with natural treasures, the Golden State has the perfect
          adventure for you: beachfront backpacking, Death Valley cycling,
          snowshoe touring and so much more!`,
    },
  ];

  return (
    <div className="flex flex-row	justify-center	items-center	">
      {mock.map((item, key) => {
        return (
          <LetestEventCard
            src={item.src}
            description={item.description}
            key={key}
          />
        );
      })}
    </div>
  );
};

export default MainLatestEvents;
