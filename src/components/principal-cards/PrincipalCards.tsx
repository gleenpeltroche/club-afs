import PrincipalCard from "../cards/principal/PrincipalCard";
import styles from "./styles.module.scss";
import kidsTraining from "./assets/train-kids.png";
import libreTraining from "./assets/card_libre_background.jpg";
import femeninoTraning from "./assets/card_femenino_background.jpg";
import CardsGrid from "../cards/cards-grid/CardsGrid";


const PrincipalCards = () => {
  return (
    <div className={styles.PrincipalCards}>
      <h3>Categorías</h3>
      <CardsGrid>
        <PrincipalCard image={kidsTraining} text="categoría menores" link="menores"/>
        <PrincipalCard image={libreTraining} text="categoría libre" link="libre"/>
        <PrincipalCard image={femeninoTraning} text="futbol femenino" link="femenino"/>
      </CardsGrid>
    </div>
    
  )
}

export default PrincipalCards