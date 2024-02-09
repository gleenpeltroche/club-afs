import styles from "./styles.module.scss";

type Props = {
    children: React.ReactNode;
};

const CardsGrid = ({children}: Props) => {
  return (
    <div className={styles.cardsContainer}>
      {children}
    </div>
  )
}

export default CardsGrid