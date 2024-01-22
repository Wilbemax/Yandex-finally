import { endpoints } from "@/app/api/config";
import { getNormalizedGamesDataByCategory } from "@/app/api/api-utils";
import { CardsList } from "../components/CardsList/CardsList";

export default async function New() {
  const tdsGames = await getNormalizedGamesDataByCategory(endpoints.games, "TDS");
  return (
    <main className="main-inner">
      <CardsList id="tds" title="TDS" data={tdsGames} />
    </main>
  );
}