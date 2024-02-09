import { StaticImageData } from "next/image";
import styles from "./styles.module.scss";
import Link from "next/link";

interface Props {
  image: StaticImageData,
  text: string,
  link: string
}

const PrincipalCard = ({image, text, link}: Props) => {
  return (
    <div className={`${styles.cardContainer}`}
      style={{
        background: `
          linear-gradient(0deg, rgba(21, 29, 59, 0.75), rgba(21, 29, 59, 0.75)),
          url(${image.src})
        `,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Link
        href={`${link}`}
      >
        <div className={styles.cardContent}>
          <div className={styles.cardText}>
            {text}
          </div>
        </div>
      </Link>
    </div>
  )
}

export default PrincipalCard