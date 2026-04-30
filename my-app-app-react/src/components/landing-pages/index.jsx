import React from "react";

import { Navbar } from "./components/navbar"
import { HeroSection } from "./components/heroSection"
import { FeaturedSection } from "./components/featuredSection"
import { ChooseUs } from "./components/chooseus"

export default function LandingPages() {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <ChooseUs />
            <FeaturedSection />
        </div>
    )
}