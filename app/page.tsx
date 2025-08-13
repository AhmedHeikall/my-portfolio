import Experience from "@/components/experience/Experience";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import RecentProjects from "@/components/recentProjects/RecentProjects";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl  w-full">
        <Hero />
        <Experience />
        <RecentProjects />
        <Footer />
      </div>
    </main>
  );
}
