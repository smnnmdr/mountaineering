import React from "react";
import MainCardList from "./MainCardList";
import CategoryList from "./CategoryList";

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
    </>
  );
};

export default MainPage;
