import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { AdventGrid } from "./components/AdventGrid";

export default function Home() {
  return (
    <div>
      <main>
        <Header />
        <Hero />
        <AdventGrid />
      </main>
    </div>
  );
}
