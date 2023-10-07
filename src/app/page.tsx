import HeroHome from "@/components/HeroHome";
import styles from "./page.module.css";
import BarHomeCompany from "@/components/BarHomeCompany";
import WeOffer from "@/components/WeOffer";
import ChooseUs from "@/components/ChooseUs";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroHome></HeroHome>
      <BarHomeCompany></BarHomeCompany>
      <WeOffer></WeOffer>
      <ChooseUs></ChooseUs>
    </main>
  );
}
