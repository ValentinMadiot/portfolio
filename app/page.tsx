import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import Process from "@/components/Process";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <>
      <Hero />
      <Grid />
      <RecentProjects />
      {/* <Experience /> */}
      <Process />
    </>
  );
}
