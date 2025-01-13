import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProject from "@/components/RecentProject";
import { FloatingNavbar } from "@/components/ui/FloatingNavbar";

export default function Home() {
  return (
    <div className="">
      <main className="relative bg-black-100 flex flex-col items-center justify-center overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <FloatingNavbar navItems={[
            {name:'Home', link: '/'}
          ]} />
          <Hero />
          <Grid />
          <RecentProject />
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
