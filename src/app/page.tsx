import { Hero } from "../components/Hero";
import { AdventGrid } from "../components/AdventGrid";
import classes from "../style/page.module.css";

export default function Home() {
  return (
    <main>
      <Hero />
      <AdventGrid />
    </main>
  );
}
