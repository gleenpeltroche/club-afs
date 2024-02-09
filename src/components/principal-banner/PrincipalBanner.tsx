import styles from "./styles.module.scss";
import portada from "./assets/portada2.png";
import Image from "next/image";

const PrincipalBanner = () => {

  return (
    <div className={styles.banner}>
      <div className={styles.left}>
        <h2>Escuela de fútbol</h2>
        <h1>Club Deportivo AFS</h1>
        
        <h2>Fútbol Masculino y Femenino</h2>
      </div>
      
      {/* <div className={styles.right}>
        <Image src={portada} alt="portada"/>
      </div> */}
      
    </div>
  )
}

export default PrincipalBanner