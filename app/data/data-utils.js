import { data } from "./data.js";

export const getGamesByCategory = (caregory) => {
  return data.filter((game) => {
    return game.category.find((item) => item.name === caregory);
  });
};