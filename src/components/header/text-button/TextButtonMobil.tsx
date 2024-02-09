'use client';

import { Dispatch, SetStateAction } from "react";
import styles from "./styles.module.css";
import Link from "next/link";


interface Props {
    text: string,
    link: string
    setIsMenuOpen: Dispatch<SetStateAction<boolean>>
}

const TextButtonMobil = ({text, link, setIsMenuOpen}: Props) => {
    
    // const [isHovered, setIsHovered] = useState(false);
    
    return (
        <Link href={link}>
            <div className={`${styles.textButtonMobil}`}
                // onMouseEnter={() => setIsHovered(true)}
                // onMouseLeave={() => setIsHovered(false)}
                onClick={() => setIsMenuOpen(false)}
            >
                {text}
            </div>
        </Link>
    )
}

export default TextButtonMobil