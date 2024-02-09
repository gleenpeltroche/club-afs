import styles from "./styles.module.scss";
import menoresImage from "./assets/menores.jpg";
import Image from "next/image";
// import { WhatsAppMessage } from "@/utils/WhatsUpp";
import WhatsAppButton from "@/items/buttons/whatsapp/WhatsAppButton";


const MainInfantil = () => {
  return (
    <div className={styles.container}>
      <div className={styles.information}>
        <div className={styles.infotext}>
          <h2>¡Formando el futuro talento!</h2>
          <p>En el club AFS estamos comprometidos con el desarrollo integral de nuestros jóvenes talentos. <br />Somos un club de fútbol dedicado a la formación deportiva y personal de niños y adolescentes, brindándoles las herramientas necesarias para alcanzar su máximo potencial en el mundo del fútbol y en la vida.</p>
        </div>
        <Image src={menoresImage} alt="categoria menores" className={styles.infoimage}/>
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
          <p><span>Escuela de Fútbol Base:</span></p>
          <p>Para niños y niñas desde los 6 hasta los 12 años, donde se enfatiza en la enseñanza de las habilidades básicas del fútbol de manera lúdica y formativa.</p>
          <p><span>Categorías Juveniles:</span></p>
          <p>Para adolescentes de 13 a 17 años, donde se desarrolla un entrenamiento más especializado, trabajando aspectos técnicos, tácticos y físicos para preparar a los jugadores para competiciones más exigentes.</p>
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
          <WhatsAppButton number="+51980542495" request="Categoría infantil" />
        </div>
      </div>

    </div>
  )
}

export default MainInfantil