import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import RecentProject from "@/components/RecentProject";
import { FloatingNavbar } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="">
      <main className="relative bg-black-100 flex flex-col items-center justify-center overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <FloatingNavbar navItems={navItems}/>
          <Hero />
          <Grid />
          <RecentProject />
          <Experience />
          <Contact />
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
