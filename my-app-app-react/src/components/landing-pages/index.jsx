import React from "react";
import { Navbar } from "./components/navbar";
import { HeroSection } from "./components/heroSection";
import { FeaturedSection } from "./components/featuredSection";
import { ChooseUs } from "./components/chooseus";
import { CategoriesSection } from "./components/categoriesSection";
import { TestimonSection } from "./components/testimoniSection";
import { Footers } from "./components/footers";

export default function LandingPages() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ChooseUs />
      <FeaturedSection />
      <CategoriesSection />
      <TestimonSection />
      <Footers />
    </div>
  );
}