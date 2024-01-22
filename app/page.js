import { endpoints } from "./api/config";
import { getNormalizedData } from "./api/api-utils";
import { getGamesByCategory } from "./data/data-utils";
import { Banner } from "./components/Banner/Banner";
import { CardsList } from "./components/CardsList/CardsList";
import { Promo } from "./components/Promo/Promo";

export default async function Home() {
  const games = await getNormalizedData(endpoints.games);
  const popularGames = getGamesByCategory(games, "popular");
  const newGames = getGamesByCategory(games, "new");
  return (
    <main className="main">
      <Banner />
      <CardsList id="popular" title="Популярные" data={popularGames}/>
      <CardsList id="new" title="Новинки"  data={newGames}/>
      <Promo />
    </main>
  );
}
