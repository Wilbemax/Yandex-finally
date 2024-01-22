import { endpoints } from "@/app/api/config";
import { getNormalizedGamesDataByCategory } from "@/app/api/api-utils";
import { CardsList } from "../components/CardsList/CardsList";

export default async function New() {
  const shooterGames = await getNormalizedGamesDataByCategory(endpoints.games, "shooter");
  return (
    <main className="main-inner">
      <CardsList id="shooter" title="Шутеры" data={shooterGames} />
    </main>
  );
}