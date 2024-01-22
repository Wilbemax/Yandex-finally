import { endpoints } from "@/app/api/config";
import { getNormalizedGamesDataByCategory } from "@/app/api/api-utils";
import { CardsList } from "../components/CardsList/CardsList";

export default async function New() {
  const pixelGames = await getNormalizedGamesDataByCategory(endpoints.games, "pixel");
  return (
    <main className="main-inner">
      <CardsList id="pixel" title="Пиксельные" data={pixelGames} />
    </main>
  );
}