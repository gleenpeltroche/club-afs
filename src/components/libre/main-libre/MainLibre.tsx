import styles from "./styles.module.scss";
import libreImage from "./assets/libre.jpeg";
import Image from "next/image";
import WhatsAppButton from "@/items/buttons/whatsapp/WhatsAppButton";


const MainLibre = () => {
  return (
    <div className={styles.container}>
      <div className={styles.information}>
        <div className={styles.infotext}>
          <h2>¡Prepararación exigente!</h2>
          <p>En el club AFS estamos comprometidos con el desarrollo integral. <br />Somos un club de fútbol dedicado a la formación deportiva y personal, brindándoles las herramientas necesarias para alcanzar su máximo potencial en el mundo del fútbol y en la vida.</p>
        </div>
        <Image src={libreImage} alt="categoria libre" className={styles.infoimage}/>
      </div>

      <div className={styles.separator}></div>

      <div className={styles.information}>
        <div className={styles.infotext}>
          <h2>Nuestra Filosofía:</h2>
          <p>En nuestro club, creemos en la importancia de fomentar valores como el trabajo en equipo, el respeto, la disciplina y la superación personal. Más allá de los resultados en el campo de juego, buscamos formar individuos íntegros que sepan enfrentar los desafíos tanto dentro como fuera de la cancha.</p>
        </div>
      </div>

      <div className={styles.separator}></div>

      <div className={styles.information}>
        <div className={styles.infotext}>
          <h2>Nuestros Programas:</h2>
          <p>Ofrecemos programas de entrenamiento adaptados a distintas edades y niveles de habilidad.</p>
          <p><span>Categorías libre:</span></p>
          <p>Para todas las edades, donde se desarrolla un entrenamiento más especializado, trabajando aspectos técnicos, tácticos y físicos para preparar a los jugadores para competiciones más exigentes.</p>
        </div>
      </div>
      
      <div className={styles.separator}></div>

      <div className={styles.information}>
        <div className={styles.infotext}>
          <h2>Nuestro Equipo Técnico:</h2>
          <p>Contamos con un equipo de entrenadores altamente cualificados y comprometidos con el crecimiento de nuestros jugadores. Todos ellos poseen experiencia tanto en la formación de jóvenes talentos como en el ámbito competitivo del fútbol.</p>
        </div>
      </div>

      <div className={styles.separator}></div>

      <div className={styles.information}>
        <div className={styles.infotext}>
          <h2>Instalaciones:</h2>
          <p>Disponemos de instalaciones de primer nivel, con canchas de césped natural y artificial, así como espacios para el desarrollo físico y técnico de nuestros jugadores. Además, nos preocupamos por mantener un ambiente seguro y acogedor para todos los miembros de nuestra comunidad.</p>
        </div>
      </div>

      <div className={styles.separator}></div>

      <div className={styles.information}>
        <div className={styles.infotext}>
          <h3>Únete al club deportivo AFS</h3>
          <p>Si estás interesado en formar parte de nuestro club y comenzar tu viaje en el mundo del fútbol de la mano de profesionales comprometidos, ¡no dudes en contactarnos! Estamos abiertos a recibir nuevos talentos y acompañarlos en su camino hacia el éxito.</p>
          <WhatsAppButton number="+51980542495" request="Categoría libre" />
        </div>
      </div>

    </div>
  )
}

export default MainLibre