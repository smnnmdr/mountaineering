import React from "react";
import MainCardList from "./MainCardList";
import CategoryList from "./CategoryList";
import MainLatestEvents from "./MainLatestEvents";
const MainPage = () => {
  return (
    <>
      <section>
        <div className="flex flex-col">
          <img src="mainPage.png" alt="s" />
        </div>
        <div className="bg-neutral-200  relative">
          <MainCardList />
        </div>
      </section>
      <section className="bg-white	">
        <div
          style={{
            maxWidth: "1400px",
            width: "1400px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <h1>Top categories for you</h1>
          <CategoryList />
        </div>
      </section>
      <section className="bg-white	">
        <div>
          <h1>The latest Event's for you </h1>
        </div>
        <MainLatestEvents />
      </section>
    </>
  );
};

export default MainPage;
