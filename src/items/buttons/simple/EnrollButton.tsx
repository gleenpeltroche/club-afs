"use client"
import { WhatsAppMessage } from "@/utils/WhatsUpp";
import styles from "./styles.module.scss";

interface Props {
    number: string,
    request: string
  }
const EnrollButton = ({number, request}: Props) => {
  return (
    <button className={styles.enrollButton}
        onClick={() => WhatsAppMessage(number, request)}
    >Inscribirse</button>
  )
}

export default EnrollButton