import Styles from './GameNotFound.module.css';

export const GameNotFound = () => {
  return (
    <div className={Styles["not-found"]}>
      <h2 className={Styles["not-found__title"]}>Game not found</h2>
    </div>
  )
};