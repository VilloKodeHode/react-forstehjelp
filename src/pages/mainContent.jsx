import { useState } from "react";
import "./mainContent.css"
import { HeroSection } from "../components/mainContent/mainContentSections/heroSection";
import { NumberSection } from "../components/mainContent/mainContentSections/numberSection";
import { PageLayout } from "../components/Layout/Layout";
import { Responsiveparagraph } from "../components/Layout/Typography";

export const MainContent = ({ navText }) => {

    return (
        <PageLayout>
        <main>
            <HeroSection />
            <NumberSection navText={navText} />
            <Responsiveparagraph>Hei</Responsiveparagraph>
        </main>
        </PageLayout>
    )
}


