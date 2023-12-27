import { Card } from "../Card/Card";

import Styles from "./CardsList.module.css";

export const CardsList = (props) => {
  const popularGames = [
    {
      id: 1,
      title: "Crystal Kepper",
      developer: "Lonely Baobab",
      description:
        "Управляйте боевым дроном и в течении 5 минут любой ценой защищайте кристалл от враждебных космо-слизней.",
      image:
        "https://code.s3.yandex.net/teens/pindie-games/cristal-keeper/cover.png",
      link: "https://code.s3.yandex.net/teens/pindie-games/cristal-keeper/game/index.html",
      users: [
        {
          id: 1,
          username: "Sasha",
          email: "Sasha@example.com",
        },
        {
          id: 2,
          username: "Misha",
          email: "misha@example.com",
        },
        {
          id: 3,
          username: "Ilya",
          email: "ilya@example.com",
        },
      ],
    },
    {
      id: 2,
      title: "Dangeons'n'Caves. Prologue",
      developer: "F-Style",
      description:
        "Безымянный герой исследует пещеры и подземелья, чтобы найти больше информации о себе",
      image:
        "https://code.s3.yandex.net/teens/pindie-games/dangeons-n-caves-prologue/cover.png",
      link: "https://code.s3.yandex.net/teens/pindie-games/dangeons-n-caves-prologue/game/index.html",
      users: [
        {
          id: 1,
          username: "Sasha",
          email: "Sasha@example.com",
        },
        {
          id: 2,
          username: "Misha",
          email: "misha@example.com",
        },
        {
          id: 3,
          username: "Ilya",
          email: "ilya@example.com",
        },
      ],
    },
    {
      id: 3,
      title: "Defence of Crystal",
      developer: "MastWe",
      description:
        "Вы играете за волшебника, последнюю надежду Земли, которую поглотил мрак... Вы должны любой ценой защищать магический кристалл, ведь это единственное, что сможет вернуть всё на круги своя, но полчища монстров так и норовят его уничтожить. Ваша задача уничтожить все кладбища.",
      image:
        "https://code.s3.yandex.net/teens/pindie-games/defence-of-crystal/cover.png",
      link: "https://code.s3.yandex.net/teens/pindie-games/defence-of-crystal/game/index.html",
      users: [
        {
          id: 1,
          username: "Sasha",
          email: "Sasha@example.com",
        },
        {
          id: 2,
          username: "Misha",
          email: "misha@example.com",
        },
        {
          id: 3,
          username: "Ilya",
          email: "ilya@example.com",
        },
      ],
    },
  ];

  const newGames = [
    {
      id: 4,
      title: "Go Away",
      developer: "Mahisto",
      description:
        'Цель игры: добраться до конца уровня, не столкнувшись с встречными автомобилями.Дополнительные возможности: в игре можно проезжать по увеличивающей скорость стрелке, которые улучшают характеристики машинки в скорости. "Прыжок" позволяет машинке перепрыгивать препятствие.',
      image: "https://code.s3.yandex.net/teens/pindie-games/go-away/cover.jpg",
      link: "https://code.s3.yandex.net/teens/pindie-games/go-away/game/index.html",
      users: [
        {
          id: 1,
          username: "Sasha",
          email: "Sasha@example.com",
        },
        {
          id: 2,
          username: "Misha",
          email: "misha@example.com",
        },
        {
          id: 3,
          username: "Ilya",
          email: "ilya@example.com",
        },
      ],
    },
    {
      id: 5,
      title: "G.U.N.N.E.R.",
      developer: "IDKWIAm",
      description:
        "Ваша задача — отбиваться от бесконечных волн врагов, которых будет становится все больше и больше, как долго вы сможете продержаться?",
      image: "https://code.s3.yandex.net/teens/pindie-games/gunner/cover.png",
      link: "https://code.s3.yandex.net/teens/pindie-games/gunner/game/index.html",
      users: [
        {
          id: 1,
          username: "Sasha",
          email: "Sasha@example.com",
        },
        {
          id: 2,
          username: "Misha",
          email: "misha@example.com",
        },
        {
          id: 3,
          username: "Ilya",
          email: "ilya@example.com",
        },
      ],
    },
    {
      id: 6,
      title: "Space Terror",
      developer: "IDKWIAm",
      description:
        "Летите сквозь космос и уничтожайте все на своем пути! Пролетите как можно дальше!",
      image:
        "https://code.s3.yandex.net/teens/pindie-games/space-terror/cover.png",
      link: "https://code.s3.yandex.net/teens/pindie-games/space-terror/game/index.html",
      users: [
        {
          id: 1,
          username: "Sasha",
          email: "Sasha@example.com",
        },
        {
          id: 2,
          username: "Misha",
          email: "misha@example.com",
        },
        {
          id: 3,
          username: "Ilya",
          email: "ilya@example.com",
        },
      ],
    },
    {
      id: 7,
      title: "Square Slayer",
      developer: "niclan",
      description: "circle shoot square heal levelup crash game",
      image:
        "https://code.s3.yandex.net/teens/pindie-games/square-slayer/cover.png",
      link: "https://code.s3.yandex.net/teens/pindie-games/square-slayer/game/index.html",
      users: [
        {
          id: 1,
          username: "Sasha",
          email: "Sasha@example.com",
        },
        {
          id: 2,
          username: "Misha",
          email: "misha@example.com",
        },
        {
          id: 3,
          username: "Ilya",
          email: "ilya@example.com",
        },
      ],
    },
  ];

  const targetArray =
    props.id === "popular" ? popularGames : props.id === "new" && newGames;
  
  return (
    <section className={Styles["list-section"]}>
      <h2 className={Styles["list-section__title"]} id={props.id}>
        {props.title}
      </h2>
      <ul className={Styles["cards-list"]}>
        {targetArray.map((item) => {
          return (
            <Card
              key={item.id}
              {...item}
            />
          );
        })}
      </ul>
    </section>
  );
};
