import React from "react";

const MainFooter = () => {
  return (
    <div className="mx-auto max-w-screen-xl">
      <div className="flex flex-row	justify-center	items-center">
        <div className="w-1/2 relative m-4 ">
          <ul>
            <li>Camp & Hike</li>
            <li>Climb</li>
            <li>Cycle</li>
            <li>Water</li>
          </ul>
        </div>
        <div className="w-1/2 relative m-4 ">
          <ul>
            <li>Run</li>
            <li>Fitness</li>
            <li>Snow</li>
            <li>Travel</li>
          </ul>
        </div>
        <div className="w-1/2 relative m-4 ">
          <h1>Contact</h1>
          <ul>
            <li>Contact us</li>
            <li>About us</li>
            <li>Kids</li>
            <li>asd</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
