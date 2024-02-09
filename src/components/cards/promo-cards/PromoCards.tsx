import styles from "./styles.module.scss";
import shopCollection from "./assets/shop-collection.png";
import playerRunning from "./assets/player-running.png";
import verano from "./assets/verano.png";
import Image from "next/image";
import BuyButton from "@/items/buttons/simple/BuyButton";
import EnrollButton from "@/items/buttons/simple/EnrollButton";


const PromoCards = () => {
  return (
    <>
        <div className={styles.promoContainer}>
            <div className={`${styles.cardContainer} ${styles.card3}`}>
                <div className={styles.jerseyImageContainer}>
                    <Image src={shopCollection} alt="collection"/>
                    <p>3 presentaciones</p>
                </div>
                <div className={styles.jerseyTextContainer}>
                    <h4>¡Adquiere la tuya!</h4>
                    <p>Camisetas oficiales <br/>del club</p>
                    <BuyButton number="+51980542495" request="Comprar camiseta del club"/>
                </div>
                <Image src={playerRunning} alt="player-running" className={styles.rightImage}/>
            </div>
            <div className={`${styles.cardContainer} ${styles.card2}`}>
                <div className={styles.promoVerano}>
                    <h4>Entramiento Verano</h4>
                    <p>Potencia tu juego y haz del verano tu temporada de victorias en nuestra Escuela de Fútbol</p>
                    <EnrollButton number="+51980542495" request="Promoción de verano"/>
                </div>
                <div className={styles.promoVeranoImgRight}
                    style={{
                        backgroundImage: `url(${verano.src})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}></div>
            </div>
        </div>
    </>
    
  )
}

export default PromoCards