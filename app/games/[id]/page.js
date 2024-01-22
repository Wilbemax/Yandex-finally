'use client';
import { endpoints } from "../../api/config";
import { getNormalizedGameDataById } from "../../api/api-utils";
import { GameNotFound } from "@/app/components/GameNotFound/GameNotFound";
import { Preloader } from "@/app/components/Preloader/Preloader";
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react';

import Styles from "./Game.module.css";

export default function GamePage (props) {
  const [game, setGame] = useState(null)
  const [preloaderVisible, setPreloaderVisible] = useState(true)
  const router = useRouter()
  useEffect(() => {
    async function fetchData() {
      setPreloaderVisible(true)
      const game = await getNormalizedGameDataById(endpoints.games, props.params.id);
      game.error ? setGame(null) : setGame(game);
      setPreloaderVisible(false)
    }
    fetchData()
  }, [])
  return (
    <main className="main">
      {
        game ? (
          <>
            <section className={Styles['game']}>
              <iframe className={Styles['game__iframe']} src={game.link}></iframe>
            </section>
            <section className={Styles['about']}>
              <h2 className={Styles['about__title']}>{game.title}</h2>
              <div className={Styles['about__content']}>
                <p className={Styles["about__description"]}>{game.description}</p>
                <div className={Styles["about__author"]}>
                  <p>Автор: <span className={Styles["about__accent"]}>{game.developer}</span></p>
                </div>
              </div>
              <div className={Styles["about__vote"]}>
                <p className={Styles["about__vote-amount"]}>За игру уже проголосовали: <span className={Styles["about__accent"]}>{game.users.length}</span></p>
                <button onClick={()=>{router.push('/login')}} className={`button ${Styles["about__vote-button"]}`}>Голосовать</button>
              </div>
            </section>
          </>
         
        ) : preloaderVisible ? <Preloader /> : (
          <GameNotFound />
        )
      }
      
    </main>
  )
}