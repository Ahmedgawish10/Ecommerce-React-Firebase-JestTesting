import { useState } from "react";
import Products from "../pages/Products"
import Categories from "../pages/Categories";
import MainHero from "./common/hero/MainHero";
import { useTheme } from "@mui/material";

const Home = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <div className={`home !relative ${isDarkMode ? "bg-[#111827]" : "bg-white"} `} >
      <MainHero />

      <div className={`homeContainer   container mx-auto px-3   !overflow-auto `}>
        <div className="products">
          <h2 className="pb-12 text-2xl font-semibold" id="products">Explore Our Products</h2>
          <Products />
        </div>
        <div className="categories pt-[60px]">
          <h2 className="pb-6 text-2xl font-semibold" id="products">Top Categories</h2>
          <Categories />
        </div>

      </div>

    </div>
  );
};

export default Home;
