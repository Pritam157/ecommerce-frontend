import React from "react";
import MainCarousel from "../../HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../../HomeSectionCarousel/HomeSectionCarousel";
import { men_kurta } from "../../../../Data/Men/men_kurta";
import { men_jeans } from "../../../../Data/Men/men_jeans";
import { men_shirt } from "../../../../Data/Men/men_shirt";
import { women_dress } from "../../../../Data/Women/women_dress";
import { women_jeans } from "../../../../Data/Women/women_jeans";
import { women_top } from "../../../../Data/Women/women_top";

const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarousel data={men_kurta} sectionName={"Men's kurta"} redirect={"Men/Clothing/mens_kurta"} />
        <HomeSectionCarousel data={men_jeans} sectionName={"Men's Jeans"} redirect={"Men/Clothing/men_jeans"} />
        <HomeSectionCarousel data={men_shirt} sectionName={"Men's Shirt"} redirect={"Men/Clothing/shirt"} />
        <HomeSectionCarousel data={women_top} sectionName={"Women's Top"} redirect={"Women/Clothing/top"} />
        <HomeSectionCarousel data={women_dress} sectionName={"Women's Dress"} redirect={"Women/Clothing/women_dress"} />
        <HomeSectionCarousel data={women_jeans} sectionName={"Women's Jeans"} redirect={"Women/Clothing/women_jeans"} />
      </div>
    </div>
  );
};

export default HomePage;
