"use client"
import styles from './styles.module.scss';
import Image from 'next/image';
import afsLogo from "./assets/afs-logo.png";
import Link from 'next/link';
import TextButtonMobil from './text-button/TextButtonMobil';
import { useState } from 'react';

const HeaderMobile = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={styles.headerMobile}>
        <div className={styles.logoContainerMobile}>
            <Link href="/">
                <Image src={afsLogo} alt={'logo'} width={65} height={65} className={styles.logo}/>
            </Link>
            <button type="button" className="inline-flex items-center p-2 ml-1 text-sm rounded-lg lg:hidden text-gray-400"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
        </div>
        <div className={`${styles.textButtonsContainerMobile} ${isMenuOpen ? styles.showMenu : styles.hideMenu}`}>
            <div className={styles.textButtonsMobile}>
                <TextButtonMobil text='inicio' link='/' setIsMenuOpen={setIsMenuOpen}/>
                <TextButtonMobil text='menores' link='menores' setIsMenuOpen={setIsMenuOpen}/>
                <TextButtonMobil text='libre' link='libre' setIsMenuOpen={setIsMenuOpen}/>
                <TextButtonMobil text='femenino' link='femenino' setIsMenuOpen={setIsMenuOpen}/>
            </div>
        </div>
    </div>
  )
}

export default HeaderMobile