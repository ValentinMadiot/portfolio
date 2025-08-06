import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import RecentProjects from "@/components/RecentProjects";
// import Experience from "@/components/Experience";

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
