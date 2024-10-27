import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { AdventGrid } from "../components/AdventGrid";
import classes from "../style/page.module.css";

export default function Home() {
  return (
    <div className={classes.root}>
      <main>
        <Header />
        <Hero />
        <AdventGrid />
      </main>
    </div>
  );
}
