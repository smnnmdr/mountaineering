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
        <div className="mx-auto max-w-screen-xl">
          <h1>Top categories for you</h1>
          <CategoryList />
        </div>
      </section>
      <section className="bg-white	">
        <div className="mx-auto max-w-screen-xl">
          <h1>The latest Event's for you </h1>
          <MainLatestEvents />
        </div>
      </section>
    </>
  );
};

export default MainPage;
