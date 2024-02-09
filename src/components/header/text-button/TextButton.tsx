'use client';

import { useState } from "react";
import styles from "./styles.module.css";
import Link from "next/link";


interface Props {
    text: string,
    link: string
}

const TextButton = ({text, link}: Props) => {
    
    const [isHovered, setIsHovered] = useState(false);
    
    return (
        <Link href={link}>
            <div className={`
                ${styles.textButton}
            `}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {text}
                {isHovered && <div className={styles.line}></div>}
            </div>
        </Link>
    )
}

export default TextButton