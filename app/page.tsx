"use client";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
// import Experience from "@/components/Experience";
import RecentProject from "@/components/RecentProject";
import Contact from "@/components/Contact";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import { FloatingNavbar } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <div className="">
      <main className="relative bg-black-100 flex flex-col items-center overflow-clip justify-center mx-auto">
        <div className="max-w-7xl w-full">
          <FloatingNavbar
            navItems={navItems}
            onLanguageChange={() => {}}
            currentLanguage="fr"
          />
          <Hero />
          <Grid />
          <RecentProject />
          <Approach />
          {/* <Experience /> */}
          <Contact />
          <Footer />
        </div>
      </main>
    </div>
  );
}
