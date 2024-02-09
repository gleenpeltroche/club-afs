"use client"
import { WhatsAppMessage } from "@/utils/WhatsUpp";
import styles from "./styles.module.scss";

interface Props {
  number: string,
  request: string
}
const BuyButton = ({number, request}: Props) => {
  return (
    <button className={styles.buyButton}
      onClick={() => WhatsAppMessage(number, request)}
    >Comprar</button>
  )
}

export default BuyButton