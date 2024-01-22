import { endpoints } from "@/app/api/config";
import { getNormalizedData } from "@/app/api/api-utils";
import { getGamesByCategory } from "../data/data-utils";
import { CardsList } from "../components/CardsList/CardsList";

export default async function New() {
  const games = await getNormalizedData(endpoints.games);
  const runnerGames = getGamesByCategory(games, "runner");
  return (
    <main className="main-inner">
      <CardsList id="runner" title="Раннеры" data={runnerGames} />
    </main>
  );
}