import { getGamesByCategory } from "../data/data-utils";
import { CardsList } from "../components/CardsList/CardsList";

export default function New() {
  const tdsGames = getGamesByCategory("TDS");
  return (
    <main className="main">
      <CardsList id="tds" title="TDS" data={tdsGames} />
    </main>
  );
}