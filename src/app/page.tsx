import PageHeader from "@/components/page-header";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-4">
      <PageHeader title="Welcome to My Portfolio" subtitle="Showcasing my DevOps projects and skills" />
      <div className="container mx-auto px-4 py-8">
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
