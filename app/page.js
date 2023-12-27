import { Banner } from "./components/Banner/Banner";
import { CardsList } from "./components/CardsList/CardsList";
import { Promo } from "./components/Promo/Promo";

export default function Home() {
  return (
    <main className="main">
      <Banner />
      <CardsList id="popular" title="Популярные" />
      <CardsList id="new" title="Новинки" />
      <Promo />
    </main>
  );
}
