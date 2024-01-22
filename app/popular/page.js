import { endpoints } from "@/app/api/config";
import { getNormalizedGamesDataByCategory } from "@/app/api/api-utils";
import { CardsList } from "../components/CardsList/CardsList";

export default async function New() {
  const popularGames = await getNormalizedGamesDataByCategory(endpoints.games, "popular");
  return (
    <main className="main-inner">
      <CardsList id="popular" title="Популярные" data={popularGames} />
    </main>
  );
}