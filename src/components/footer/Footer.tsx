"use client"

import { externalRedirect } from "@/utils/Redirects";
import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.copyright}>
            <p>© Copyright <span>Club Deportivo AFS</span> Official website.</p>
        </div>
        <div className={styles.designer}>
            <p><span onClick={() => externalRedirect("https://wa.me/+51980542495")}>WebDesign</span>. Diseño web a tu medida.</p>
            <p>¡Contáctanos para empezar tu viaje digital!</p>
            <div className={styles.links}>
                <p><span onClick={() => externalRedirect("https://wa.me/+51980542495")}>contacto</span></p>
                <p>|</p>
                <p><span onClick={() => externalRedirect("https://wa.me/+51980542495")}>+51 980 542 495</span></p>
            </div>
        </div>
    </div>
  )
}

export default Footer