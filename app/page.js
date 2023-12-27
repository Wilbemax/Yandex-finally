import { Banner } from "./components/Banner/Banner";
import { CardsList } from "./components/CardsList/CardsList";
import { NewCardsFragment } from "./components/CardsList/NewCardsFragment";
import { PopularCardsFragment } from "./components/CardsList/PopularCardsFragment";
import { Promo } from "./components/Promo/Promo";

export default function Home() {
  return (
    <main className="main">
      <Banner />
      <CardsList id="popular" title="Популярные">
        <PopularCardsFragment />
      </CardsList>
      <CardsList id="new" title="Новинки">
        <NewCardsFragment />
      </CardsList>
      <Promo />
    </main>
  );
}
