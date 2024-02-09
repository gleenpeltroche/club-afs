import styles from "./styles.module.scss";
import Image, { StaticImageData } from "next/image";

interface Props {
    image : StaticImageData,
    upperTitle: string,
    mainTitle: string
}

const BannerCategory = ({image, upperTitle, mainTitle}: Props) => {
  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <div className={styles.right}>
          <h4>{upperTitle}</h4>
          <h2>{mainTitle}</h2>
        </div>
        <div className={styles.left}>
          <Image src={image.src} alt="imagen banner" width={500} height={500}/>
        </div>
      </div>
    </div>
  )
}

export default BannerCategory