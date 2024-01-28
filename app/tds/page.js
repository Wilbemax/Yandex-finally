'use client'

import { endpoints } from "@/app/api/config";
import { CardsList } from "../components/CardsList/CardsList";
import { useGetDataByCategory } from "@/app/api/api-hooks";
import { Preloader } from "@/app/components/Preloader/Preloader";

export default function New() {
  const tdsGames = useGetDataByCategory(endpoints.games, "TDS");
  return (
    <main className="main-inner">
      {tdsGames ? <CardsList id="tds" title="TDS" data={tdsGames} /> : <Preloader />}
    </main>
  );
}