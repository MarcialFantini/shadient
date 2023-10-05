import HeroHome from "@/components/HeroHome";
import styles from "./page.module.css";
import BarHomeCompany from "@/components/BarHomeCompany";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroHome></HeroHome>
      <BarHomeCompany></BarHomeCompany>
    </main>
  );
}
