import styles from './styles.module.scss';
import Image from 'next/image';
import afsLogo from "./assets/afs-logo.png";
import TextButton from './text-button/TextButton';
import Link from 'next/link';
import Facebook from '@/items/icons/Facebook';
import WhatsApp from '@/items/icons/WhatsApp';

const HeaderDesktop = () => {
  return (
    <div className={styles.header}>
      <Link href="/">
          <Image src={afsLogo} alt={'logo'} width={65} height={65} className={styles.logo}/>
      </Link>
      <div className={styles.textButtons}>
          <TextButton text='inicio' link='/'/>
          <TextButton text='menores' link='menores'/>
          <TextButton text='libre' link='libre'/>
          <TextButton text='femenino' link='femenino'/>
          <div className={styles.separator}></div>
          <div className={styles.svgIcons}>
            <Facebook />
            <WhatsApp />
          </div>
      </div>
    </div>
  )
}

export default HeaderDesktop