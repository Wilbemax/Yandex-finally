'use client';
import { endpoints } from "@/app/api/config";
import { useGetDataByCategory } from "@/app/api/api-hooks";
import { CardsList } from "../components/CardsList/CardsList";
import { Preloader } from "@/app/components/Preloader/Preloader";

export default function New() {
  const shooterGames = useGetDataByCategory(endpoints.games, "shooter");
  return (
    <main className="main-inner">
      {shooterGames ? <CardsList id="shooter" title="Шутеры" data={shooterGames} /> : <Preloader />}
    </main>
  );
}