import Image from "next/image";
import styles from "./styles.module.scss";
import jersey from "./assets/jersey.png";
import background from "./assets/jersey-background.png";

const JerseyBanner = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.tagContainer}>
            <p>nueva camiseta</p>
          </div>
          <h2 className={styles.title}>Camiseta del club</h2>
          <h2 className={styles.title}>Temporada 2024/25</h2>
          <p className={styles.description}>En un emocionante evento cargado de pasión y expectación, nuestro club de fútbol se enorgullece enormemente en presentar la nueva camiseta que representará nuestra identidad en la próxima temporada.</p>
          <p className={styles.description}>Esta no es solo una prenda, sino un símbolo de nuestra historia, tradición y el compromiso incansable de nuestros jugadores.</p>
        </div>
        <div className={styles.right}>
          <div className={styles.jerseyContaier}>
            <Image src={background} alt="background" className={styles.jerseyBackground}/>
            <Image src={jersey} alt="jersey" className={styles.jerseyImage}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default JerseyBanner