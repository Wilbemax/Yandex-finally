'use client';

import { endpoints } from "@/app/api/config";
import { useGetDataByCategory } from "@/app/api/api-hooks";
import { CardsList } from "../components/CardsList/CardsList";
import { Preloader } from "@/app/components/Preloader/Preloader";

export default function New() {
  const popularGames = useGetDataByCategory(endpoints.games, "popular");
  return (
    <main className="main-inner">
      {popularGames ? <CardsList id="popular" title="Популярные" data={popularGames} /> : <Preloader />}
    </main>
  );
}