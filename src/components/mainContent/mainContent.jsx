import { useState } from "react";
import "./mainContent.css"
import { HeroSection } from "./mainContentSections/heroSection";
import { NumberSection } from "./mainContentSections/numberSection";

export const MainContent = ({ navText }) => {

    return (
        <main>
            <HeroSection />
            <NumberSection navText={navText} />
        </main>
    )
}


