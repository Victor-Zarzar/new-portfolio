import Skills from "@/app/shared/ui/icons/skills/skills";
import Header from "@/app/widgets/header/header-layout";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <Header />
      <Skills />
    </main>
  );
}
