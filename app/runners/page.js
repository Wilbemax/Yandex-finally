import { endpoints } from "@/app/api/config";
import { getNormalizedGamesDataByCategory } from "@/app/api/api-utils";
import { CardsList } from "../components/CardsList/CardsList";

export default async function New() {
  const runnerGames = await getNormalizedGamesDataByCategory(endpoints.games, "runner");
  return (
    <main className="main-inner">
      <CardsList id="runner" title="Раннеры" data={runnerGames} />
    </main>
  );
}