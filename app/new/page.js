'use client';

import { endpoints } from "@/app/api/config";
import { useGetDataByCategory } from "@/app/api/api-hooks";
import { CardsList } from "../components/CardsList/CardsList";
import { Preloader } from "@/app/components/Preloader/Preloader";

export default function New() {
  const newGames = useGetDataByCategory(endpoints.games, "new");
  return (
    <main className="main-inner">
      {newGames ? <CardsList id="new" title="Новые" data={newGames} /> : <Preloader />}
    </main>
  );
}