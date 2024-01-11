import { data } from "./data.js";

export const getGamesByCategory = (caregory) => {
  return data.filter((game) => {
    return game.category.find((item) => item.name === caregory);
  });
};

export const getGameById = (id) => {
  return data.find((game) => game.id === Number(id));
}