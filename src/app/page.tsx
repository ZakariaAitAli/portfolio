import PageHeader from "@/components/page-header";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import NavBar from "@/components/navbar";
import { Timeline } from "@/components/timeline";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-4">
      <NavBar />
      <PageHeader
        title="Welcome to My Portfolio"
        subtitle="Showcasing my DevOps projects and skills"
      />
      <div className="container mx-auto px-4 py-8">
        <Skills />
        <Timeline />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
