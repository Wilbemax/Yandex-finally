import { endpoints } from "@/app/api/config";
import { getNormalizedGamesDataByCategory } from "@/app/api/api-utils";
import { CardsList } from "../components/CardsList/CardsList";

export default async function New() {
  const newGames = await getNormalizedGamesDataByCategory(endpoints.games, "new");
  return (
    <main className="main-inner">
      <CardsList id="new" title="Новинки" data={newGames} />
    </main>
  );
}