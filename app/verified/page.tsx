"use client";

import TawkTo from "@/components/TawkTo";
import Story from "@/components/Story";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Faq from "@/components/Faq";
import Query_Card from "@/components/Query_Card";
import Trademark_Registration from "@/components/Trademark_Registration";
import StartupDocument from "@/components/StartupDocument";
import VerifiedServicescontent from "@/components/VerifiedServicescontent";
import LeadershipSlider from "@/components/LeadershipSlider";
import Navbar from "@/components/Navbar";
import Navbar_Section from "@/components/Navbar_Section";

export default function Verified() {
    return (
        <>
           
            <Navbar_Section />
            <Query_Card />
            <Trademark_Registration />
            <StartupDocument />
            <VerifiedServicescontent />
            <LeadershipSlider />

            {/* Optional */}
            {/* <Story /> */}

            <Testimonials />
            <ContactSection />
            <Faq />

            <TawkTo />
           
        </>
    );
}