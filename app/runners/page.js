import { getGamesByCategory } from "../data/data-utils";
import { CardsList } from "../components/CardsList/CardsList";

export default function New() {
  const runnerGames = getGamesByCategory("runner");
  return (
    <main className="main">
      <CardsList id="runner" title="Раннеры" data={runnerGames} />
    </main>
  );
}