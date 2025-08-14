// import Experience from "@/components/Experience";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Process from "@/components/Process";
import RecentProjects from "@/components/RecentProjects";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto">
      <Navbar />
      <Hero />
      <Grid />
      <RecentProjects />
      {/* <Experience /> */}
      <Process />
    </div>
  );
}
