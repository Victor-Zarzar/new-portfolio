import Skills from "@/app/entities/skills-component/skills";
import Header from "@/app/widgets/header/header-layout";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <Skills />
    </main>
  );
}
