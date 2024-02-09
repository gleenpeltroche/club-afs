import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <HeaderDesktop/>
      <HeaderMobile />
    </header>
  )
}

export default Header